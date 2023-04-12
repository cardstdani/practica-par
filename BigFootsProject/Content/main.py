import random
import math
import copy
import pandas as pd
import numpy as np
from IPython.display import display, HTML
import matplotlib.pyplot as plt

class TrieNode:
    def __init__(self, inputChar):
        self.char = inputChar
        self.end = False
        self.children = {}
 
class Trie():
    def __init__(self, startingElements=None):
        self.root = TrieNode("")
        if startingElements!=None:
          for i in startingElements: self.insert(i)
    def insert(self, word):
        node = self.root
        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
                new_node = TrieNode(char)
                node.children[char] = new_node
                node = new_node
        node.end = True      
    def searchAndSplit(self, x):
        node = self.root
        output = ["", ""]
        for char in x:
            if char in node.children:
                node = node.children[char]            
            else:
                return []        
            output[1 if node.end else 0] += node.char
        return output if node.end else []
    def toGraph(self):
      from pyvis.network import Network
      g = Network(directed =True)      
      g.show_buttons()

      nodeIndex = 1
      currentNode = 0
      q = [self.root]      
      g.add_node(currentNode, label="", color="red")
      tempLabels = {0:""}
      while q!=[]:
        n = q.pop(0)                     
        for i in n.children.values():
          tempLabels[nodeIndex] = tempLabels[currentNode]+i.char
          g.add_node(nodeIndex, label=tempLabels[currentNode]+i.char, color="#48e073" if i.end else "blue")
          g.add_edge(currentNode, nodeIndex)
          nodeIndex+=1
          q.append(i)
        currentNode+=1
      g.show('nx.html')

class MainGame:
  def __init__(self, sizeX=6, sizeY=6): #Inicializa/resetea el juego 
    self.sizeX = sizeX
    self.sizeY = sizeY
    self.objects = {".":[".",0],"a":["b",1],"b":["c",5],"c":["d",25],"d":["e",125],"e":["e",625],"1":["1",-25],"2":["3",-5],"3":["4",50],"4":["4",500],"x":["x",-50]}
    self.checkAndLoadFiles(1)    
    self.turn = 0    
    self.storage = "."
    self.bigFoots = [[(i,j), 0, False] for i in range(len(self.matrix)) for j in range(len(self.matrix[0])) if self.matrix[i][j]=="1"]
    self.updateActual()
    self.score = [sum(self.objects[j][1] for i in self.matrix for j in i)]
    self.appearances = {i:0 for i in self.objects.keys()}
    self.tr = Trie((''.join(chr(97+int(j)) for j in str(i))+str(k) for k in range(len(self.matrix[0])) for i in range(len(self.matrix))))
    self.tr.insert("exit")
    self.tr.insert("hint")
    self.tr.insert("*")
    #self.tr.toGraph() #Crea un grafo pyvis.network.Network del Trie usado para validar la entrada del usuario

  def checkAndLoadFiles(self, verbose=0): #Carga desde ficheros, verbose=1 para mostrar mensajes de error, sino esta por defecto en 0
    try:
      with open("tablero.txt", "r") as f:
        self.matrix=[]        
        for i in f.readlines():
          self.matrix.append([])
          for j in i.replace("\n", ""):
            if not j in self.objects: raise
            self.matrix[-1].append(j)
    except:
      self.matrix = [random.sample(["."]*45+["a"]*18+["b"]*4+["c"]*3+["1"]*2, self.sizeX) for i in range(self.sizeY)]
      print("Error al cargar el fichero tablero, usando tablero aleatorio...\U0001F92E"*verbose)      
    try:
      with open("secuencia.txt", "r") as f:
        self.seq=""
        for i in f.readline():
          if i not in self.objects and i != "w": raise
          self.seq += i
    except:
      self.seq = ""
      print("Error al cargar el fichero secuencia, usando secuencia aleatoria..."*verbose)      

  def main(self): #Función principal, 1 sola ejecución del juego
    print("Que empiece el juego:\U0001F609")
    self.showGame()    
    while any("." in x for x in self.matrix): #Mientras no haya casillas vacias en tablero      
      #Obtener y validar entrada
      message = self.validarEntrada(input("Mover a casilla: ").lower().replace(" ", ""))
      #message = self.validarEntrada("hint") #Modo de prueba del hint
      while not message[0]: message = self.validarEntrada(input("Jugada errónea\nMover a casilla: ").lower().replace(" ", ""))

      #Comprobar si es un mensaje especial y obtener coordenadas
      if "".join(message[1])=="exit": break
      if "".join(message[1])=="*": self.storage=self.actual; self.updateActual(); self.showGame(); continue;
      coordinates = (lambda l: (int("".join([str(ord(i)%97) for i in l[0]])), int(l[1])))(message[1]) if "".join(message[1])!="hint" else self.getHint()
      if not ((self.matrix[coordinates[0]][coordinates[1]]==".") ^ (self.actual=="w")): print("Jugada errónea"); continue;

      #Ejecutar un movimiento del juego (step en caso de entorno gym.Env), en tiempo O((3+b)*n^2 + (n-1)*2n)+O(b*(4 + 6*n^2 + (n-1)*3n))
      self.updateMatrix(coordinates)
      self.updateActual()
      self.turn+=1
      self.bigFoots = [[i[0], i[1]+1, i[2]] for i in self.bigFoots]
      self.score.append(sum(self.objects[j][1] for i in self.matrix for j in i))
      
      #Renderizar juego y hacer gráfica de puntuación/apariciones de cada objeto
      self.showGame()     
      for i in self.matrix:
        for j in i:
          self.appearances[j]+=1
    print("Partida terminada, GG:\U0001F44F")
    self.plotScore()
    plt.bar(list(self.appearances.keys()), list(self.appearances.values()))

  def getHint(self): #Obtener mejor jugada siguiente respecto a puntuación, casillas vacías y proximidad a BigFoots y objetos del mismo tipo, en tiempo O((1 + m + (3+b)*n^2 + (n-1)*2n + b*(4 + 6*n^2 + (n-1)*3n) + n^2 + )n^2)
    prevObjs = sum(4 - self.objects[b][1] for a in self.matrix for b in a if b!=".")
    tempValues=[-math.inf, (0,0)]
    #debugValues = [[0]*len(self.matrix[0]) for i in range(len(self.matrix))]
    for i in range(len(self.matrix)):
      for j in range(len(self.matrix[0])):
        if (self.matrix[i][j] == ".") ^ (self.actual=="w"): 
          newObj = copy.deepcopy(g)
          newObj.updateMatrix((i,j))
          newScore = sum(sum(self.objects[b][1] - 4*(b != "." or 0) for b in a) for a in newObj.matrix) + prevObjs - 10*newObj.minDistanceToElement((i,j), ["1", "2", newObj.matrix[i][j]])
          if newScore>tempValues[0]: tempValues = [newScore, (i,j)]
          #debugValues[i][j] = newScore
    #plt.imshow(debugValues, cmap='hot', interpolation='nearest')
    #plt.show()
    return tempValues[1]
  
  def plotScore(self, size=12): #Hace una gráfica turnos/puntuación y un ajuste lineal
    x = np.array(list(range(len(self.score))))
    m,c = self.linReg(x, self.score)
    fig = plt.figure(figsize=(size, size))
    plt.plot(x, self.score)
    plt.plot(x, m*x + c)
    plt.show()
  
  def linReg(self, x, y): #Hace cómodamente una regresión lineal con numpy
    return np.linalg.lstsq(np.vstack([x, np.ones(len(x))]).T, y)[0]

  def minDistanceToElement(self, coordinates, elements): #Función helper de self.hint(), se ejecuta en tiempo O(n^2 + (n-1)*2n) al estar también basado en BFS
    visited = set()
    q = [(coordinates, 0)]
    while q:
        n, distance = q.pop(0)
        if n in visited:
            continue
        visited.add(n)
        for i, j in ((n[0]-1, n[1]), (n[0]+1, n[1]), (n[0], n[1]-1), (n[0], n[1]+1)):
            if i < 0 or i >= len(self.matrix) or j < 0 or j >= len(self.matrix[0]): continue
            if self.matrix[i][j] in elements: return distance+1
            q.append(((i,j), distance+1))
    return 0   
  
  def updateActual(self): #O(1)
    self.actual = random.choice(["a"]*30+["b"]*5+["c"]*1+["1"]*6+["w"]*1) if self.seq=="" else self.seq[self.turn%len(self.seq)]
  
  def updateMatrix(self, coordinates): #Actualiza el tablero con el elemento actual
    if self.actual=="w": self.matrix[coordinates[0]][coordinates[1]] = "."; self.deleteBigFoot(coordinates); return;
    self.matrix[coordinates[0]][coordinates[1]] = self.actual
    if self.actual=="1": self.bigFoots.append([coordinates, 0, False]); self.updateBigFoots(); return;

    self.checkAndColapse(coordinates)
    self.updateBigFoots()

  def checkAndColapse(self, coordinates): #Comprobar colapsos de elementos en las coordenadas parámetro en tiempo O((3+b)*n^2 + (n-1)*2n)
    g = (self.getGroup(coordinates), self.matrix[coordinates[0]][coordinates[1]])
    if g[1]=="2": coordinates = max(g[0], key=lambda x:[k for k in self.bigFoots if k[0]==x][0][1])
    while len(g[0])>2:
      for i in g[0]: 
        if self.matrix[i[0]][i[1]] == "2": self.deleteBigFoot(i);
        self.matrix[i[0]][i[1]] = "."
      self.matrix[coordinates[0]][coordinates[1]] = self.objects[g[1]][0]
      g = (self.getGroup(coordinates), self.matrix[coordinates[0]][coordinates[1]])
  
  def deleteBigFoot(self, coordinates): #Borra el bigfoots que está en las coordenadas parámetro en tiempo O(b)
    for i in range(len(self.bigFoots)):
      if self.bigFoots[i][0] == coordinates: del self.bigFoots[i]; break;

  def updateBigFoots(self): #Actualiza los bigfoots con sus mecánicas de movimiento en tiempo O(b*(4 + 6*n^2 + (n-1)*3n))
    for i in enumerate(self.bigFoots):
      n = i[1][:]
      if not n[2] and n[1]>0:
        for j in ((n[0][0]-1, n[0][1]), (n[0][0], n[0][1]+1), (n[0][0]+1, n[0][1]), (n[0][0], n[0][1]-1)):
          if j[0] < 0 or j[0] >= len(self.matrix) or j[1] < 0 or j[1] >= len(self.matrix[0]): continue
          if self.matrix[j[0]][j[1]]==".": self.matrix[j[0]][j[1]]="1"; self.matrix[n[0][0]][n[0][1]]="x" if n[1]>10 else "."; self.bigFoots[i[0]][0]=j[:]; break;

      #Si no se ha movido el BigFoot porque no puede, intentar colapsarlo
      if n[0]==self.bigFoots[i[0]][0]: 
        g = self.getGroup(n[0], True)
        if not "." in (self.matrix[k[0]][k[1]] for k in g):
          for j in g: self.matrix[j[0]][j[1]] = "2"; bfIndex = [k for k in range(len(self.bigFoots)) if self.bigFoots[k][0]==j][0]; self.bigFoots[bfIndex][2]=True;  
          self.checkAndColapse(n[0])

  def getGroup(self, coordinates, bigFootMode=False): #Devuelve un grupo de coordenadas de celdas a partir de una origen usado BFS en tiempo O(n^2 + (n-1)*2n)
    visited = set()
    output = [coordinates]
    q = [coordinates]
    while q!=[]:
      n = q.pop(0)
      visited.add(n)
      for i in ((n[0]-1, n[1]), (n[0], n[1]+1), (n[0]+1, n[1]), (n[0], n[1]-1)):
        if i[0] < 0 or i[0] >= len(self.matrix) or i[1] < 0 or i[1] >= len(self.matrix[0]): continue
        if (not i in visited) and (self.matrix[i[0]][i[1]]==self.matrix[coordinates[0]][coordinates[1]] or (bigFootMode and self.matrix[i[0]][i[1]]==".")): q.append(i); output.append(i);
    return output

  def validarEntrada(self, s):
    s = self.tr.searchAndSplit(s)
    return (True if s else False, s)

  def showGame(self): #Renderiza el tablero
    df = pd.DataFrame(self.matrix, columns=list(range(len(self.matrix[0]))), index=[''.join(chr(65+int(j)) for j in str(i)) for i in range(len(self.matrix))])
    display(HTML(df.to_html()))
    print(f"\nTurno: {self.turn} Puntos:{self.score[-1]}\nAlmacen: [{self.storage}] Actual: [{self.actual}]")

if __name__=="__main__":
    #random.seed(368) #311
    g = MainGame()
    g.main()