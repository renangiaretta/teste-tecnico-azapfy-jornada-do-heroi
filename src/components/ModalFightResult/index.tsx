import { Box, Button, Modal } from '@mui/material'
import styles from './styles.module.sass'
import { IModalFightResultProps, IPowerStats } from '@/interfaces/heroes'
import ModalFightAttribute from '../ModalFightAttribute'
import ModalFightHeroCard from '../ModalFightHeroCard'

const ModalFightResult = ({ openModal, setOpenModal }: IModalFightResultProps) => {
    const mockStats1: IPowerStats = {
        intelligence: 10,
        strength: 10,
        speed: 45,
        durability: 15,
        power: 10,
        combat: 20,
    }
    const mockStats2: IPowerStats = {
        intelligence: 102,
        strength: 15,
        speed: 10,
        durability: 10,
        power: 10,
        combat: 10,
    }
    return (
        <Modal className={styles['modal-bg']} open={openModal} onClose={() => setOpenModal(false)} >
            <Box className={styles['modal-box']}>
                <div className={styles['modal-card-container']}>
                    <ModalFightHeroCard />
                </div>
                <div className={styles['modal-attributes-container']}>
                    {
                        Object.keys(mockStats1).map((el, index) => <ModalFightAttribute key={index} attribute={el as keyof IPowerStats} fighter1={mockStats1} fighter2={mockStats2} />)
                    }
                </div>
                <div className={styles['modal-card-container']}>
                    <ModalFightHeroCard />
                </div>
                {/* <Button variant='contained' onClick={() => setOpenModal(false)}>Fechar</Button> */}
            </Box>
        </Modal>
    )
}

export default ModalFightResult