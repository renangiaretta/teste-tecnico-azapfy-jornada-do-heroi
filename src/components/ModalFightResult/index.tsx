import { Box, Button, Modal } from '@mui/material'
import styles from './styles.module.sass'
import { IModalFightResultProps, IPowerStats } from '@/interfaces/heroes'
import ModalFightAttribute from '../ModalFightAttribute'
import ModalFightHeroCard from '../ModalFightHeroCard'
import { useContext } from 'react'
import { HeroesContext } from '@/contexts/HeroesContext'


const ModalFightResult = ({ openModal, setOpenModal }: IModalFightResultProps) => {
    const { selectedHeroes, setSelectedHeroes } = useContext(HeroesContext)

    const fightResult = () => {
        if (selectedHeroes.length === 2) {
            const hero1Power = Object.values(selectedHeroes[0].powerstats).reduce((total, acc) => total + acc, 0)
            const hero2Power = Object.values(selectedHeroes[1].powerstats).reduce((total, acc) => total + acc, 0)
            if (hero1Power > hero2Power) {
                return `Vencedor ${selectedHeroes[0].name}`
            } else if (hero1Power < hero2Power) {
                return `Vencedor ${selectedHeroes[1].name}`
            } else {
                return `Empate`
            }
        }
    }

    const handleChangeAnother = () => {
        setSelectedHeroes([])
        setOpenModal(false)
    }

    return (
        <Modal className={styles['modal-bg']} open={openModal} onClose={() => setOpenModal(false)} >
            <Box className={styles['modal-box']}>
                <div className={styles['modal-card-container']}>
                    <ModalFightHeroCard selectedHero={selectedHeroes[0]} />
                </div>
                <div className={styles['modal-attributes-wrapper']}>
                    <h1 className={styles['modal-attributes-title']}>{fightResult()}</h1>
                    <div className={styles['modal-attributes-container']}>
                        {
                            selectedHeroes[1] != null && Object.keys(selectedHeroes[1]).length > 0
                                ? Object.keys(selectedHeroes[1].powerstats).map((el, index) =>
                                    <ModalFightAttribute
                                        key={index}
                                        attribute={el as keyof IPowerStats}
                                        selectedHero1={selectedHeroes[0]}
                                        selectedHero2={selectedHeroes[1]} />)
                                : null
                        }
                    </div>
                </div>
                <div className={styles['modal-card-container']}>
                    <ModalFightHeroCard selectedHero={selectedHeroes[1]} />
                </div>
                <Button className={styles['modal-fight-hc-btn']} onClick={handleChangeAnother}>
                    Selecionar outros
                </Button>
                <Button className={styles['modal-fight-close-btn']} onClick={handleChangeAnother}>
                    X
                </Button>
            </Box>
        </Modal>
    )
}

export default ModalFightResult