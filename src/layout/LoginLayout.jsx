import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen p-10">
        <Outlet />
      </div>
    </>
  );
};
export default LoginLayout;
