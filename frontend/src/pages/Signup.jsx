
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {

            alert("Password does not match");
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signup",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }
            );
            alert(response.data.message);
            login(response.data.user);
            navigate("/");
        }
        catch (error) {
            alert(
                error.response?.data?.message ||
                "Signup failed"
            );
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">
                            Signup
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"

                                placeholder="Enter Name"

                                className="form-control mb-3"

                                value={formData.name}

                                onChange={handleChange}

                                required
                            />
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
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="form-control mb-3"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                className="btn btn-success w-100"
                            >
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signup;