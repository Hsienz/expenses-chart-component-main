import { useEffect } from "react"
import { importJsonPromise } from "../../api/json"
import logo from "../../assets/images/logo.svg"

const Balance = () => {
    return (
        <div className="bg-Soft_red flex cardComponent justify-between">
<div className="flex flex-col">
                <p className="text-Very_pale_orange">My balance</p>
                <p className="text-Very_pale_orange text-3xl font-bold">$921.48</p>
</div>
<img src={logo} alt="" />
        </div>
    )
}
export default Balance