import React from 'react';
import Chart from 'react-apexcharts';
import { BookingData } from '../../types/BookingData';

const CountryVisitorsChart: React.FC<{ data: BookingData[] }> = ({ data }) => {
    const countryCounts = data.reduce((acc, item) => {
        acc[item.country] = (acc[item.country] || 0) + item.adults + item.children + item.babies;
        return acc;
    }, {} as Record<string, number>);

    const series = [{ data: Object.values(countryCounts) }];
    const options = {
        chart: { type: 'bar' as const },  // Adding 'as const' for specific type
        xaxis: { categories: Object.keys(countryCounts) },
        title: { text: 'Visitors by Country' },
    };

    return <Chart options={options} series={series} type="bar" height={350} />;
};

export default CountryVisitorsChart;
