import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/Menu";

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>jack qian (@jsjqian)</title>
      <meta name="description" content="@jsjqian" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Menu />
    <Main>
      <Title>jack qian (@jsjqian)</Title>
      <Description>yet another developer</Description>
    </Main>
  </Container>
);

const Container = styled.div`
  background: #1d2021;
  padding: 0 2rem;
`;

const Main = styled.div`
  min-height: 100vh;
  color: #ebdbb2;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Description = styled.h1`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

export default Home;
