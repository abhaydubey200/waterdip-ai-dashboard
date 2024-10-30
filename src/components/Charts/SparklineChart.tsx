import React from 'react';
import Chart from 'react-apexcharts';
import { BookingData } from '../../types/BookingData';

interface SparklineChartProps {
    data: BookingData[];
    type: 'adults' | 'children';
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
    const series = [{
        name: `Total ${type}`,
        data: data.map(item => item[type]),
    }];

    const options = {
        chart: { type: 'line' as const, sparkline: { enabled: true } },
        title: { text: `Total ${type} Visitors`, align: 'center' as const },
    };

    return <Chart options={options} series={series} type="line" height={150} />;
};

export default SparklineChart;
