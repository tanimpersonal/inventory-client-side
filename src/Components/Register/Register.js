import { sendEmailVerification } from "firebase/auth";
import React, { useRef, useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const email = useRef();
  const password = useRef();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(email.current.value, password.current.value);

    createUserWithEmailAndPassword(email.current.value, password.current.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="register">
        <section className="h-screen">
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form onSubmit={handleRegister}>
                  <div className="mb-6">
                    <input
                      ref={email}
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      ref={password}
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
