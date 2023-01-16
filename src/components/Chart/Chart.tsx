import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
} from "chart.js";
import json from "../../data/data.json";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { importJsonPromise } from "../../api/json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		y: {
			ticks: {
				display: false,
			},
			grid: {
				display: false,
				drawOnChartArea: false,
			},
			border: {
				display: false,
			},
		},
		x: {
			ticks: {
				color: "hsl(28,10%,53%)",
				font: {
					size: 14,
					family: "'DM Sans', sans-serif",
				},
			},
			grid: {
				display: false,
				drawOnChartArea: false,
			},
			border: {
				display: false,
			},
		},
	},
};

const maxAmount = Math.max(...json.map((x) => x.amount));

const data: any = {
	labels: json.map((x) => x.day),
	datasets: [
		{
			backgroundColor: json.map((x) => {
				return x.amount == maxAmount
					? "hsl(186,34%,60%)"
					: "hsl(10,79%,65%)";
			}),
			data: json.map((x) => x.amount),
			borderRadius: 5,
		},
	],
};
const Chart = () => {
	return (
		<div>
			<Bar data={data} options={options} />
		</div>
	);
};

export default Chart;
