import axios from "axios";
import { time } from "console";


const api = axios.create({
    baseURL: "https://itunes.apple.com/",
    timeout: 10000
});

