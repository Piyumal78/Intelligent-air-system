import {Cat,Rose,Cigarette} from 'lucide-react';
import { LiaBroomSolid } from 'react-icons/lia';
import { GiCottonFlower } from 'react-icons/gi';
import Filter from './filter.jpg';
import sample1 from './sample1.png';
import sample2 from './sample2.png';
import Virus from './virus.jpg';
import Virus1 from './virus1.jpg';
import Sample from './sample3.png';

const ProductDetails = () => {

    const icons = [
        { icon: <Cat className="w-8 h-8 text-black" />, label: "Pet Dander" },
        { icon: <Rose className="w-8 h-8 text-black" />, label: "Pollen" },
        { icon: <Cigarette className="w-8 h-8 text-black" />, label: "Smoke" },
        { icon: <LiaBroomSolid className="w-8 h-8 text-black" />, label: "Dust" },
        { icon: <GiCottonFlower className="w-8 h-8 text-black" />, label: "Allergens" },
    ]

    const sample=[
        {img:sample1,label:"Protection for those prone to allergies",describe:"Pollen filtration"},
        {img:sample2,label:"A hero for animal lovers",describe:"Pet hair and dander filtration"},
    ]

    return (
        <div className='bg-slate-900 py-12 px-16'>
        <div  className='bg-gray-100 rounded-2xl p-4'>
            <div >
                <div className="flex flex-col items-center justify-center text-4xl font-bold text-center mt-20">
                    <span>Three-in-one filtration</span>
                    <span>99.97% elimination of 0.3μm particles*</span>
                </div>
                <div className='text-lg flex flex-col justify-center items-center mt-4'>
                    <span>All-day protection for those who suffer from rhinitis and allergies. Oxipure</span>
                    <span>Smart Air Purifier 4 protects your respiratory health by keeping the air in</span>
                    <span>your home clean and safe to breathe.</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-16 mt-6 flex-wrap mb-20'>
                    {icons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mt-5">
                            <div className="flex flex-col items-center justify-center border-2 border-black rounded-full gap-2 w-20 h-20">
                                {item.icon}
                            </div>
                            <span className='text-gray-800 mt-2 text-lg'>{item.label}</span>
                        </div>
                    ))} 
                    <img src={Filter} alt="Filter" className="w-180 h-120 mt-5 rounded-2xl shadow-lg shadow-black"/> 
            </div> 
            <div className='flex flex-row items-center justify-center gap-10'>
                {sample.map((item,index)=>(
                    <div key={index} className='flex flex-col items-center justify-center gap-10 mb-16 flex-wrap'>
                        <img src={item.img} alt={item.describe} className="w-80 h-60 mt-5 rounded-2xl shadow-lg shadow-black object-cover"/>
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>{item.label}</span>
                            <span className='text-gray-600'>{item.describe}</span>
                        </div>
                    </div>    
                ))}
            </div>
            <div className='flex flex-col items-center justify-center text-4xl font-bold text-center mt-10 mb-10'>
                <span>Oxipure Smart Air Purifier 4 can effectively </span>
                <span className=''>reduce H1N1 virus in the air</span>
                <img src={Virus} alt="Virus" className="w-240 h-120 mt-5 object-cover" />
            </div>
            <div className='flex flex-col items-center justify-center text-4xl font-bold text-center mt-10 mb-10'>
                <span>Oxipure Smart Air Purifier 4 can effectively reduce</span>
                <span className=''>Escherichia coli, Staphylococcus aureus and Klebsiella</span>
                <span>pneumoniae subsp pneumoniae in the air </span>
                <img src={Virus1} alt="Virus" className="w-240 h-120 mt-5 object-cover" />
            </div>
            <div className='flex flex-col items-center justify-center text-4xl font-bold text-center mt-10 mb-10'>
                <span>High-quality activated carbon</span>
                <span>Odour elimination for lasting</span>
                <span>freshness</span>
            </div>
            <p className='flex justify-center text-center text-lg text-gray-400'>
                Activated carbon has a high adsorption rate and effectively removes common <br /> 
                harmful gases such as VOC from your home, as well as eliminating odours to <br />
                 keep your air fresh.
            </p>
            <div className='flex items-center justify-center mt-10 mb-10'>
                <img src={Sample} alt="" className='w-180 h-100 object-cover rounded-2xl shadow-lg shadow-black' />
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;
