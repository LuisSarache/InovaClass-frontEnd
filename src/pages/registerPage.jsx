import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RegisterForm from "../components/registerForm";
const RegisterPage = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div 
                className="flex-grow flex items-center justify-center bg-gray-50">
                <RegisterForm/>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default RegisterPage 