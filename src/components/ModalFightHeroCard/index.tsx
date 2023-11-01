import Image from 'next/image'
import styles from './styles.module.sass'
import { IModalFightHeroCardProps } from '@/interfaces/heroes'

const ModalFightHeroCard = ({ selectedHero }: IModalFightHeroCardProps) => {

    return (
        <div className={styles['modal-fight-hc-container']}>
            <div className={styles['modal-fight-hc-img-wrapper']}>
                <Image src={selectedHero.images.sm}
                    width={200}
                    height={300}
                    alt='img'
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
            </div>
            <div className={styles['modal-fight-hc-title-wrapper']}>
                <h3 className={styles['modal-fight-hc-title']}>{selectedHero.name}</h3>
            </div>
        </div>
    )
}

export default ModalFightHeroCard