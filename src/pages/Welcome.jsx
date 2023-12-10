import {useNavigate} from 'react-router-dom';

export default function Welcome(){
    const navigate = useNavigate();

    function navigateLogin(){
        navigate('/login');
    }

    function navigateSignup(){
        navigate('/signup');
    }

    return <>
    <div>Welcome</div>
    <button onClick={navigateLogin}>LOG IN</button>
    <button onClick={navigateSignup}>SIGN UP</button>
    </>
}