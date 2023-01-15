import Chart from "../Chart/Chart";
import Balance from "../Balance/Balance";
import { useEffect } from "react";
const Card = () => {
	return (
		<div className="font-sans text-lg w-full p-4 font-normal">
			<div>
				<Balance />
			</div>
			<div className="mt-4">
				<Chart />
			</div>
		</div>
	);
};
export default Card;
