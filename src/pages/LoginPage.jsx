import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="hero min-h-screen bg-white pt-10 font-semibold">
      <div className="card w-full max-w-xl ">
        <form className="card-body" onSubmit={handleEmailLogin}>
          <h1 className="text-4xl font-extrabold text-center mb-4">
            Please Login!
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-black text-white w-full">Login</button>
          </div>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
