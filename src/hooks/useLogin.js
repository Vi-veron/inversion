import React from "react";
import axios from "axios";

export default function useLogin() {
  const [isSuccess, setSuccess] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [data, setData] = React.useState({});

  const doLogin = async (payload) => {
    try {
      const response = await axios.post(
        "https://darthvadar.herokuapp.com/api/auth/login"
      );
      setData(response.data);
      setSuccess(true);
    } catch (e) {
      setError(true);
      setData(e.response.data);
    }
  };

  const loginRequestState = { isSuccess, isError, data };

  return [doLogin, loginRequestState];
}
