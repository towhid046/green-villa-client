import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch();
  }, [url, setData, data]);
  return [data, setData];
};

export default useGetData;
