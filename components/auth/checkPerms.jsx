import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import verifyToken from "./verifyToken";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      // we call the api that verifies the token.
      const data = await verifyToken();
      // if token was verified we set the state.
      if (data.verified) {
        setVerified(data.verified);
      } else {
        // If the token was fraud we first remove it from localStorage and then redirect to "/"
        Router.replace("/");
      }
      
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;