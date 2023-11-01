'use client'
import styles from './styles.module.sass'
import { useContext, useEffect, useState } from 'react'
import { HeroesContext } from '@/contexts/HeroesContext'

const SearchBar = () => {
    const { allHeroes, filter, setFilter, filteredHeroes, setFilteredHeroes } = useContext(HeroesContext)
    
    const filterHeroes = () => {
        const filtered = allHeroes.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredHeroes(filtered)
    }

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            filterHeroes()
        }
    }

    useEffect(() => {
    }, [filter, filteredHeroes, allHeroes])

    return (
        <div className={styles['header-search']}>
            <input type="text" placeholder='Buscar herói' onChange={(e) => setFilter(e.target.value)} onKeyDown={handleSearch} />
            <button onClick={filterHeroes}>BUSCAR</button>
        </div>
    )
}

export default SearchBar