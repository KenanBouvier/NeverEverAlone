import Image from 'next/image';
import styles from './Footer.module.css';
import ghIcon from './../../public/footerIcons/gh.png';
import linkedIn from './../../public/footerIcons/linkedin.png';
import emailIcon from './../../public/footerIcons/emailicon.png';

export const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerLinks}>
        <a
          href="mailto:test@test.com"
          target="_blank"
          className="iconDiv"
          rel="noreferrer"
        >
          <Image src={emailIcon} alt="ghicon" className={styles.footerIcon} />
        </a>

        <a
          href="https://www.linkedin.com/company/nevereveralone/"
          target="_blank"
          className="iconDiv"
          rel="noreferrer"
        >
          <Image src={linkedIn} alt="ghicon" className={styles.footerIcon} />
        </a>
      </div>
      <p className={styles.footerTxt}>
        © 2022 NeverEverAlone. All rights reserved.
      </p>
    </div>
  );
};
