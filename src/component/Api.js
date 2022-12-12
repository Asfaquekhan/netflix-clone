
const key ="64ff6c5098cdafbe0dcb9398d4334f83"
const api={
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Tranding:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    Tv:`https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=${key}&language=en-US`,
    genres:`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`

}
export default api