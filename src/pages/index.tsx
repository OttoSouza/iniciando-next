import Head from 'next/head';

import React from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Container } from '@material-ui/core';
import { Characters } from '../components/Characters';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface ICharacters {
  name: string;
  gender: string;
  height: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
}
interface CharactersProps {
  characters: ICharacters[];
}

const Home: React.FC<CharactersProps> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <Container fixed>
        <Header />
        <About />
        <Characters characters={characters} />
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<CharactersProps> = async () => {
  const response = await axios.get('https://swapi.dev/api/people/');
  const characters = await response.data.results;

  return {
    props: {
      characters,
    },
  };
};
