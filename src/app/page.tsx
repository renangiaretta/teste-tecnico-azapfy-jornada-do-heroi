import HeroCardsContainer from '@/components/HeroCardsContainer'
import styles from './styles.module.sass'
import { api } from '@/services/api'
import { IHeroCardProps } from '@/interfaces/heroes'
import Header from '@/components/Header'
import AsideFilters from '@/components/AsideFilters'

export default async function Home() {
  const response = await api.get('/')
  const heroesData: IHeroCardProps[] = response.data
  return (
    <main className={styles['main']}>
      <Header />
      <div className={styles['main-container']}>
        <div className={styles['main-wrapper']}>
          <AsideFilters />
          <HeroCardsContainer heroesData={heroesData} />
        </div>
      </div>
    </main>
  )
}
