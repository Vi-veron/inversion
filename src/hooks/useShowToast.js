import { useCallback } from "react";
import toast from "react-hot-toast";

const useShowToast = () => {
  const showToast = useCallback(({ type, title, message }) => {
    toast[type](message);
  }, []);

  return showToast;
};

export default useShowToast;
