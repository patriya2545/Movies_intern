import React, { ChangeEvent, MouseEvent, useId, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";



function Login (){

  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>('');

   
    return(
        <div className=" max-w-md  mx-auto bg-red-50 p-8 border-red-300 mt-11 ">

            <h1 className="text-center text-3xl font-bold text-red-300 mt-7">Login</h1>

            <form className="p-14" >
                <input  className=" w-full p-2 border-red-300 rounded" />
                <Link to="/list">
                  <button className=" border-solid border-4 border-red-300 rounded-full h-10 w-20  text-white bg-red-300 ml-24 mt-10 ">Submit</button>
                </Link>
            </form>

        </div>
        

    );

}
export default Login;