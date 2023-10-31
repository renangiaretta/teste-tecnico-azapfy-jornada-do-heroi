import { api } from '@/services/api'
import styles from './styles.module.sass'
import { IHeroCardProps } from '@/interfaces/heroes'
import HeroCard from '../HeroCard'

const HeroCardsContainer = async () => {
    const response = await api.get('/')
    const heroesData = response.data
    return (
        <section className={styles['hero-cards-container']}>
            {
                heroesData
                    ? heroesData.map((el: IHeroCardProps) => (<HeroCard key={el.id} heroData={el} />))
                    : null
            }
        </section>
    )
}

export default HeroCardsContainer