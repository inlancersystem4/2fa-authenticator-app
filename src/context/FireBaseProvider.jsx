import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestForToken } from "../config/firebase";
import { setFcm } from "../redux/actions/actions";

export default function FireBaseProvider({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await requestForToken();
        if (token) {
          dispatch(setFcm(token));
        }
      }
    };

    getToken();
  }, [dispatch]);

  return <div>{children}</div>;
}

FireBaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
