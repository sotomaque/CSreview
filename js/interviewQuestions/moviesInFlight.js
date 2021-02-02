/*
You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

e.g.
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250

Output from aonecode.com
[90, 125]
90min + 125min = 215 is the maximum number within 220 
*/

function moviesInFlight(movies, duration) {
  const res = getMoviesWithMaxDuration(movies, duration - 30);
  return res;
}

// picks two movies that from nums array
// such that the sum of their values <= limit
function getMoviesWithMaxDuration(nums, limit) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let res = [];
  let runningMax = 0;

  while (left < right) {
    const duration = nums[left] + nums[right]; // 135
    if (duration > limit) {
      // 135 > 220 ? no
      right--;
    }
    if (duration <= limit) {
      if (runningMax < duration) {
        res[0] = nums[left];
        res[1] = nums[right];
      }

      left++;
    }
  }

  return res;
}
const movie_duration = [90, 85, 75, 60, 120, 150, 125];
const d = 250;

res = moviesInFlight(movie_duration, d);

console.log(res);
