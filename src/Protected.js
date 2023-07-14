import { useSelector } from "react-redux";
import { fetchToken } from "./features/Auth/authSlice";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Protected = ({ children }) => {
    const user = useSelector(fetchToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user === "") {
            navigate('/login');
        }
    }, [user, navigate]);

    return children;
}

export default Protected;
