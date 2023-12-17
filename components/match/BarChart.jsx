"use client"

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { useEffect, useState } from 'react';
import "./barChart.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart({ names, damage, healing, taken, shielding }) {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: names,
            datasets: [
                {
                    label: "Damage",
                    data: damage,
                    backgroundColor: "#b91c1c"
                },
                {
                    label: "Taken",
                    data: taken,
                    backgroundColor: "#a16207"
                },
                {
                    label: "Shielding",
                    data: shielding,
                    backgroundColor: "#0369a1"
                },
                {
                    label: "Healing",
                    data: healing,
                    backgroundColor: "#15803d"
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                },
                maintainAspectRatio: false
            },
            maintainAspectRatio: false
        })
    }, [])


    return (
        <div>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} width={"100%"} height={300}/>
        </div>
    )
}