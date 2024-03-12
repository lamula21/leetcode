/**
 * Clone Graph
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * class Node {
 *  public int val;
 *  public List<Node> neighbors;
 * }
 *
 * https://leetcode.com/problems/clone-graph/description/
 *
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 *
 * Explanation: There are 4 nodes in the graph.
 * 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 */

//  Definition for Node.
class Nodes {
	val: number
	neighbors: Nodes[]
	constructor(val?: number, neighbors?: Nodes[]) {
		this.val = val === undefined ? 0 : val
		this.neighbors = neighbors === undefined ? [] : neighbors
	}
}

function cloneGraph(node: Nodes | null): Nodes | null {
	if (!node) return null

	const cloneMap = new Map<Nodes, Nodes>().set(node, new Nodes(node.val))
	const queue = [node]

	while (queue.length) {
		let current = queue.shift()

		for (let neighbor of current?.neighbors!) {
			if (!cloneMap.has(neighbor)) {
				cloneMap.set(neighbor, new Nodes(neighbor.val))
				queue.push(neighbor)
			}

			cloneMap.get(current!)?.neighbors.push(neighbor)
		}
	}

	return cloneMap.get(node)!
}
