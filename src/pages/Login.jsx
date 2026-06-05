import {useState} from 'react';
import { Navigate,useLocation,useNavigate } from 'react-router-dom';


function Login({isLoggedIn,onLogin}) {

    const navigate = useNavigate();
    const location = useLocation();

    const redirecctPath = location.state?.from?.pathname || "/dashboard";

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    const [error,setError] = useState({});
    const [loginError,setLoginError]=useState('');

    if(isLoggedIn){
        return <Navigate to = "/dashboard" replace/>
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value, 
        }));
    }

    function validateForm(){
        const newErrors = {};

        if(!formData.username.trim()){
            newErrors.username = "Username is required";
        }
        if(!formData.password.trim()){
            newErrors.password = "Password is required";
        }
        return newErrors;
    }
    function handleSubmit(e){
        e.preventDefault();
        setLoginError('');
        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length > 0){
            setError(validationErrors);
            return;
        }
        setError({});
        

        const result= onLogin(formData.username,formData.password);

        if(result.success){
            navigate(redirecctPath, {replace: true});
    }else{
        setLoginError(result.message);
    }

}
return(
    <main className="login-page">
    <form className="login-card" onSubmit={handleSubmit}>
        <h1>Library Login</h1>
        <div className="form-group">
            <label>Username:</label>
            <input 
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username" />
            {error.username && <span className="errors">{error.username}</span>}
        </div>
        <div className="form-group">
            <label>Password</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password" />
            {error.password && <span className="error">{error.password}</span>}
        </div>
        <button type="submit" className="primary-btn" full-width>Login</button>
      
    </form>


    </main>
);

}
export default Login;