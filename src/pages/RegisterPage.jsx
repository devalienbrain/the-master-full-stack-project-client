import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const {
    registerWithEmail,
    loginWithGoogle,
    logInWithGithub,
    logInWithFacebook,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailRegister = (e) => {
    e.preventDefault();
    registerWithEmail(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = () => {
    logInWithGithub()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookLogin = () => {
    logInWithFacebook()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-white font-semibold">
      <div className="card w-full max-w-xl  border border-gray-300">
        <form className="card-body" onSubmit={handleEmailRegister}>
          <h1 className="text-4xl font-extrabold text-center mb-4">
            Please Register First!
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
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-accent w-full">Register</button>
          </div>

          <div className="divider">OR</div>

          <div className="flex flex-col space-y-2">
            <button
              onClick={handleGoogleLogin}
              className="btn border border-green-400 flex items-center justify-center"
            >
              <FaGoogle className="mr-2" />
              Register with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn border border-black flex items-center justify-center"
            >
              <FaGithub className="mr-2" />
              Register with GitHub
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn border border-blue-600 flex items-center justify-center"
            >
              <FaFacebook className="mr-2" />
              Register with Facebook
            </button>
          </div>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
