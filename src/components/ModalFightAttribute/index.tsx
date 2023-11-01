import { IModalFightAttributeProps, IPowerStats } from '@/interfaces/heroes'
import styles from './styles.module.sass'

const ModalFightAttribute = ({ attribute, selectedHero1, selectedHero2 }: IModalFightAttributeProps<IPowerStats>) => {

    const higherAtt = () => {
        return selectedHero1.powerstats[attribute] > selectedHero2.powerstats[attribute] ? 'win' : 'lose';
    }
    return (
        <div className={styles['modal-fight-attribute-container']}>
            <div className={styles['modal-fight-attribute-wrapper1']}>
                <span className={styles['modal-fight-attribute-text']}>{selectedHero1.powerstats[attribute]}</span>
                <span className={higherAtt() === 'win'
                    ? `${styles['modal-fight-attribute-circle']} ${styles['win']}`
                    : `${styles['modal-fight-attribute-circle']} ${styles['lose']}`}>
                    x
                </span>
            </div>
            <h4 className={styles['modal-fight-attribute-text']}>{attribute}</h4>
            <div className={styles['modal-fight-attribute-wrapper2']}>
                <span className={styles['modal-fight-attribute-text']}>{selectedHero2.powerstats[attribute]}</span>
                <span className={higherAtt() === 'win'
                    ? `${styles['modal-fight-attribute-circle']} ${styles['win']}`
                    : `${styles['modal-fight-attribute-circle']} ${styles['lose']}`}>
                    x
                </span>
            </div>
        </div>
    )
}

export default ModalFightAttribute