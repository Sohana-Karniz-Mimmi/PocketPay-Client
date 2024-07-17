import { Helmet } from "react-helmet-async";
// import { useState } from "react";
import { useForm } from "react-hook-form";
// import { IoEyeOffOutline } from "react-icons/io5";
// import toast from 'react-hot-toast';
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    // const [showPin, setShowPin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const handleRegisterForm = async (formData) => {
    //     // try {
    //     //     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
    //     //         method: 'PUT',
    //     //         headers: {
    //     //             'Content-Type': 'application/json',
    //     //         },
    //     //         body: JSON.stringify(formData),
    //     //     });

    //     //     if (!response.ok) {
    //     //         const errorMessage = await response.text();
    //     //         throw new Error(errorMessage);
    //     //     }

    //     //     const data = await response.json();
    //     //     console.log(data); // Log success message or handle further actions
    //     //     toast.success('Sign Up Successful');
    //     //     navigate('/login');

    //     // } catch (error) {
    //     //     console.error('Error registering user:', error.message);
    //     //     toast.error('Registration failed');
    //     // }

    //     try {
    //         const response = await axiosPublic.put("/register", formData);
    //         console.log(response.data); // Log the response data if needed
    //         toast.success('Sign Up Successful');
    //         navigate('/login');
    //     } catch (error) {
    //         console.error("Registration failed:", error);
    //         toast.error('Registration failed');
    //     }

    // };

    const onSubmit = async (data) => {
        console.log(data);
        try {
          const response = await axiosPublic.put("/register", data);
          console.log(response.data); // Log the response data if needed
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful!',
          });
          navigate("/login")
        } catch (error) {
          console.error("Registration failed:", error);
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'Please try again later.',
          });
        }
      };

    return (
        <>
            <Helmet>
                <title>Register - PocketPay</title>
            </Helmet>

            <div className="max-w-md mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            5-digit PIN
                        </label>
                        <input
                            type="text"
                            {...register("pin", {
                                required: "PIN is required",
                                pattern: {
                                    value: /^\d{5}$/,
                                    message: "PIN must be a 5-digit number",
                                },
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.pin && (
                            <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^\d{11}$/,
                                    message: "Mobile number must be exactly 11 digits",
                                },
                                validate: (value) =>
                                    /^\d+$/.test(value) || "Mobile number must contain only numbers",
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md"
                    >
                        Register
                    </button>
                    <div>
                        <Link to={"/"}>
                            <p>
                                Already have an account?
                                <span className="underline text-blue-500">Login</span>
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
