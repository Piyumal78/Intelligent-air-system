import { Wind, LayoutDashboard, ShieldCheck, Triangle } from 'lucide-react';

const TopLogo = () => {
  const icons = [
    { logo: Wind, text: "Air Quality", background: "bg-blue-500", color: "text-white" },
    { logo: LayoutDashboard, text: "Dashboard", background: "bg-green-500", color: "text-white" },
    { logo: ShieldCheck, text: "Safety", background: "bg-yellow-500", color: "text-white" },
    { logo: Triangle, text: "Alerts", background: "bg-red-500", color: "text-white", fill: "fill-current"},
  ];

  return (
    <div className="grid grid-cols-4 gap-8 p-6 ">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer gap-2">
            <div className='flex flex-row items-center gap-2'>
                <item.logo className={`${item.background} ${item.color} ${item.fill} rounded-full p-3 w-12 h-12`} />
                <span className=" text-gray-700 font-semibold text-lg">{item.text}</span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default TopLogo;
