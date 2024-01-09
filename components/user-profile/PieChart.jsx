"use client"
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js'
import { useEffect, useState } from 'react';
import "./barChart.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

export default function PieChart({ wins, losses }) {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Losses", "Wins"],
            datasets: [
                {
                    data: [losses, wins],
                    backgroundColor: [ "#b91c1c", "#2563eb"]
                }
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
        <Pie data={chartData} options={{ maintainAspectRatio: false }} width={"100%"} height={150}/>
    )
}