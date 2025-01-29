import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.session.token);

  useEffect(() => {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  }, [token, navigate]);

  return <div>home page</div>;
}

export default App;
