import { useEffect, useState } from "react";

import { instance as Axios } from "config/axiosConfig";

const fetchPlans = (url) => Axios.get(url);

function usePlansQuery() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function startFetch() {
      setStatus("loading");

      try {
        const {
          data: { data },
        } = await fetchPlans("/plans");
        setData(data);
        setError(null);
        setStatus("success");
      } catch (error) {
        setError(error);
        setStatus("error");
      }
    }

    startFetch();
  }, []);

  return {
    status,
    data,
    error,
    isSuccess: status === "success",
    isError: status === "error",
    isLoading: status === "loading",
  };
}

export default usePlansQuery;
