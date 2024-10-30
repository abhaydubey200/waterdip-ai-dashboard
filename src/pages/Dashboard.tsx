import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useFetchData from '../hooks/useFetchData';
import TimeSeriesChart from '../components/Charts/TimeSeriesChart';
import CountryVisitorsChart from '../components/Charts/CountryVisitorsChart';
import SparklineChart from '../components/Charts/SparklineChart';

const Dashboard: React.FC = () => {
    const data = useFetchData();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const filteredData = data.filter(item => {
        const bookingDate = new Date(item.arrival_date_year, new Date(Date.parse(`${item.arrival_date_month} 1, 2020`)).getMonth(), item.arrival_date_day_of_month);
        return (!startDate || bookingDate >= startDate) && (!endDate || bookingDate <= endDate);
    });

    return (
        <div>
            <h1>Hotel Booking Dashboard</h1>
            <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
            <TimeSeriesChart data={filteredData} />
            <CountryVisitorsChart data={filteredData} />
            <SparklineChart data={filteredData} type="adults" />
            <SparklineChart data={filteredData} type="children" />
        </div>
    );
};

export default Dashboard;
