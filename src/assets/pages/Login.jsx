import { useState } from "react";
import Logo from "../imgs/logo.png";
import bgImage from "../imgs/background_banner.jpg";
import { logIn, signUp } from "../../firebase";
import { IoAppsSharp } from "react-icons/io5";
import logInSpinner from "../../assets/imgs/netflix_spinner.gif";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isSignUp === false) {
      await logIn(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="w-screen h-screen flexCenter">
      <img src={logInSpinner} className="w-16" />
    </div>
  ) : (
    <div className="p-[6%] w-full h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-[-10] opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <img src={Logo} alt="Netflix" className="h-10" />
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-start gap-5 h-auto max-w-[450px] w-full bg-black/75 p-16 rounded-md">
          <h1 className="text-3xl font-bold mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          <form noValidate className="flex flex-col gap-4 h-auto w-full">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="block rounded px-5 pb-2.5 pt-6 w-full text-white bg-[#333] appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Your name
                </label>
              </div>
            )}
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="block rounded px-5 pb-2.5 pt-6 w-full text-white bg-[#333] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email or phone number
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="block rounded px-5 pb-2.5 pt-6 w-full text-white bg-[#333] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Password
              </label>
            </div>
            <button
              onClick={userAuth}
              type="submit"
              className="py-3 mt-6 bg-red-600 rounded font-bold hover:bg-red-700 transition-colors"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <div className="flex justify-between items-center text-sm text-zinc-400 mt-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>
          <div className="mt-4 text-zinc-400">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={() => setIsSignUp(false)}
                  className="text-white font-semibold hover:underline"
                >
                  Sign in now.
                </a>
              </p>
            ) : (
              <p>
                New to Netflix?{" "}
                <a
                  href="#"
                  onClick={() => setIsSignUp(true)}
                  className="text-white font-semibold hover:underline"
                >
                  Sign up now.
                </a>
              </p>
            )}
            <p className="text-xs mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
