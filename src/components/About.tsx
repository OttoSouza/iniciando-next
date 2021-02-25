import { Paper, Typography } from '@material-ui/core';
import styles from '../styles/components/About.module.css';
export function About() {
  return (
    <section className={styles.aboutContainer}>
      <Typography variant="h4">About</Typography>
      <Paper elevation={3}>
        <Typography variant="subtitle1">
          Star Wars is an American epic space opera[1] media franchise created
          by George Lucas, which began with the eponymous 1977 film[b] and
          quickly became a worldwide pop-culture phenomenon. The franchise has
          been expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe.[c] In
          2020, its total value was estimated at US$70 billion, and it is
          currently the fifth-highest-grossing media franchise of all time.
        </Typography>
      </Paper>
    </section>
  );
}
