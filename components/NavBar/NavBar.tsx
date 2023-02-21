import styles from './NavBar.module.css';
export const NavBar = () => {
  return (
    <div className={styles.navDiv}>
      <nav className={styles.navMenu}>
        <a href="/">About</a>
        <a href="team">Team</a>
        <a href="faq">FAQ</a>
        <a href="contact">Contact</a>
      </nav>
    </div>
  );
};
