import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}
