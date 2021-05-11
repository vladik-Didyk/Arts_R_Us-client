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

  export async function login(email, password) {
    console.log(email, password) 
    // const response = await axios.post(BaseUrl + '/login', { email, password });
    // return response.data;
  }
  export async function signup(email, password,firstName, lastName, phoneNumber) {
    console.log(email, password,firstName, lastName, phoneNumber) 

    // const response = await axios.post(BaseUrl + '/users', { email, password, firstName, lastName, phoneNumber });
    // return response.data;
  }