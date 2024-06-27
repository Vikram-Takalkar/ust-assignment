
import axios from "axios";

const mockURL = "http://localhost:8080/Machines"

const _getMachineData = () =>{
    return axios.get(mockURL)
}

export{
    _getMachineData,
}