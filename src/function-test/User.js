import Axios from "axios";

const User = {
    getUser : () =>{
        return Axios.get("./data.json").then(res=>res.data)
    }   
}

export default User