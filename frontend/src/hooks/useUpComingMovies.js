import axios from "axios"
import {useDispatch} from "react-redux"
import { getUpComingMovies } from "../redux/MovieSlice"
import { useEffect } from "react";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_AUTHORIZATION_TOKEN
    }
};
const useUpComingMovies=async()=>{
   
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try{
            const res=await axios.get("https://api.themoviedb.org/3/movie/upcoming",options);
            dispatch(getUpComingMovies(res.data.results));
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    },[])
}
export default useUpComingMovies;