import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import { BookingData } from '../types/BookingData';

const useFetchData = () => {
    const [data, setData] = useState<BookingData[]>([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    return data;
};

export default useFetchData;
