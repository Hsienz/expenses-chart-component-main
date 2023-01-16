import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { importJsonPromise } from "../../api/json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
	responsive: true,
	// maintainAspectRatio: false,
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
                }
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

const json = await importJsonPromise();

const labels = json.map((x: { day: string; amount: string }) => x.day);

const amountArr = json.map((x: { day: string; amount: string }) =>
	parseFloat(x.amount)
);
console.log(amountArr);

const maxAmount = Math.max(...amountArr);

const data: any = {
	labels,
	datasets: [
		{
			backgroundColor: amountArr.map((x: number) => {
				console.log(x, maxAmount);
				return x == maxAmount ? "hsl(186,24%,60%)" : "hsl(10,79%,65%)";
			}),
			data: amountArr,
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
