// import React from 'react'

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            name
          </label>
          <input
            type="text"
            placeholder="enter name"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4 ">
          <button type="submit" className="w-full bg-red-600 text-white py-2 ">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already have a Accont?</span>
        <button className="text-red-800" onClick={openLogin}>
          Login Up
        </button>
      </div>
    </div>
  );
};

export default Register;
