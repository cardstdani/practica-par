var matrix = [];
var actual;
var turn = 0;
var score = [];
var bigFoots = [];
var objs = [];
var objects = {".": [".", 0, empty_C], "a": ["b", 1, a_C], "b": ["c", 5, b_C], "c": ["d", 25, c_C], "d": ["e", 125, d_C], "e": ["e", 625, e_C], "1": ["1", -25, b1_C], "2": ["3", -5, b2_C], "3": ["4", 50, b3_C], "4": ["4", 500, b4_C], "x": ["x", -50, x_C]};

main();

function main() {
    let arr = Array(18).fill("a").concat(Array(4).fill("b"), Array(3).fill("c"), Array(2).fill("1"), Array(45).fill("."));
    for (let i = 0; i < 6; i++) {
        matrix.push([]);
        for (let j = 0; j < 6; j++) {
            let elem = arr[Math.floor(arr.length * Math.random())];
            matrix[i].push(elem);
            if (elem == "1") {bigFoots.push([[i, j], 0, false]);}
        }
    }

    var x=1100;
    var y=600;
    for (let i = 0; i < matrix.length; i++) {
        x+=200;
        y=600;
        for (let j = 0; j < matrix[0].length; j++) {
            y+=200;
            let newActor = SpawnActor(objects[matrix[i][j]][2]);
            var vector = new Vector();
            vector.X=x; vector.Y=y; vector.Z=0;
            newActor.SetActorLocation(vector);
            objs.push(newActor);
        }
    }

    updateActual();
    updateUI();
}

function SpawnActor(actor) {
    return new actor(GWorld);
}

function clicked(event) {
    if (!matrix.some(x => x.includes("."))) {
        updateUI();
        alert("Has perdido, lo lamento😔😔, por favor recarga la página"); return;
    }
    var coordinates = (event.currentTarget.id === "bot") ? hint() : [parseInt(event.currentTarget.parentNode.id.substring(1)), parseInt(event.currentTarget.id.substring(1))];
    if (matrix[coordinates[0]][coordinates[1]] != ".") {
        if (actual === "w") {
            matrix[coordinates[0]][coordinates[1]] = ".";
            deleteBigFoot(coordinates);
            updateActual();
            updateUI();
            return;
        } else {return;}
    }
    if (actual === "w") {return;}

    updateMatrix(coordinates);
    updateActual();
    bigFoots = bigFoots.map(i => [i[0], i[1] + 1, i[2]]);
    turn += 1;
    updateUI();
}

function hint() {
    let tmpMatrix = JSON.parse(JSON.stringify(matrix));
    let tmpTurn = turn;
    let tmpScore = JSON.parse(JSON.stringify(score));
    let tmpBigFoots = JSON.parse(JSON.stringify(bigFoots));

    let prevObjs = 0;
    for (let a of matrix) {
        for (let b of a) {
            if (b !== ".") {
                prevObjs += 1-objects[b][1];
            }
        }
    }

    let tempValues = [-Infinity, [0, 0]];
    let debugValues = [...Array(matrix.length)].map(() => Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if ((matrix[i][j] === "." && actual != "w") || (matrix[i][j] != "." && actual === "w")) {
                updateMatrix([i, j]);

                let newScore = matrix.reduce((acc, row) => acc + row.reduce((acc2, val) => acc2 + (objects[val][1] - (val !== "." ? 1 : 0)), 0), 0) + (prevObjs - 12 * minDistanceToElement([i, j], ["1", "2", matrix[i][j]]));
                if (newScore > tempValues[0]) {tempValues = [newScore, [i, j]];}

                matrix = JSON.parse(JSON.stringify(tmpMatrix));
                turn = tmpTurn;
                score = JSON.parse(JSON.stringify(tmpScore));
                bigFoots = JSON.parse(JSON.stringify(tmpBigFoots));
            }
        }
    }
    return tempValues[1];
}

function minDistanceToElement(coordinates, elements) {
    let visited = new Set();
    let q = [[coordinates, 0]];
    while (q.length > 0) {
        let [n, distance] = q.shift();
        if (visited.has(JSON.stringify(n))) {continue;}
        visited.add(JSON.stringify(n));
        for (let [i, j] of [[n[0] - 1, n[1]], [n[0] + 1, n[1]], [n[0], n[1] - 1], [n[0], n[1] + 1]]) {
            if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {continue;}
            if (elements.includes(matrix[i][j])) {return distance + 1;}
            q.push([[i, j], distance + 1]);
        }
    }
    return 0;
}

function deleteBigFoot(coordinates) {
    for (var i = 0; i < bigFoots.length; i++) {
        if (bigFoots[i][0].every((element, index) => element === coordinates[index])) {bigFoots.splice(i, 1); break;}
    }
}

function updateMatrix(coordinates) {
    if (actual === "w") {matrix[coordinates[0]][coordinates[1]] = "."; deleteBigFoot(coordinates); return;}
    matrix[coordinates[0]][coordinates[1]] = actual;
    if (actual == "1") {bigFoots.push([coordinates, 0, false]); updateBigFoots(); return;}

    checkAndColapse(coordinates);
    updateBigFoots();
}

function checkAndColapse(coordinates) {
    var g = [getGroup(coordinates), matrix[coordinates[0]][coordinates[1]]];
    /*if (g[1] === "2") {
        coordinates = g[0].reduce((acc, x) => {
            let bigFoot = bigFoots.find(k => k[0] === x);
            if (bigFoot) {
                return bigFoot[1] > acc[1] ? bigFoot : acc;
            } else {
                return acc;
            }
        }, [-1, -Infinity]);
    }*/
    while (g[0].length > 2) {
        for (let i = 0; i < g[0].length; i++) {
            if (matrix[g[0][i][0]][g[0][i][1]] === "2") {deleteBigFoot(g[0][i]);}
            matrix[g[0][i][0]][g[0][i][1]] = ".";
        }

        matrix[coordinates[0]][coordinates[1]] = objects[g[1]][0];
        g = [self.getGroup(coordinates), matrix[coordinates[0]][coordinates[1]]];
    }
}
function getGroup(coordinates, bigFootMode = false) {
    visitedMatrix = Array(matrix.length).fill(false).map(() => Array(matrix[0].length).fill(false));
    let output = [coordinates];
    let q = [coordinates];
    while (q.length !== 0) {
        let n = q.shift();
        visitedMatrix[n[0]][n[1]] = true;
        for (let i of [[n[0] - 1, n[1]], [n[0], n[1] + 1], [n[0] + 1, n[1]], [n[0], n[1] - 1]].filter(j => j[0] >= 0 && j[1] >= 0)) {
            try {
                if ((!visitedMatrix[i[0]][i[1]]) && (matrix[i[0]][i[1]] === matrix[coordinates[0]][coordinates[1]] || (bigFootMode && matrix[i[0]][i[1]] === "."))) {
                    q.push(i);
                    output.push(i);
                }
            } catch (e) { }
        }
    }
    return output;
    /*let visited = new Set();
    let output = [coordinates];
    let q = [coordinates];
    while (q.length !== 0) {
        let n = q.shift();
        visited.add(n);
        for (let i of [[n[0] - 1, n[1]], [n[0], n[1] + 1], [n[0] + 1, n[1]], [n[0], n[1] - 1]]) {
            if (i[0] < 0 || i[0] >= matrix.length || i[1] < 0 || i[1] >= matrix[0].length) {continue;}
            if (!visited.has(i) && (matrix[i[0]][i[1]] === matrix[coordinates[0]][coordinates[1]] || (bigFootMode && matrix[i[0]][i[1]] === "."))) {
                q.push(i); output.push(i);
            }
        }
    }
    return output;*/
}

function updateBigFoots() {
    for (let i of bigFoots.entries()) {
        let n = i[1].slice();
        if (!n[2] && n[1] > 0) {
            for (let j of (l => l.filter(k => k[0] >= 0 && k[1] >= 0))([[n[0][0] - 1, n[0][1]], [n[0][0], n[0][1] + 1], [n[0][0] + 1, n[0][1]], [n[0][0], n[0][1] - 1]])) {
                try {
                    if (matrix[j[0]][j[1]] === ".") {
                        matrix[j[0]][j[1]] = "1";
                        matrix[n[0][0]][n[0][1]] = n[1] > 10 ? "x" : ".";
                        bigFoots[i[0]][0] = j.slice();
                        break;
                    }
                } catch (e) { }
            }
        }

        if (n[0].toString() === bigFoots[i[0]][0].toString()) {
            let g = getGroup(n[0], true);
            if (!g.some(k => matrix[k[0]][k[1]] === ".")) {
                for (let j of g) {
                    matrix[j[0]][j[1]] = "2";
                    let bfIndex = bigFoots.findIndex(k => k[0].toString() === j.toString());
                    bigFoots[bfIndex][2] = true;
                }
                checkAndColapse(n[0]);
            }
        }
    }
}

function updateUI() {
    var x=1100;
    var y=600;
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        x+=200;
        y=600;
        for (let j = 0; j < matrix[0].length; j++) {
            y+=200;
            let pos = matrix[0].length*i+j;
            objs[pos].DestroyActor();
            let newActor = SpawnActor(objects[matrix[i][j]][2]);
            var vector = new Vector();
            vector.X=x; vector.Y=y; vector.Z=0;            
            newActor.SetActorLocation(vector);            
            objs[pos]=newActor;
            sum += objects[matrix[i][j]][1];
        }
    }
    
    score.push(sum); 
}

function updateActual() {
    let arr = Array(30).fill("a").concat(Array(5).fill("b"), Array(1).fill("c"), Array(2).fill("1"), Array(2).fill("w"));
    actual = arr[Math.floor(arr.length * Math.random())];
}