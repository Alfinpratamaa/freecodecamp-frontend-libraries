export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.MOVIE_TOKEN_HEADER,
  },
};
