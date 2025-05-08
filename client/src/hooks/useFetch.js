import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

/**
 * Custom hook for fetching data from API endpoints
 * @param {string} url - The API endpoint to fetch data from
 */
const useFetch = (url) => {
    // Initialize data as empty array, not null
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            // You may need to adjust the baseURL to match your API setup
            const baseURL = 'http://localhost:8000/api'; 
            const finalUrl = url.startsWith('http') ? url : `${baseURL}${url}`;
            
            const res = await axios.get(finalUrl);
            
            // Make sure we have data and it's in the expected format
            if (res.data) {
                setData(res.data);
            } else {
                // If response doesn't contain data, set an empty array
                setData([]);
            }
        } catch (err) {
            console.error(`Error fetching data from ${url}:`, err);
            setError(err);
            // On error, ensure data is an empty array, not null
            setData([]);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const reFetch = async () => {
        await fetchData();
    };

    return { data, loading, error, reFetch };
};

export default useFetch;