import Image from 'next/image'
import styles from './styles.module.sass'
import { GiCrossedSwords } from 'react-icons/gi'
import { IHeroCardProps } from '@/interfaces/heroes'


const HeroCard = ({ heroData }: { heroData: IHeroCardProps }) => {
    const powerStats = heroData.powerstats
    const totalStats = Object.values(powerStats).reduce((total, acc) => total + acc, 0)

    return (
        <li className={styles['hero-card-container']}>
            <div className={styles['hero-card-img-wrapper']}>
                <Image src={heroData.images.md} width={50} height={50} alt='img' style={{ borderRadius: '0 0 8px 20px', height: '100%', width: '100%', objectFit: 'cover' }} />
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