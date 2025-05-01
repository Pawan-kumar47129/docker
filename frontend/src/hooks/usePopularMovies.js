import {useDispatch} from "react-redux";
import { getPopularMovies } from "../redux/MovieSlice";

import axios from "axios";
import { useEffect } from "react";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_AUTHORIZATION_TOKEN
    }
};
const usePopularMovies=async()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try{
                const res=await axios.get("https://api.themoviedb.org/3/movie/popular",options);
                dispatch(getPopularMovies(res.data.results));
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    },[])
}
export default usePopularMovies;