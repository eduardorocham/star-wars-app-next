//Modules
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//Styles
import styles from './Layout.module.css'

//Components
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Loader } from '../Loader'

type Props = {
    children: ReactNode
}

export const Layout = ({ children } : Props) => {
    const { events, asPath } = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleStart = (url: string) => url !== asPath && setIsLoading(true)
        const handleComplete = (url: string) =>
        url === asPath && setIsLoading(false)

        events.on('routeChangeStart', handleStart)
        events.on('routeChangeComplete', handleComplete)
        events.on('routeChangeError', handleComplete)

        return () => {
        events.off('routeChangeStart', handleStart)
        events.off('routeChangeComplete', handleComplete)
        events.off('routeChangeError', handleComplete)
        }
    }, [setIsLoading, events, asPath])
    return (
        <>
           <Header />
           <Loader show={isLoading} />
           {!isLoading &&
                <div>
                    {children}
                </div>
           }
           <Footer />
        </>
    )
}