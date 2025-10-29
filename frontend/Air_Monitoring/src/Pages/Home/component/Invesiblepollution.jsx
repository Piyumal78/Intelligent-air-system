import Risk from "./systemclean.png"
import Room from "./room.png"
const InvisiblePollution = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-4xl font-bold text-center mt-20">
                <span>Air is filled with invisible</span>
                <span>pollutants</span>
                <span>that pose a risk to your health</span>
            </div>
            <div className="flex items-center justify-center mb-8">
                <img src={Risk} alt="Invisible Pollution" className="w-2/3 h-160 mt-5 rounded-4xl shadow-lg shadow-black"/>
            </div>
            <div className="flex flex-col items-center justify-center text-4xl font-bold text-center mt-20">
                <span>Impressive CADR</span>
                <span>Purify a large 20m² room in approx. 10 </span>
                <span>minutes</span>
            </div>
            <div className="flex items-center justify-center mb-20 mt-8 text-center text-lg text-gray-500 font-normal">
                <p>Oxipure Smart Air Purifier has a Particle CADR of up to 400m³/h*, able to deliver 6660L of <br />
                 purified air per minute*, and with 360° all-round air intake, whole-room air purification is <br />
                 effortless.</p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <div>
                    <p>Able to purify a 20m² room in approx*</p>
                    <span className="text-blue-400 text-5xl font-bold">10<sup>min</sup></span>
                </div>
                <div>
                    <p>All-round air intake</p>
                    <span className="text-blue-400 text-5xl font-bold">360<sup>°</sup></span>
                </div>
                <div>
                    <p>Effective coverage area of</p>
                    <span className="text-blue-400 text-5xl font-bold">28-48m²</span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={Room} alt="Room" className=" w-2/3 h-120 mt-5 " />
            </div>
        </div>
    );
};

export default InvisiblePollution;