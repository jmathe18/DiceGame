import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 flex items-center justify-center text-white">
        <form className="border border-red-50 rounded-md w-1/2 flex flex-col items-center gap-4 h-fit">
          {type === "login" ? (
            <h2 className="text-center pt-12 text-3xl">Login</h2>
          ) : (
            <h2 className="text-center pt-12 text-3xl">Sign Up</h2>
          )}
          <div>
            <label htmlFor="">Email: </label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 mt-2 w-[300px] input-form text-white rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 mt-2 w-[300px] input-form bg-transparent text-white rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-white text-blue-600 font-semibold rounded-md mt-3 mb-3"
          >
            Login
          </button>
          {type === "login" ? (
            <p className="mb-10">
              Don't have an account?{" "}
              <Link to="/signup" className="text-fuchsia-300">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="mb-10">
              Already a user?{" "}
              <Link to="/login" className="text-fuchsia-300">
                Login
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
