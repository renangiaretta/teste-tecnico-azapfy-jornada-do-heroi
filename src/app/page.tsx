import HeroCardsContainer from '@/components/HeroCardsContainer'
import styles from './styles.module.sass'
import { api } from '@/services/api'
import { IHeroCardProps } from '@/interfaces/heroes'
import Header from '@/components/Header'

export default async function Home() {
  const response = await api.get('/')
    const heroesData: IHeroCardProps[] = response.data
  return (
    <main className={styles.main}>
      <Header />
      <HeroCardsContainer heroesData={heroesData}/>
      
    </main>
  )
}
