import Axios from "axios";
import { url } from "../const";

const practicum = {};

practicum.listPracticum = async () => {
    const urlList = url.api + "practicum";
    const res = await Axios.get(urlList)
    .then(response=> {return response.data})
    .catch(error=>{ return error; })
    return res;
}

export default practicum;
