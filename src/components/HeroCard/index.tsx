'use client'
import Image from 'next/image'
import styles from './styles.module.sass'
import { GiCrossedSwords } from 'react-icons/gi'
import { IHeroCardProps, IPowerStats } from '@/interfaces/heroes'
import { useContext } from 'react'
import { HeroesContext } from '../../contexts/HeroesContext'


const HeroCard = ({ heroData }: { heroData: IHeroCardProps }) => {
    const powerStats: IPowerStats = heroData.powerstats
    const totalStats: number = Object.values(powerStats).reduce((total, acc) => total + acc, 0)
    const { selectedHeroes, setSelectedHeroes } = useContext(HeroesContext)

    const selectHeroes = () => {
        if (selectedHeroes.some((selected) => selected.id === heroData.id)) {
            setSelectedHeroes((prevSelected) => prevSelected.filter((selected) => selected.id != heroData.id) )
        } else {
            setSelectedHeroes((prevSelected) => prevSelected.length < 2 ? [...prevSelected, heroData] : prevSelected)
        }
    }

    const changeColor = () => {
        return (selectedHeroes.some((el) => el.id === heroData.id))
    }

    return (
        <li onClick={selectHeroes} className={
            changeColor() ? `${styles['hero-card-container']} ${styles['selected']}` : styles['hero-card-container']
        }>
            <div className={styles['hero-card-img-wrapper']}>
                <Image src={heroData.images.md} width={150} height={150} alt='img' style={{ borderRadius: '0 0 8px 20px', height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles['hero-card-texts-wrapper']}>
                <h5 className={styles['hero-card-name']}>{heroData.name}</h5>
                <div className={styles['hero-card-power-wrapper']}>
                    <GiCrossedSwords />
                    <span className={styles['hero-card-power']}>{totalStats}</span>
                </div>
            </div>
        </li>
    )
}

export default HeroCard