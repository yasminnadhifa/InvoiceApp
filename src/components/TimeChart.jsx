// components/TimeChart.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import { getRevenueProjection } from '../redux/invoiceSlice';
import { timeFormat, timeParse } from "d3";

const customTimeParser = timeParse("%Y-%m-%d");
const customTimeFormatter = timeFormat("%d %b");

Chart.register(...registerables, zoomPlugin);

const TimeChart = () => {
  const dispatch = useDispatch();
  const { revenue = [], status, error } = useSelector((state) => state.invoice);
  const [timeUnit, setTimeUnit] = useState('day');

  useEffect(() => {
    dispatch(getRevenueProjection(timeUnit));
    const interval = setInterval(() => {
      dispatch(getRevenueProjection(timeUnit)); // Fetch every 10 seconds
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, timeUnit]);

  const chartData = {
    labels: revenue.map(item => {
      const date = customTimeParser(item.date); // Parse date
      return date ? customTimeFormatter(date) : ""; // Format the date or return empty string
    }),
    datasets: [
      {
        label: 'Revenue',
        data: revenue.map(item => item.total_amount || 0),
        borderColor: 'rgba(76, 175, 79, 1)',
        backgroundColor: 'rgba(76, 175, 79, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x', // Allow zooming on the x-axis
        },
        pan: {
          enabled: true,
          mode: 'x', // Allow panning on the x-axis
        },
      },
    },
  };

  return (
    <div>
      <div className="flex justify-around mb-4">
        <button onClick={() => setTimeUnit('day')} className="btn">Daily</button>
        <button onClick={() => setTimeUnit('week')} className="btn">Weekly</button>
        <button onClick={() => setTimeUnit('month')} className="btn">Monthly</button>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TimeChart;
