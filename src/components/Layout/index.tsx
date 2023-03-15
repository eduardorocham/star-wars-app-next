import { ReactNode } from 'react'

//Styles
import styles from './Layout.module.css'

//Components
import { Header } from '../Header'
import { Footer } from '../Footer'

type Props = {
    children: ReactNode
}

export const Layout = ({ children } : Props) => {
    return (
        <>
           <Header />
                {children}
           <Footer />
        </>
    )
}