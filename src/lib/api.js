import axios from "axios";
import FormData from "form-data";
const BaseUrl = 'http://localhost:5000';

export async function createPicture( picture) { 
    const form = new FormData();
    form.append('picture', picture)
    console.log("we need a real connection to the backend") 
    // const response = await axios.post(BaseUrl + '/', form, { headers: {'Content-Type': 'multipart/form-data'}});
    // return response.data;
  }