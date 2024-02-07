import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    const {  data, isLoading, refetch} = useQuery({queryKey:["cat"], queryFn: async () => {
        const response = Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        return response;
    }});  

    if(isLoading){
        return(
            <h1>IS Loading</h1>
        )
    }

    return(
        <h1>{data?.fact}
        <button onClick={refetch}>Update</button>
        </h1>
        
    )
}