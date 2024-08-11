import axios from "axios";

export async function fetchPopular() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTg5NzZiMzBjOGQ0OTQ5NDRhNzdiMTMyZWE1ZDgyYSIsIm5iZiI6MTcyMzM3MzI4My4yNTI0MjcsInN1YiI6IjY0ZDA4ZTE0ODUwOTBmMDEyNWJkNGZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KFtQVGRWg4pyZSyGayX3BdASKYRUld9LPd9i36E7Ofs'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    
  }
}