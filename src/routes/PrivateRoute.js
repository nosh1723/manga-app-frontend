import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const session = sessionStorage.getItem("account");
    if (!session) navigate("/signin");
  }, []);
  return <>{props.children}</>;
};

export { PrivateRoute };
