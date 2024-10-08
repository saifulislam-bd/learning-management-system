import { useState, useEffect } from "react";

const useAbortableFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetching data was aborted");
        } else {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useAbortableFetch;
