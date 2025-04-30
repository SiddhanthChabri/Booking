import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setError(null); // Reset error on success
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Unknown error');
            setData([]); // Clear data on error
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        let isMounted = true;
        
        if (isMounted) {
            fetchData();
        }

        return () => {
            isMounted = false; // Cleanup to prevent state updates after unmount
        };
    }, [fetchData]);

    const reFetch = useCallback(async () => {
        await fetchData();
    }, [fetchData]);

    return { data, loading, error, reFetch };
};

export default useFetch;