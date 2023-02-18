import React from 'react';
import Moneey from './assets/Moneey.png';
import Frame1 from './assets/Frame1.png';
import Frame2 from './assets/Frame2.png';
import Frame3 from './assets/Frame3.png';
import Vector from './assets/Vector.png';

const LoginScreenDetails = () => {
  return (
    <section className='flex items-center justify-between container'>
      {/* Left  */}
      <div className='flex flex-col min-h-screen justify-center items-center space-y-6 flex-1'>
        <div className=''>
          {/* Image */}
          <div className='py-5'>
            <img className='w-[84px] h-[84px]' src={Moneey} alt='' />
          </div>
          {/* Text */}
          <div className='flex flex-col'>
            <div>
              <h1 className='text-3xl font-bold leading-[48px]'>
                Hi there, see what’s new
              </h1>
              <p className='max-w-sm'>
                Here’s how Foodcourt helps you manage your daily operations and
                ensure your riders are efficient
              </p>
            </div>

            <div className='flex flex-col  space-y-10 mt-12 '>
              {/* Frame 1 */}
              <div className='flex space-x-3'>
                <img src={Frame1} alt='' />
                <div className='flex flex-col space-y-1'>
                  <h6 className='text-sm'>Monitor your Earnings</h6>
                  <p className='text-sm max-w-sm'>
                    Easily see how much your busineses are earning on each
                    transaction and watch your earnings rise.
                  </p>
                </div>
              </div>

              {/* Frame 2 */}
              <div className='flex space-x-3'>
                <img src={Frame2} alt='' />
                <div className='flex flex-col space-y-1'>
                  <h6>Manage your Businesses</h6>
                  <p className='text-sm max-w-sm'>
                    Easily see how much your businesses are earning on each
                    transaction and watch your earnings rise.
                  </p>
                </div>
              </div>

              {/* Frame 3 */}
              <div className='flex space-x-3 bg-[#F8F8F6] px-2 py-3 rounded-[20px]'>
                <img src={Frame3} alt='' />
                <div className='flex flex-col space-y-1'>
                  <h6>Delegate to Staff</h6>
                  <p className='text-sm max-w-sm'>
                    Easily see how much your busineses are earning on each
                    transaction and watch your earnings rise.
                  </p>
                </div>
                <div className=''>
                  <img src={Vector} alt='' className='w-5 h-5 mt-7 ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='bg-[#FEE7EA] flex-1'>
        <div className='grid h-screen place-items-center'>
          <form className='bg-white px-12 py-8 space-y-10 rounded-md'>
            <div className='flex flex-col space-y-1'>
              <h1 className='font-bold'>Login to your dashboard</h1>
              <p className='text-sm'>Provide details to login to your account </p>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Cokitchen222@gmail.co'
                className='border-2 rounded-md border-black py-1 px-3 h-[40px] w-[370px]'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder=''
                className='border-2 rounded-md border-black py-1 px-3 h-[40px] w-[370px] '
              />
            </div>

            <div className='bg-[#1CC578] text-center rounded-full py-2 text-white'>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginScreenDetails;
