import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postLogin } from '../../services/ApiServices';
import './Login.scss';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
        //validate
        //Submit apis
        let data = await postLogin(email, password);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/");
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                <h2>Typeform</h2>
            </div>
            <div className="welcome col-4 mx-auto">
                <span>Hello, Who's this?</span>
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label className="email">Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="password">Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >Login</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/'); }}>&#60;&#60;Go Back Homepage</span>
                </div>
            </div>
        </div>
    );
};

export default Login;