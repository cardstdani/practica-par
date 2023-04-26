var matrix = [];
var actual;
var turn = 0;
var score = [];
var bigFoots = [];
var objs = [];
var objects = {".": [".", 0, empty_C], "a": ["b", 1, a_C], "b": ["c", 5, b_C], "c": ["d", 25, c_C], "d": ["e", 125, d_C], "e": ["e", 625, e_C], "1": ["1", -25, b1_C], "2": ["3", -5, b2_C], "3": ["4", 50, b3_C], "4": ["4", 500, b4_C], "x": ["x", -50, x_C]};
var scoreText;

main();

function main() {
    let arr = Array(18).fill("a").concat(Array(4).fill("b"), Array(3).fill("c"), Array(2).fill("1"), Array(45).fill("."));
    for (let i = 0; i < 14; i++) {
        matrix.push([]);
        for (let j = 0; j < 14; j++) {
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
            newActor.K2_SetActorLocation(vector);
            objs.push(newActor);
        }
    }

    //Actual
    let newActor = SpawnActor(a_C);
    var vector = new Vector();
    vector.X=0; vector.Y=0; vector.Z=0;
    newActor.K2_SetActorLocation(vector);
    objs.push(newActor);

    //Score
    newActor = SpawnActor(ScoreText_C);
    var vector = new Vector();
    vector.X=212990; vector.Y=172450; vector.Z=-4470;
    newActor.K2_SetActorLocation(vector);
    vector = new Rotator();
    vector.Pitch=0; vector.Yaw=90; vector.Roll=0;
    newActor.K2_SetActorRotation(vector);    
    scoreText = newActor;
    scoreText.RootComponent.SetWorldScale3D({X: 4.0, Y: 4.0, Z: 4.0});

    updateActual();
    updateUI();
}

function SpawnActor(actor) {
    return new actor(GWorld);
}

function clicked(index) {
    if (!matrix.some(x => x.includes("."))) {
        updateUI();
        alert("Has perdido, lo lamento😔😔, por favor recarga la página"); return;
    }
    var coordinates = [Math.floor(index/14), index - 14*Math.floor(index/14)];
    console.log(index, coordinates)
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
        g = [getGroup(coordinates), matrix[coordinates[0]][coordinates[1]]];
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
    var x= 212360//1100;
    var y= 173320//600;
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        x+=120;
        y=173320//600;
        for (let j = 0; j < matrix[0].length; j++) {
            y+=120;
            let pos = matrix[0].length*i+j;
            objs[pos].K2_DestroyActor();
            
            let newActor = SpawnActor(objects[matrix[i][j]][2]);
            var vector = new Vector();
            vector.X=x; vector.Y=y; vector.Z=-4860;            
            newActor.K2_SetActorLocation(vector);         
            objs[pos]=newActor;
            sum += objects[matrix[i][j]][1];
            objs[pos].OnTakeAnyDamage.Add(function(DamagedActor, DamageAmount, DamageType, InstigatedBy, DamageCauser){
                clicked(objs.indexOf(DamagedActor));
            });
        }
    }
        
    scoreText.Score = sum;
}

function updateActual() {
    let arr = Array(30).fill("a").concat(Array(5).fill("b"), Array(1).fill("c"), Array(2).fill("1"), Array(0).fill("w"));
    actual = arr[Math.floor(arr.length * Math.random())];

    objs[objs.length-1].K2_DestroyActor();
    let newActor = SpawnActor(objects[actual][2]);
    var vector = new Vector();
    vector.X=213850; vector.Y=172460; vector.Z=-4600;
    newActor.K2_SetActorLocation(vector);
    vector = new Rotator();
    vector.Pitch=0; vector.Yaw=0; vector.Roll=90;
    newActor.K2_SetActorRotation(vector);
    objs[objs.length-1]=newActor;
}