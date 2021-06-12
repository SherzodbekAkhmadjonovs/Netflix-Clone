const API_KEY = `8a61acd380dffa9e4040ef93c2330254`
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres-28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres-35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres-27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests
// "358db23dd6ae48da3e4c7aa99a7aa60f"