import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";
const LoginPage = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div 
                className="flex-grow flex items-center justify-center bg-gray-50">
                <LoginForm/>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default LoginPage 