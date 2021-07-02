import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";

const register = (firstName, lastName, email, password) => {
  return axios.post("https://darthvadar.herokuapp.com/api/auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("https://darthvadar.herokuapp.com/api/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accesssToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const exportedObject = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default exportedObject;
