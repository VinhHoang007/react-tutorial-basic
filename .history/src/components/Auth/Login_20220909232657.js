import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogin } from '../../redux/action/useAction';
import { postLogin } from '../../services/ApiServices';
import './Login.scss';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };
    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid Email');
            return;
        }

        if (!password) {
            toast.error('Invalid Password');
            return;
        }
        //Submit apis
        let data = await postLogin(email, password);

        if (data && data.EC === 0) {
            dispatch(doLogin());
            toast.success(data.EM);
            navigate("/");
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };


    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate('/register'); }}>Sign up</button>
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