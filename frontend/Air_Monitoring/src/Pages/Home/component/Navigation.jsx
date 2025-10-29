import {Wind} from 'lucide-react';
import {LayoutDashboard} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Profiephoto from '@/assets/profile_img.jpg';

const Navigation = () => {
  return (
    <nav>
       <div className='bg-white w-full h-16 shadow-md flex items-center justify-around gap-72 px-4 py-10'>
          <div className='flex items-center gap-3 font-bold text-xl text-gray-950'>
            <div>
               <span>Oxipure</span>
            </div>
            <Wind className='bg-blue-500 text-white rounded-4xl p-3 w-12 h-12 min-w-4 min-h-4' />   
          </div>
          <div className='flex items-center gap-10'>
            <div>
              <Button className='flex items-center gap-2 bg-transparent hover:bg-transparent text-gray-950 hover:text-gray-950 border-0 hover:border-0 focus:ring-0 focus:ring-offset-0'>
                <div className='bg-blue-500 rounded-full p-2 w-10 h-10 min-w-4 min-h-4 flex items-center justify-center'>
                  <LayoutDashboard className='w-24 h-24 text-white' />
                </div>
                <span>Dashboard</span>
              </Button>
              </div>
              <div className='flex items-center gap-2 cursor-pointer'>
                <img src={Profiephoto} alt="Profile" className='w-10 h-10 rounded-full object-cover' />
                <span className='text-sm text-gray-950 font-semibold'>Liza</span>
              </div>
          </div>
       </div>
    </nav>
  );
};
export default Navigation;