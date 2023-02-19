import { useQuery } from '@apollo/client';
import { GET_COMPANY_INFO, CompanyData } from '../queries/queries';
import Moneey from '../components/assets/Moneey.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Fram4 from '../components/assets/Frame4.png';
import Spinner from '../components/Spinner';
import { useEffect } from 'react';
import { useLoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Notification from '../components/assets/Notification.png';

interface CompanyDetailsPageProps {}

const CompanyDetails: React.FC<CompanyDetailsPageProps> = () => {
  const { loading, data, error } = useQuery<CompanyData>(GET_COMPANY_INFO);

  const { logout, isLoggedIn } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      toast.success('Logout successful');
    }

    if (error) {
      toast.error('Something went wrong with featching the company details');
    }

    const timer = setTimeout(() => {
      logout();
      navigate('/login');
    }, 120000);
    return () => clearTimeout(timer);
  }, [logout, navigate, error, isLoggedIn]);

  return (
    <div>
      <section>
        <nav className='px-10 py-1 border-b'>
          <img src={Moneey} alt='' className='w-16 h-16' />
        </nav>

        <div className='flex items-center gap-10 px-8 py-5'>
          <div className=' w-2/3'>
            <div className='border rounded-lg h-[600px]'>
              {loading || error ? (
                <div className='flex flex-col justify-center items-center mt-[200px]'>
                  <Spinner />
                </div>
              ) : (
                <div className='flex px-28 py-14 flex-col '>
                  {/*  */}
                  <div className='flex items-center space-x-5 mb-10'>
                    <div className='bg-[#FEE7EA] py-4 px-4 rounded-full border border-[#FCB6C0] ml-3'>
                      <h1 className='text-[#1CC578]'>CN</h1>
                    </div>
                    <h1 className='font-bold'>{data?.company?.name}</h1>
                  </div>
                  {/*  */}
                  <div className='mb-5'>
                    <span className='text-xs'>CEO</span>
                    <h1>{data?.company?.ceo}</h1>
                  </div>
                  {/*  */}
                  <div>
                    <span className='text-xs'>CTO</span>
                    <h1>{data?.company?.cto}</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='bg-[#F7F7F7] w-[375px]  rounded-xl '>
            <div className='h-[600px] pt-[80px] flex flex-col px-10 space-y-14'>
              <div className='flex items-center bg-[#FEEBEE] w-[150px] rounded-full px-2 py-1 text-[#E60A2B] space-x-3 ml-3'>
                <AiOutlineClockCircle />
                <h4 className=''>Coming Soon</h4>
              </div>

              <div className=''>
                <img src={Fram4} alt='' />
              </div>

              <div className='flex flex-col  mx-auto space-y-2'>
                <div className='flex justify-center items-center space-x-3'>
                  <img src={Notification} alt='' className='h-6 w-6' />
                  <h1 className='text-center font-bold text-2xl'>
                    Notifications
                  </h1>
                </div>

                <p className='text-center px-7 text-sm'>
                  Receive notifcations about your rider performance, efficiency
                  reviews and a lot more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
