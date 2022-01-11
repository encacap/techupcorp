import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import encacapLogo from "../assets/images/logo.svg";
import Input from "../components/Common/Form/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        window.document.title = "Register - Khanh Nguyen";
    }, []);

    return (
        <div className="flex w-screen h-screen">
            <form action="" className="m-auto rounded-md border-2 border-gray-100 px-10 py-12" style={{ width: 480 }}>
                <div>
                    <div>
                        <img src={encacapLogo} alt="Khanh Nguyen - Encacap" className="w-16" />
                    </div>
                    <div className="font-semibold text-xl pt-7 pb-8">Register account</div>
                    <div className="w-16 h-1 rounded-md bg-gray-100"></div>
                </div>
                <div className="mt-10">
                    <Input
                        label="Email"
                        name="email"
                        placeholder="Ex: your.email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Your name"
                        name="name"
                        placeholder="Ex: Khanh Nguyen"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={"mt-5"}
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        className="mt-5"
                        placeholder="Ex: •••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center mt-5">
                    <Link
                        to="/accounts/login"
                        className="mr-5 bg-gray-200 border-gray-300 rounded-md px-6 py-4 text-black text-sm font-semibold hover:bg-gray-300"
                    >
                        Login
                    </Link>
                    <button
                        type="submit"
                        className="flex-1 bg-blue-500 rounded-md px-6 py-4 text-white text-sm font-semibold hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;