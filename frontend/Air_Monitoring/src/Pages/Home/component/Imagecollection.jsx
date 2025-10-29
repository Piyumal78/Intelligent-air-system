import Collection1 from './collection1.jpg';
import Collection2 from './collection2.jpg';
import Collection3 from './collection3.jpg'; 
import Collection4 from './collection4.jpeg';
import Collection5 from './collection5.jpg';
import Collection6 from './collection6.jpg';
import Collection7 from './collection7.jpg';
import Collection8 from './collection8.png';

const ImageCollection = () => {
  return (
    <div className='w-full h-164 '>
        <div className='relative flex items-center justify-center gap-2  mt-8'>
            <div>
                <img src={Collection1} alt="collection1" className='relative w-68 h-52 object-cover rounded-xl shadow-2xl shadow-black brightness-75'/>
                <span className='absolute text-xl font-bold text-white top-8 left-88 '>32.1dB(A) <br /> low noise*</span>
            </div>
            <div className='w-68 h-52 flex flex-col items-start justify-center gap-2 bg-gray-500 p-4 rounded-xl'>
                <span className='font-medium text-lg text-white'>Filter replacement reminders</span>
                <img src={Collection2} alt="collection2" className='w-60 h-40 object-cover rounded-xl shadow-2xl shadow-black brightness-75'/>   
            </div>
            <div>
                <img src={Collection3} alt="collection3" className='relative w-72 h-56  mt-4 object-cover rounded-xl shadow-2xl shadow-black brightness-75'/>
                <span className='absolute top-10 left-228 text-lg text-white font-medium'>Advanced Air Quality Solutions</span>
            </div> 
        </div>    

        <div className='absolute flex items-center justify-center gap-2 left-84 top-280'>
            <div className=''>
                <img src={Collection4} alt="collection4" className='relative w-72 h-48 object-cover rounded-xl shadow-2xl shadow-black brightness-50 '/>
                <span className='absolute top-4 left-3 text-white text-xl font-medium'>Optimal Air <br /> Purification Systems</span>
            </div>
            <div className=''>
                <img src={Collection5} alt="collection5" className='relative w-60 h-52 object-cover rounded-xl shadow-2xl shadow-black brightness-75'/>
                <span className='absolute top-3 z-20 text-white text-xl font-medium px-3'>Advanced Indoor <br />Air Solutions</span>
            </div>
            <div className=''>
                <img src={Collection6} alt="collection6" className='relative  w-76 h-48 object-cover rounded-xl mt-4 shadow-2xl shadow-black brightness-75'/>
                <span className='absolute z-20 text-white text-xl font-medium top-9 left-140 '>Reliable Air <br />Purification Systems</span>
            </div>
        </div>

        <div className='absolute flex items-center justify-center gap-3 left-84 top-336'>
            <div>
                <img src={Collection7} alt="collection7" className='relative w-104 h-36 object-cover rounded-xl shadow-2xl shadow-black brightness-75'/>
                <span className='absolute text-white text-xl font-medium top-2 px-4'>Versatile Air Purification Systems</span>
            </div>
            <div>
                <img src={Collection8} alt="collection8" className='relative w-104 h-36 object-cover rounded-xl shadow-2xl shadow-black brightness-50'/>
                <span className='absolute text-white text-xl font-medium top-2 px-4'>Innovative Air Quality Solutions</span>
            </div>
        </div>
    </div>
  );
};
export default ImageCollection;