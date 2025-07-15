import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  element: React.ReactElement;
}

const GuardRoute = ({ element }: Props) => {
  const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3000/checkCookie", { withCredentials: true })
            .then((res) => setIsAuthenticated(true))
            .catch(() => setIsAuthenticated(false))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Загрузка...</div>;
    return isAuthenticated ? element : <Navigate to="/Login" />;
};

export default GuardRoute;