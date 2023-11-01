'use client'
import styles from './styles.module.sass'
import { IHeroCardProps } from '@/interfaces/heroes'
import HeroCard from '../HeroCard'
import { useContext, useEffect, useState } from 'react'
import ModalFightResult from '../ModalFightResult'
import { HeroesContext } from '../../contexts/HeroesContext'


const HeroCardsContainer = ({ heroesData }: { heroesData: IHeroCardProps[] }) => {
    const { selectedHeroes, setSelectedHeroes } = useContext(HeroesContext)
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        selectedHeroes.length === 2
            ? setOpenModal(true)
            : null
    }, [selectedHeroes])

    return (
        <section className={styles['hero-cards-container']}>
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