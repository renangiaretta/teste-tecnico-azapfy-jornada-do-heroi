import { IModalFightAttributeProps, IPowerStats } from '@/interfaces/heroes'
import styles from './styles.module.sass'

const ModalFightAttribute = ({ attribute, fighter1, fighter2 }: IModalFightAttributeProps<IPowerStats>) => {
    const higherAtt = () => {
        return fighter1[attribute] > fighter2[attribute] ? 'fighter1' : 'fighter2';
    }
    return (
        <div className={styles['modal-fight-attribute-container']}>
            <div className={styles['modal-fight-attribute-wrapper1']}>
                <span className={styles['modal-fight-attribute-value']}>{fighter1[attribute]}</span>
                <span className={higherAtt() === 'fighter1'
                    ? `${styles['modal-fight-attribute-circle']} ${styles['green']}`
                    : styles['modal-fight-attribute-circle']}>
                    x
                </span>
            </div>
            <h4 className={styles['modal-fight-attribute-']}>{attribute}</h4>
            <div className={styles['modal-fight-attribute-wrapper2']}>
                <span className={styles['modal-fight-attribute-value']}>{fighter2[attribute]}</span>
                <span className={higherAtt() === 'fighter2'
                    ? `${styles['modal-fight-attribute-circle']} ${styles['green']}`
                    : styles['modal-fight-attribute-circle']}>
                    x
                </span>
            </div>
        </div>
    )
}

export default ModalFightAttribute