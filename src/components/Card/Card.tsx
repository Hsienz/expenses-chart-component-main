import Balance from "../Balance/Balance";
import Statistic from "../Statistic/Statistic";
const Card = () => {
	return (
		<div className="font-sans text-lg w-full p-4 font-normal">
			<div>
				<Balance />
			</div>
			<div className="mt-4">
				<Statistic />
			</div>
		</div>
	);
};
export default Card;
