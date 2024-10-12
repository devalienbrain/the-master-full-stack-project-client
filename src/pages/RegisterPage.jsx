import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const { registerWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhotoUrl] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null); // To store error message if registration fails

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    try {
      await registerWithEmail(email, password, name, phone, photo, address);
      navigate("/"); // Redirect on successful registration
    } catch (err) {
      setError(err.message); // Capture and display error message
      console.error(err.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-white font-semibold">
      <div className="card w-full max-w-xl  ">
        <form className="card-body" onSubmit={handleEmailRegister}>
          <h1 className="text-4xl font-extrabold text-center mb-4">
            Please Register First!
          </h1>

          {/* Display error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="input input-bordered"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              value={photo}
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
            <div className="pt-3 text-xs">
              As default, copy & paste:{" "}
              <span className="underline">
                https://i.ibb.co.com/k6hTYW1/Alien-Dev.jpg{" "}
              </span>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter your home address"
              className="input input-bordered"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-accent w-full">Register</button>
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
