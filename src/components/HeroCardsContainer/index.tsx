'use client'
import styles from './styles.module.sass'
import { IHeroCardProps } from '@/interfaces/heroes'
import HeroCard from '../HeroCard'
import { useState } from 'react'
import ModalFightResult from '../ModalFightResult'

const HeroCardsContainer = ({ heroesData }: { heroesData: IHeroCardProps[] }) => {
    console.log(heroesData)
    const [openModal, setOpenModal] = useState<boolean>(false)
    return (
        <section className={styles['hero-cards-container']}>
            <button onClick={() => setOpenModal(true)}>teste</button>
            {
                heroesData
                    ? heroesData.map((el: IHeroCardProps) => (<HeroCard key={el.id} heroData={el} />))
                    : null
            }
            <ModalFightResult openModal={openModal} setOpenModal={setOpenModal} />
        </section>
    )
}

export default HeroCardsContainer