import { Grid, Typography } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { MyCard } from '../components/Card';
import styles from '../styles/components/Characteres.module.css';

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
export function Characters({ characters }: CharactersProps) {
  return (
    <section className={styles.charactersContainer}>
      <Typography variant="h4">Characters</Typography>
      <Grid container direction="row" alignItems="flex-start" spacing={2}>
        {characters.map(character => (
          <Grid key={character.name} item xs={12} sm={12} md={6} lg={6} xl={4}>
            <MyCard  data={character} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
