import Image from 'next/image'
import styles from './styles.module.sass'

const ModalFightHeroCard = () => {
    return (
        <div className={styles['modal-fight-hc-container']}>
            <div className={styles['modal-fight-hc-img-wrapper']}>
                <Image src={'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg'} width={50} height={50} alt='img' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles['modal-fight-hc-title-wrapper']}>
                <h3 className={styles['modal-fight-hc-title']}>Iron Man</h3>
            </div>
        </div>
    )
}

export default ModalFightHeroCard