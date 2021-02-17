import axios from "axios";

export const addlunch =(request)=>(dispatch)=>{
    axios
    .post('/api/lunch', request)
    .then(()=>console.log(request))
    .catch((err)=> console.log(err))
}