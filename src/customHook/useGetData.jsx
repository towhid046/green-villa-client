// import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    // axios
    //   .get(`${import.meta.env.VITE_URL}${url}`)
    //   .then((res) => {
    //     setData(res.data);
    //     setLoading(false)
    //   })
    //   .catch(err=>);

    const loadData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_URL}${url}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [err, url]);
  return [data, err, loading];
};

export default useGetData;
