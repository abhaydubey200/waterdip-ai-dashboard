import axios from 'axios';
import { BookingData } from '../types/BookingData';

export const fetchData = async (): Promise<BookingData[]> => {
    const response = await axios.get('/hotel_bookings_1000.json');
    return response.data;
};
