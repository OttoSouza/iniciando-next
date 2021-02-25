import styles from '../styles/components/Card.module.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { ReactNode } from 'react';

interface ICharacters {
  name: string;
  gender: string;
  height: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
}

interface CharactersProps {
  data: ICharacters;
}

export const MyCard: React.FC<CharactersProps> = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="black" gutterBottom>
          {data.name}
        </Typography>

        <div className={styles.informationContainer}>
          <div className={styles.informationContent}>
            <Typography variant="h6">Informations</Typography>

            <Typography variant="subtitle2">
              <strong>Gender</strong> - {data.gender}
            </Typography>

            <Typography variant="subtitle2">
              <strong>Height</strong> {data.height}
            </Typography>
            <Typography variant="subtitle2">
              <strong>Hair color</strong> - {data.height}
            </Typography>
            <Typography variant="subtitle2">
              <strong>Skin color</strong> - {data.skin_color}
            </Typography>
            <Typography variant="subtitle2">
              <strong>Eye color</strong> {data.eye_color}
            </Typography>
          </div>
          <ArrowRight />
        </div>
      </CardContent>
    </Card>
  );
};
