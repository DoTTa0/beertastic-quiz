import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const InputName = styled.input`
  display: flex;
  justify-content: flex-start;
  min-height: 40px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  margin-bottom: 25px;
  padding-left:10px;
  outline: none;

  &::-webkit-input-placeholder {
   color: #fff;
}
`;

const ButtonPlay = styled.button`
  width:100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  text-decoration: none;
  border-radius:5px;
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 555;
  padding:10px;
  border: none;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              {db.description}
            </p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <InputName placeholder="Insira seu nome aqui..." value={name} onChange={(event) => setName(event.target.value)} />
              <ButtonPlay type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Jogar { name }
              </ButtonPlay>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>
              Quizes da Galera
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DoTTa0" />
    </QuizBackground>
  );
}
