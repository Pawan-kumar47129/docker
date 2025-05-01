import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/MovieSlice";
import { useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_AUTHORIZATION_TOKEN,
  },
};
const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
};
export default useNowPlayingMovies;
