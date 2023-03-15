//Next
import Image from 'next/image';

//Styles
import styles from './Footer.module.css'

//Images
import GitHubIcon from '../../../public/images/github_icon.png'
import LinkedinIcon from '../../../public/images/linkedin_icon.png';

export const Footer = () => {
    return (
        <footer className={styles.footerArea}>
            <h3>Follow me:</h3>
            <div className={styles.social}>
                <a href="https://github.com/eduardorocham" target='_blank'>
                    <div className={styles.socialIcon}>
                        <Image src={GitHubIcon} alt="git-hub-icon" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/eduardo-rocha-553486212/" target='_blank'>
                    <div className={styles.socialIcon}>
                        <Image src={LinkedinIcon} alt="linkendin-icon" />
                    </div>
                </a>
            </div>
            <div className={styles.footerInfo}>
                Developed by <a href="https://github.com/eduardorocham" target="_blank "><span>Eduardo Rocha</span></a>
            </div>
        </footer>
    )
}