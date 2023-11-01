'use client'
import styles from './styles.module.sass'
import { useContext, useEffect } from 'react'
import { HeroesContext } from '@/contexts/HeroesContext'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IHeroCardProps } from '@/interfaces/heroes'
import { Button } from '@mui/material'
import { FaSearch } from 'react-icons/fa'


const SearchBar = () => {
    const { allHeroes, filter, setFilter, filteredHeroes, setFilteredHeroes } = useContext(HeroesContext)

    const filterHeroes = () => {
        try {
            const filtered: IHeroCardProps[] = allHeroes.filter(
                (el) => el.name.toLowerCase().includes(filter.toLowerCase()))
            if (filtered.length === 0) {
                toast.error('Nenhum herói encontrado com este nome.')
            }
            setFilteredHeroes(filtered)
        } catch (error) {
            toast.error('Não foi possível realizar esta solicitação.')
        }
    }

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            filterHeroes()
        }
    }

    useEffect(() => {
    }, [filter, filteredHeroes, allHeroes])

    return (
        <div className={styles['header-search-container']}>
            <input
            className={styles['header-search-input']}
            type="text" placeholder='Buscar personagem'
            onChange={(e) => setFilter(e.target.value)}
            onKeyDown={handleSearch} />
            <Button className={styles['header-search-btn']} onClick={filterHeroes}>
                <FaSearch />
            </Button>
            <ToastContainer />
        </div>
    )
}

export default SearchBar