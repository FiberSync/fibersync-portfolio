import axios from 'axios';

async function registerUser(name,email,password) {
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        orgName: name,
        email: email,
        password: password,
      });
      return response.data;
    }
      catch (error) {
        console.error("Error during registration:", error);
        throw error; 
      }
    }


export {registerUser} 