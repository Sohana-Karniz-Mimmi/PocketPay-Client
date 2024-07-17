import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const history = useHistory();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await login(data.identifier, data.pin);
    if (result.success) {
        toast.success('Login Successful');
      navigate('/profile')
    } else {
        toast.error('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email or Phone
          </label>
          <input
            type="text"
            {...register("identifier", { required: "Email or phone number is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">
              {errors.identifier.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            PIN
          </label>
          <input
            type="password"
            {...register("pin", { required: "PIN is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.pin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pin.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md"
        >
          Login
        </button>
        <div className="flex justify-end">
          <Link to={'/register'}>
            <p>
              Don not have any account?
              <span className="underline text-blue-500">Register</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
