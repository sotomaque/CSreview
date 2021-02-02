/*

*/
function numConnectedComponents(n, e) {
  // build graph
  // BFS / DFS
  // outter loop
  // traverse entire graph until every vertex is visited
  // keeping count of num times needed
  adjList = new Array(n).fill([]);
  for (const { src, dst } of e) {
    adjList[src].push(dst);
    adjList[dst].push(src);
  }

  visited = new Array(n).fill(-1);

  function dfs(source) {
    visited[source] = 1;
    for (const neighbor of adjList[source]) {
      if (visited[neighbor] === -1) {
        dfs(neighbor);
      }
    }
  }

  // function bfs(source) {
  //   visited[source] = 1;
  //   q = queue.dequeue([source]);
  //   while (!q.isEmpty()) {
  //     node = q.dequeue();
  //     for (const neighbor of adjList[node]) {
  //       if (visisted[neighbor] === -1) {
  //         visited[neighbor] = 1;
  //         q.enqueue(neighbor);
  //       }
  //     }
  //   }
  // }

  components = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === -1) {
      components++;
      dfs(i);
    }
  }

  return components;
}
