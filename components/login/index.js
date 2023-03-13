import React from 'react'
import styled from 'styled-components';
import loginBg from "public/loginBg.png";

export default function Login() {
  return (
    <img src={loginBg}/>
  )
}

const BackgroundImage = styled.div`
  background: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;
