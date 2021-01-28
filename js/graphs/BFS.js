class Graph {
  // time-complexity:
  //  - O(m + n)
  BFS(s) {
    const captured,
      visited = [];
    captured[s] = 1;
    visited[s] = 1;

    const q = new Queue();
    q.enqueue(s);

    while (!q.isEmpty()) {
      const v = q.dequeue();
      for (w in AdjList[v]) {
        if (!visited[w]) {
          visited[w] = 1;
          parent[w] = v;
          q.enqueue(w);
        }
      }
    }
  }
}
