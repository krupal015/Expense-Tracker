import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';

 const Login = () => {
//   const [email, setEmail] = useStates("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   // handle logiin for submit
//   const handleLogin = async (e) => {}

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please ENter your details to Login</p>
{/* 
        <form oneSubmit={handleLogin}>
          <input
            value={email}
            onChange={({ target}) => setEmail(target.value)}
            label = "Email Address"
            placeholder="krupatel@2005.com"
            type="text"
            />
        </form> */}
      </div>
    </AuthLayout>
  );
};

export default Login
