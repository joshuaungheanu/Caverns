

// Check each node and define the most recent center node
function isNodeCentered(src, node){
	if(node.residue < LowestResidue){
		LowestX = node.posX;
		LowestY = node.posY;
		LowestResidue = node.residue;
		LowestResidueCaveName = node.name
		src.clearRect(0, 0, can.width, can.height);
		src.font = "Bold 12px Helvetica";
		src.fillText("Bot Tavel Information:", 10, 40);
		src.fillText("----------------------------------------------", 10, 50);
		src.fillText("Most Recent Centered Room:", 10, 60);
		src.fillText("Cave Room Number: " + LowestResidueCaveName, 10, 70);
		src.fillText("Residue: " + LowestResidue, 10, 85);
	}
}

// Print nodes info
function print(src, context){
	src.clearRect(0, 0, can.width, can.height);
	src.font = "Bold 12px Helvetica";
	src.fillText("Bot Tavel Information:", 10, 40);
	src.fillText("----------------------------------------------", 10, 50);
	src.fillText("Most Recent Centered Room:", 10, 60);
	src.fillText("Cave Room Number: " + LowestResidueCaveName, 10, 70);
	src.fillText("Residue: " + LowestResidue, 10, 85);
	src.fillText("Complete", 10, 100);
	drawYellowRoom(context, LowestX, LowestY, LowestResidueCaveName);

}

// Function that generates the edges for the graph

function Graph(numOfVertices) {
		var numOfVertices;
		var adjList;
		this.adjList = new Map();
		this.numOfVertices = numOfVertices;
	}
	Graph.prototype.addVertex=function(v) {
			this.adjList.set(v,[]);
	}
	Graph.prototype.addEdge=function(v, w) {
		for (i = 0; i < this.numOfVertices; i++) {
			if (w[i] != v) {
				this.adjList.get(v).push(w[i]);
			}
		}
	}
	Graph.prototype.grabEdges=function(v) {
		return this.adjList.get(v);
	}
	Graph.prototype.printGraph=function() {
		var get_keys = this.adjList.keys();

		for (var i of get_keys) {
			var get_values = this.adjList.get(i);
			var adjacentNodes = "";
			for (var j of get_values) {
				adjacentNodes += j + " ";
			}
			console.log(i + " -> " + adjacentNodes);
		}
	}

	function Stack() {
		var items;
		this.items = [];
		Stack.prototype.push=function(element) {
			this.items.push(element);
		}
		Stack.prototype.pop=function() {
			if (this.items.length == 0) {
				return "EMPTY";
			}
			return this.items.pop();
		}
		Stack.prototype.isEmpty=function() {
			return this.items.length == 0;
		}
		Stack.prototype.peek=function() {
			return this.items[this.items.length-1];
		}
		Stack.prototype.printStack=function() {
			var str = "";
			for (var i = 0; i < this.items.length; i++) {
				str += this.items[i] + " ";
			}
			return str;
		}
	}

	// Defining the position of the node
	function Node(first, second, third, x, y) {
		var first, second, third;
		var posX = 0;
		var posY = 0;
		var name;
		var visited;
		var edgesDrawn;
		var edgesDrawnCount;
		var residue;
		this.first = first;
		this.second = second;
		this.third = third;
		this.name = first.toString() + "," + second.toString() + "," + third.toString();
		this.visited = false;
		this.edgesDrawn = false;
		this.edgesDrawnCount = 0;
		this.posX = x;
		this.posY = y;
		var sum = Math.abs(first-second) + Math.abs(second-third) + Math.abs(third-first);
		this.residue = sum;
	}

	// Sleep function for implementation of cave position
	function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
