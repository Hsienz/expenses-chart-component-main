const Chart = () => {
    return (
        <div className="bg-Very_pale_orange cardComponent">
            <h1 className="font-bold text-3xl text-Dark_brown">Spending - Last 7 days</h1>

            

            <hr className="border-t-2 border-Cream my-10"/>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="text-Medium_brown">Total this month</p>
                    <p className="text-Dark_brown text-4xl font-bold">$478.33</p>
                </div>
                <div className="flex flex-col text-right">
                    <p className="text-Dark_brown font-bold">+2.4%</p>
                    <p className="text-Medium_brown">from last month</p>
                </div>
            </div>
        </div>
    )
}
export default Chart