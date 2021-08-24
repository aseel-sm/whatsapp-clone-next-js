import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        {" "}
        <title>Login</title>
      </Head>

      <LogoContainer>
        <Logo src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" />
        <Button variant="outlined" onClick={signIn}>
          Sign In With Google
        </Button>
      </LogoContainer>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px -5px 38px -6px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 0px -5px 38px -6px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 0px -5px 38px -6px rgba(0, 0, 0, 0.66);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
`;
