class Graph {
  // time-complexity:
  //  - O(m + n)
  DFSstack(s) {
    const captured,
      visited = [];
    captured[s] = 1;
    visited[s] = 1;

    const myStack = new Stack();
    myStack.push(s);

    while (!myStack.isEmpty()) {
      const v = myStack.pop();
      captured[v] = 1;
      for (w in AdjList[v]) {
        if (!visited[w]) {
          visited[w] = 1;
          parent[w] = v;
          myStack.push(w);
        }
      }
    }
  }
  // time-complexity:
  //  - O(m + n)
  DFSrecursive(s) {
    visited[s] = 1; // O(1) work done N times => O(n)
    for (w in AdjList[s]) {
      // O(m) times
      if (!visited[s]) {
        parent[w] = s;
        DFS(w);
      }
    }
  }

  DFS(source, c) {
    visited[source] = c;
    for (w in AdjList[source]) {
      if (!visited[w]) {
        DFS(w, c);
      }
    }
  }

  // time-complexity
  // - O()
  findComponents() {
    let component = 0;
    for (let i = 1; i < V; i++) {
      if (!visited[i]) {
        component++;
        DFS(i, component);
      }
    }
    return component;
  }
}
