/*
given a position on a 2d grid, c, n points also on that grid
and an integer, k

return the k closest points to c

function kClosest(points, center, k) {
  distances = [dist(p, center) for p in points]
  heapq.heapify(distances)
  return [heapq.heappop(distance) for _ in range(k)]
}

function dist(a, b) {
  return Math.sqrt((Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2)))
}
*/
