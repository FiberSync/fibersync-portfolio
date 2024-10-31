import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CircleCheckIcon, Circle ,UserRoundPlusIcon } from 'lucide-react';
import axios from 'axios';
import { registerUser } from '../apis/apis';

const Signup = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    check: false,
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckBox = (value) => {
    setInput((prev) => ({ ...prev, check: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.name === '' || input.email === '' || input.password === '' || input.confirmPassword === '') {
      Swal.fire({
        title: "Oops",
        text: "Please fill all fields!",
        icon: "error"
      });
      return;
    }

    if (input.password !== input.confirmPassword) {
      Swal.fire({
        title: "Oops",
        text: "Passwords do not match",
        icon: "info"
      });
      return;
    }

    if (!input.check) {
      Swal.fire({
        title: "Oops",
        text: "Please accept the Terms & Conditions and Privacy Policy",
        icon: "info"
      });
      return;
    }
    try {
      const res = await registerUser(input.name, input.email, input.password);
      console.log(res);
      Swal.fire({
        title: "Signed Up!",
        text: "Thanks for Signing Up!",
        icon: "success"
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Oops!",
        text: error.response?.data?.message || "Something went wrong. Please try again later.",
        icon: "error"
      });
    }


    
  };



  return (
    <main className="main-wrapper relative overflow-hidden">
      <section id="signup-section">
        <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
          <div className="mx-auto max-w-[910px] text-center">
          <div className="flex justify-center items-center"><UserRoundPlusIcon color='#39ff14' width={120} height={120} className='pb-6'/><h1 className="mb-[50px] font-spaceGrotesk text-black text-3xl font-bold">Create Account</h1></div>
            <div className="block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10">
              
              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                <div className="grid grid-cols-1 gap-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="signup-name" className="text-lg font-bold leading-[1.6]">
                      Enter Organizations's Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handleInput}
                      id="signup-name"
                      placeholder="Adam Smith"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="signup-email" className="text-lg font-bold leading-[1.6]">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      pattern=".+@.+\..+" 
                      title="Please enter a valid email address, such as example@domain.com" 
                      value={input.email}
                      onChange={handleInput}
                      id="signup-email"
                      placeholder="example@gmail.com"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="signup-password" className="text-lg font-bold leading-[1.6]">
                      Enter Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={handleInput}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters"
                      id="signup-password"
                      placeholder="Ex: Password123"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Confirm Password Input */}
                  <div className="flex flex-col gap-y-[10px]">
                    <label htmlFor="signup-confirm-password" className="text-lg font-bold leading-[1.6]">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={input.confirmPassword}
                      onChange={handleInput}
                      id="signup-confirm-password"
                      placeholder="Confirm your password"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-body text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#FE330A]"
                      required
                    />
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="flex gap-x-1 gap-y-[10px]">
                 
                    {(!input.check)? <Circle className='mt-1' width={20} height={20} color='#000000'  onClick={() => handleCheckBox(!input.check)}/> : <CircleCheckIcon className='mt-1' width={20} height={20} color='#39ff14' onClick={() => handleCheckBox(!input.check)}/>
                    }
              
                  
                    <label htmlFor="signup-check" className="text-base leading-[1.6]">
                      I have read and accept the&nbsp;
                      <Link to="#" className="font-bold hover:text-[#FE330A]">
                        Terms &amp; Conditions
                      </Link>
                      &nbsp; and &nbsp;
                      <Link to="#" className="font-bold hover:text-[#FE330A]">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                </div>

                <button
                  type="submit"
                  className="mt-7 block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white transition-all duration-300 ease-linear hover:border-black hover:bg-emerald-500 hover:text-white"
                >
                  Create account
                </button>
              </form>

              {/* Divider */}
              {/* <div className="relative z-[1] mb-14 mt-9 text-center font-bold before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#EAEDF0]">
                <span className="inline-block bg-white px-6">Or</span>
              </div> */}

              {/* Signup with Google & Facebook */}
              {/* <div className="flex flex-col gap-y-6">
                <a className="button flex w-full justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 hover:bg-slate-200 cursor-pointer">
                  <span className="hidden h-6 w-6 sm:inline-block">
                    <img src="assets/img/th-1/flat-color-icons-google.svg" alt="Signup with Google" width={24} height={24} />
                  </span>
                  Signup with Google
                </a>
                <a className="button flex w-full justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 hover:bg-slate-200 cursor-pointer">
                  <span className="hidden h-6 w-6 sm:inline-block">
                    <img src="assets/img/th-1/flat-color-icon-facebook.svg" alt="Signup with Facebook" width={24} height={24} />
                  </span>
                  Signup with Facebook
                </a>
              </div> */}

              {/* Login Link */}
              {/* <div className="mt-10 text-center">
                Already have an account? &nbsp;
                <Link to="/login" className="text-base font-semibold hover:text-[#FE330A]">
                  Log in here
                </Link>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
