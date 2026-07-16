

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://food-app-mern-xk7x.onrender.com ",
                {
                    email: formData.email,
                    password: formData.password
                }
            );
            alert(response.data.message);
            localStorage.setItem(
                "token",
                response.data.token
            );
            login(response.data.user);
            navigate("/");
        }
        catch (error) {
            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">
                            Login
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="form-control mb-3"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="form-control mb-3"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Don't have an account?{" "}
                                <Link to="/signup">
                                    Signup here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;