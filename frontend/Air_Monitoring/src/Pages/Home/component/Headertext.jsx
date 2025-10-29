import { Triangle } from "lucide-react";

const HeaderText = () => {
return (
    <div className="flex flex-col items-start gap-5 font-bold p-6 sm:p-10 md:p-16 font-inter text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-16 sm:leading-32">
            Real-time monitoring and purification <br />
            for a healthier environment <br />
            with Real-Time <br />
            <div className="flex gap-6"> 
                    Insights & Alerts
                    <Triangle className=" bg-red-600 text-white fill-white w-8 h-8 
                    sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2 rounded-full" /> 
            </div>
    </div>
);
};

export default HeaderText;
