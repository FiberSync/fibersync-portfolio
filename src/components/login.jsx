import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CircleCheckIcon, Circle, CircleUserRound } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRememberMe = () => {
    setInput((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (input.email === '' || input.password === '') {
      Swal.fire({
        title: "Oops",
        text: "Please fill all fields!",
        icon: "error"
      });
      return;
    }

    // Send login request
    try {
      const response = await axios.post('https://fiber-sync.vercel.app/users/login', {
        email: input.email,
        password: input.password
      });

      Swal.fire({
        title: "Login Successful!",
        html:`Logged in as <b>${response.data.orgName}</b> !`,
        icon: "success"
      });

      sessionStorage.setItem('token', response.data.token);
      
      sessionStorage.setItem('orgName', response.data.orgName);

      // Redirect to dashboard or desired page
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid credentials, please try again",
        icon: "error"
      });
    }
  };

  return (
    <main className="main-wrapper relative overflow-hidden">
      <section id="login-section">
        <div className="py-2 pt-20 xl:pb-[200px] xl:pt-20">
          <div className="mx-auto max-w-[910px] text-center">
           <div className='flex justify-center items-center'><CircleUserRound className='pb-10' width={140} height={140} color='#39ff14'/> <h1 className="mb-[50px] font-spaceGrotesk text-black text-3xl font-bold"> Log In</h1></div>
            <div className="block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10">
              
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                <div className="grid grid-cols-1 gap-6">
                  
                  {/* Email Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="login-email" className="text-lg font-bold leading-[1.6]">
                      Email address
                    </label>
                    <input
                      type="email"
                      autoFocus
                      name="email"
                      value={input.email}
                      onChange={handleInput}
                      pattern=".+@.+\..+"
                      title="Please enter a valid email address, such as example@domain.com"
                      id="login-email"
                      placeholder="example@gmail.com"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="login-password" className="text-lg font-bold leading-[1.6]">
                      Enter Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={handleInput}
                      id="login-password"
                      placeholder="Your password"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Remember Me Checkbox */}
                  {/* <div className="flex gap-x-1 gap-y-[10px]">
                    {(!input.rememberMe) ? 
                      <Circle className='mt-1' width={20} height={20} color='#000000' onClick={handleRememberMe} /> : 
                      <CircleCheckIcon className='mt-1' width={20} height={20} color='#39ff14' onClick={handleRememberMe} />
                    }
                    <label htmlFor="login-remember" className="text-base leading-[1.6]">
                      Remember me
                    </label>
                  </div> */}

                </div>

                <button
                  type="submit"
                  className="mt-7 block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white transition-all duration-300 ease-linear hover:border-black hover:bg-emerald-500 hover:text-white"
                >
                  Log In
                </button>
              </form>

              {/* Signup Link */}
              <div className="mt-10 text-center">
                Don't have an account? &nbsp;
                <Link to="/signup" className="text-base font-semibold hover:text-[#FE330A]">
                  Sign up here
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
