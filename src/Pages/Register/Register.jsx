import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [showPin, setShowPin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterForm = async (formData) => {
        // try {
        //     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (!response.ok) {
        //         const errorMessage = await response.text();
        //         throw new Error(errorMessage);
        //     }

        //     const data = await response.json();
        //     console.log(data); // Log success message or handle further actions
        //     toast.success('Sign Up Successful');
        //     navigate('/login');

        // } catch (error) {
        //     console.error('Error registering user:', error.message);
        //     toast.error('Registration failed');
        // }

        try {
            const response = await axiosPublic.put("/register", formData);
            console.log(response.data); // Log the response data if needed
            toast.success('Sign Up Successful');
                navigate('/login');
          } catch (error) {
            console.error("Registration failed:", error);
            toast.error('Registration failed');
          }
        
    };

    return (
        <>
            <Helmet>
                <title>Register - PocketPay</title>
            </Helmet>

            <div className="font-[sans-serif] text-[#333] -mt-5">
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-auto md:w-[400px] w-full p-4">

                        <div className="md:max-w-[400px] w-full dark:bg-white border-2 sm:px-6 py-3 px-9 rounded-lg">
                            <form onSubmit={handleSubmit(handleRegisterForm)}>
                                <div className="my-6 text-center mx-auto">
                                    <div className="font-bold text-lg md:text-3xl gap-3 flex items-center mx-auto">
                                        Register
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm block mb-2 font-semibold">Your Name</label>
                                    <div className="relative">
                                        <input
                                            {...register("name", { required: true })}
                                            type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Name" />
                                        {errors.name && <span className="text-red-600">Please Enter Your Name</span>}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Mobile No.</label>
                                    <div className="relative">
                                        <input {...register("mobile", { required: true })} type="number" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Mobile Number" />
                                        {errors.mobile && <span className="text-red-600">Please Enter Your Mobile Number</span>}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Email</label>
                                    <div>
                                        <input {...register("email", { required: true })} type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Email" />
                                        {errors.email && <span className="text-red-600">Please Enter Your Email</span>}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Pin</label>
                                    <div className="relative flex items-center">
                                        <input {...register("pin", { required: true })} type={showPin ? "text" : "password"} className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Pin" />
                                        <IoEyeOffOutline className="absolute right-2 text-2xl cursor-pointer" onClick={() => setShowPin(!showPin)}></IoEyeOffOutline>
                                        {errors.pin && <span className="text-red-600">Please Enter Your Pin</span>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button type="submit" className="block w-full py-3 bg-[#333] text-white text-sm font-bold rounded-lg hover:bg-white hover:text-[#333] hover:border-2 hover:border-[#333] transition-all duration-500">
                                        Register
                                    </button>
                                </div>

                            </form>

                            <div className="text-sm text-center mt-4">
                                <p>Already have an account? <a href="/login" className="text-[#333] font-bold">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
