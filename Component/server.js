import axios from "axios";

// export const baseUrl = "https://259e-2400-adc5-17f-8500-452b-e19e-ac15-c364.in.ngrok.io/";
export const baseUrl = 'https://krayedar.herokuapp.com/'
export default axios.create({
    baseURL: baseUrl,
});
