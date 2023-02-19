import React, { useState } from 'react';
import { useLoginContext } from '../context/LoginContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { login } = useLoginContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      if (login(email, password)) {
        navigate('/');
        toast.success('login successful');
      } else {
        toast.error('Invalid email or password');
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white px-12 py-10 space-y-10 rounded-xl shadow-md'
    >
      <div className='flex flex-col space-y-1'>
        <h1 className='font-bold text-xl'>Login to your dashboard</h1>
        <p className='text-sm text-[#858585]'>
          Provide details to login to your account{' '}
        </p>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Cokitchen222@gmail.co'
          className='border-2 rounded-md border-black py-1 px-3 h-[45px] w-[370px]'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter Password'
          className='border-2 rounded-md border-black py-1 px-3 h-[45px] w-[370px]'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type='submit'
        className='bg-[#1CC578] text-center rounded-full py-2 text-white cursor-pointer w-full'
      >
        {isLoading ? (
          <div className='flex justify-center space-x-3  items-center'>
            <AiOutlineLoading3Quarters className='w-4 h-4 animate-spin font-bold' />
            <p className='text-sm font-ms'>Logging In...</p>
          </div>
        ) : (
          'Login'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
