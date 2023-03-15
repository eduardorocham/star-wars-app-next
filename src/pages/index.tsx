import Image from 'next/image'
import styles from '@/styles/Home.module.css'

//Components
import { Layout } from '../components/Layout'
import { SectionHome } from '../components/SectionHome'

//Images
import bgImage1 from '../../public/images/background1.jpg'
import bgImage2 from '../../public/images/background2.jpg'
import bgImage3 from '../../public/images/background3.jpg'


export default function Home() {
  return (
    <Layout>
      <SectionHome
        title='Know the main films'
        desc='A guide to the main films of the franchise'
        path='/movies'
        textButton='Go to movies'
        bgImage={bgImage1}
      />
      <SectionHome
        title='Know the main characters'
        desc='A guide to the main characteres of the franchise'
        path='/characters'
        textButton='Go to characters'
        bgImage={bgImage2}
      />
      <SectionHome
        title='Know the main vehicles'
        desc='A guide to the main vehicles of the franchise'
        path='/vehicles'
        textButton='Go to vehicles'
        bgImage={bgImage3}
      />
    </Layout>
  )
}
