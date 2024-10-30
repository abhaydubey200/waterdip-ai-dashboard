import React from 'react';
import Chart from 'react-apexcharts';
import { BookingData } from '../../types/BookingData';

const TimeSeriesChart: React.FC<{ data: BookingData[] }> = ({ data }) => {
    const series = [{
        name: "Visitors",
        data: data.map(item => ({
            x: new Date(item.arrival_date_year, new Date(Date.parse(`${item.arrival_date_month} 1, 2020`)).getMonth(), item.arrival_date_day_of_month),
            y: item.adults + item.children + item.babies,
        })),
    }];

    const options = {
        chart: { type: 'line' as const, zoom: { enabled: true } },
        xaxis: { type: 'datetime' as const },
        title: { text: 'Number of Visitors Per Day' },
    };

    return <Chart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
