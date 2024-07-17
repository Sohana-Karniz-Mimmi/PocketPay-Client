import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegisterForm = async data => {

        // e.preventDefault();
        console.log(data, 'Sohana is good girl');

    }



    return (
        <>
            <Helmet>
                <title>Register - PocketPay</title>
            </Helmet>

            <div className="text-white">
                <Navbar></Navbar>
            </div>
            <div className="font-[sans-serif] text-[#333] -mt-5">
                <div className=" flex flex-col items-center justify-center">
                    <div className="mx-auto md:w-[400px] w-full p-4">

                        {/* Form */}
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
                                            name="name" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Name" />
                                        {errors.name && <span className="text-red-600">Please Enter Your Name</span>}
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Photo URL</label>
                                    <div className="relative">
                                        <input {...register("photo", { required: true })} name="photo" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                        {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>}

                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Email</label>
                                    <div>
                                        <div className="relative flex items-center">
                                            <input {...register("email", { required: true })} name="email" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Email" />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                                <defs>
                                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        {errors.email && <span className="text-red-600">Please Enter Your Email</span>}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm block mb-2 font-semibold">Password</label>
                                    <div>
                                        <div className="relative flex items-center">
                                            <input {...register("password", { required: true })} name="password" type={showPassword ? "text" : "password"} className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter password" />
                                            {
                                                showPassword ? <IoEyeOffOutline onClick={() => setShowPassword(!showPassword)} className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-[#bbb]" />
                                                    :
                                                    <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                                    </svg>
                                            }
                                        </div>
                                        {errors.password && <span className="text-red-600">Please Enter a password</span>}
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="mt-6">
                                    <button className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-[#FF0143] absolute"></span>
                                        <span className="relative md:px-6 md:py-2 px-3 py-2 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative text-white md:text-[16px] text-sm">Register</span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;