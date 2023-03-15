//Next
import Link from 'next/link'

//Styles
import styles from './SectionHome.module.css'

//Components
import { Button } from '../Button'

//Types
type Props = {
    title: string,
    desc: string,
    path: string,
    textButton: string,
    bgImage: any
}

export const SectionHome = ({ title, desc, path, textButton, bgImage } : Props) => {
    return (
        <section 
            className={styles.sectionArea}
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
                <div className={styles.opacity}>
                    <div className={styles.container}>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>{title}</div>
                            <div className={styles.infoBar}></div>
                            <div className={styles.infoDesc}>
                                {desc}
                            </div>
                        </div>
                        <Link href={path}>
                            <Button text={textButton}/>
                        </Link>
                    </div>
                </div>  
            </section>
    )
}