import HeroCardsContainer from '@/components/HeroCardsContainer'
import styles from './styles.module.sass'

export default async function Home() {
  
  return (
    <main className={styles.main}>
      <HeroCardsContainer />
    </main>
  )
}
