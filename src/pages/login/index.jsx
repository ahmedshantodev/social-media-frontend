import React, { useEffect, useState } from "react";
import ripple_logo from "/public/images/ripple-logo.png";
import Input from "../../components/layout/Input";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/authenticationApi";
import { toast } from "react-toastify";
import { activeUser } from "../../redux/slices/activeUserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    credential: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
    setError((prev) => ({
      ...prev,
      credential: "",
    }));
  }, [info]);

  const handleLogin = async () => {
    if (info.email === "") {
      return setError((prev) => ({
        ...prev,
        email: "please enter your email",
      }));
    }

    if (info.password === "") {
      return setError((prev) => ({
        ...prev,
        password: "please enter your password",
      }));
    }

    const response = await login({
      email: info.email,
      password: info.password,
    });

    if (response.error?.data?.message) {
      if (response.error?.data?.message == "user not found") {
        return setError((prev) => ({
          ...prev,
          email: response.error.data.message,
        }));
      }

      if (response.error?.data?.message == "wrong credential") {
        return setError((prev) => ({
          ...prev,
          credential: response.error.data.message,
        }));
      }
    }

    if (response.data?.message) {
      const { message, ...rest } = response.data;

      dispatch(activeUser(rest));
      localStorage.setItem("user", JSON.stringify(rest));

      toast.success(response.data?.message, {
        autoClose: 4000,
        position: "bottom-center",
        hideProgressBar: true,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ripple | Login</title>
      </Helmet>

      <section className="w-full h-screen bg-registration-bg bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[1450px] rounded-[30px] bg-[#f0f2f5] py-10 px-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <img src={ripple_logo} alt="ripple-logo" className="w-[70px] mb-8" />

          <div className="flex">
            <div className="w-[53%]">
              <h2 className="font-segoe-ui text-5xl font-medium text-secondary-text">
                Login your Ripple Account
              </h2>
              <p className="w-[80%] font-segoe-ui text-lg mt-5 font-normal text-secondary-text">
                We've saved your spot in the ripple, friend! ✨ Login and
                reconnect with the conversations that sparked your mind. Dive
                back into the heart of Ripple, where whispers turn into waves of
                connection. Let's keep the good vibes flowing!
              </p>
            </div>

            <div className="w-[47%]">
              <div className="relative mb-12 overflow-hidden">
                <div className="">
                  <Input
                    type={`text`}
                    id={`email`}
                    name={`email`}
                    label={`Email`}
                    error={error.email}
                    onChange={handleChange}
                    className={`w-full mb-5`}
                    placeholder={`Enter your email`}
                  />

                  <Input
                    id={`password`}
                    name={`password`}
                    label={`Password`}
                    error={error.password}
                    onChange={handleChange}
                    className={`w-full mb-5`}
                    placeholder={`Enter your password`}
                    type={isPasswordShow ? "text" : "password"}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2.5 ml-1">
                      <input
                        type="checkbox"
                        id="show-password"
                        name="show-password"
                        onChange={() => setIsPasswordShow(!isPasswordShow)}
                        className="cursor-pointer scale-[1.1]"
                      />
                      <label
                        htmlFor="show-password"
                        className="font-inter text-secondary-text font-medium cursor-pointer"
                      >
                        Show password
                      </label>
                    </div>

                    <Link
                      to={"/forget-password"}
                      className="font-inter text-secondary-text font-medium hover:underline"
                    >
                      Forgotten password?
                    </Link>
                  </div>

                  {error.credential && (
                    <p className="w-full px-5 py-2.5 text-[#86182a] bg-[#ffdce0] font-inter text-lg font-semibold border border-red-400 text-center mt-1">
                      {error.credential}
                    </p>
                  )}
                </div>
              </div>

              <div className={`flex items-center justify-between`}>
                <Link
                  to={"/registration"}
                  className="group font-segoe-ui font-medium text-secondary-text"
                >
                  Don't have account?{" "}
                  <span className="group-hover:underline">Registration</span>
                </Link>

                {isLoading ? (
                  <button className="bg-[#097b09] text-white px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#097b09] active:scale-[0.95] transition-all duration-200 ease-in-out">
                    saving...
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="bg-[#097b09] text-white px-10 py-2.5 rounded-full text-lg font-segoe-ui font-medium border-2 border-[#097b09] active:scale-[0.95] transition-all duration-200 ease-in-out"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
