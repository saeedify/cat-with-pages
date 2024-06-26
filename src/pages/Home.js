import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const { data, isLoading, refetch } = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then( (res)=>res.data );
    });

    if(isLoading)
        return <h1>Loading...</h1>

    return (
        <h1>
            This is homepage <p>{ data?.fact }</p> 
            <button onClick={refetch}>Update Data</button>
        </h1>
    );
}