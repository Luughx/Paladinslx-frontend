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
import "./pieChart.css"

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
                    borderWidth: 3,
                    borderColor: "#0f172a",
                    data: [losses, wins],
                    backgroundColor: [ "#991b1b", "#1d4ed8"]
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