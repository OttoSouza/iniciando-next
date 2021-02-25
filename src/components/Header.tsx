import { Typography } from '@material-ui/core';
import styles from '../styles/components/Header.module.css';
import { GitHub, LinkedIn, Instagram } from '@material-ui/icons';
export function Header() {
  return (
    <header className={styles.headerContainer}>  
      <Typography variant="h5">Star wars Wiki</Typography>
      <div>
        <GitHub />
        <LinkedIn />
        <Instagram />
      </div>
    </header>
  );
}
