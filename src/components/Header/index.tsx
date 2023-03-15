//Next
import Link from 'next/link'
import Image from 'next/image'

//Styles
import styles from './Header.module.css'

//Images
import logoImage from '../../../public/images/star_wars_logo.png'
import menuMobile from '../../../public/images/menu_mobile.png'

import { navigationLinks } from '@/utils/navigationLinks'

export const Header = () => {
    return (
        <header className={styles.headerArea}>
            <div className={styles.menuMobile}>
                <Image src={menuMobile} alt="menu_mobile" />
            </div>

            <div className={styles.logo}>
                <Image src={logoImage} alt="star_wars_logo" width={100} />
            </div>

            <div className={styles.menu}>
                {navigationLinks.map((link, index) => (
                    <li 
                        key={index} 
                        className={styles.linkItem}
                    >
                        <Link href={link.path[0]}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </div>
        </header>
    )
}