'use client'
import Image from 'next/image'
import SearchBar from '../SearchBar'
import styles from './styles.module.sass'
import { Avatar, Stack } from '@mui/material'
import { useContext } from 'react'
import { HeroesContext } from '@/contexts/HeroesContext'

const Header = () => {
    const { allHeroes, setFilteredHeroes } = useContext(HeroesContext)

    return (
        <div className={styles['header-container']}>
            <div className={styles['header-wrapper']}>
                <div onClick={() => setFilteredHeroes(allHeroes)} className={styles['header-logo-wrapper']}>
                    <Image src='/assets/images/logo.png' width={120} height={120} alt='logo' style={{ width: '100%', height: '100%' }} />
                </div>
                <SearchBar />
                <div className={styles['header-profile-wrapper']}>
                    <Stack direction="row" spacing={2}>
                        <h3 className={styles['header-profile-text']}>Olá, Usuário</h3>
                        <Avatar
                            sx={{ bgcolor: 'black' }}
                            alt="Convidado!"
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Header