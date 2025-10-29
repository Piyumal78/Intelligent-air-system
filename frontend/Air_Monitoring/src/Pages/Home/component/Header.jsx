import HeaderText from "./Headertext";
import TopLogo from "./Toplogo";
import Device from "./device.png";
import ImageCollection from "./Imagecollection";
import InvisiblePollution from "./Invesiblepollution";

const Header = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-3 p-4">
        <h1 className="text-black font-bold text-2xl">Oxipur Smart Air Purifier & Monitor</h1>
        <span className="text-gray-500 text-base mt-2 flex justify-center">| Oxipur Smart Air Purifier | Oxipur Smart Air Monitor </span>
      </div>
      <div className="p-0 relative h-9/12">
        <img src={Device} alt="Device"  className="brightness-50 h-[680px] w-full object-cover"/>
        <div className="absolute bottom-2/5 left-1/4">
          <span className="text-white font-bold text-5xl">Oxipur Smart Air Purifier & Monitor</span><br />
          <span className="text-white text-2xl font-semibold ml-60">Breathe clean, breathe healthy</span><br />
          <div className="mt-10 text-white text-xl font-medium ml-40"> 
             <span className="">20m² large room purification in approx. 10 minutes</span><br />
             <span className="mt-72">Smart control | Effectively reduce H1N1 virus in the air</span>
          </div>
        </div>
      </div>
      <div>
        <ImageCollection />
        <InvisiblePollution />
      </div>
    </div>
  );
};
export default Header;