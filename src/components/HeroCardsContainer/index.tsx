'use client'
import styles from './styles.module.sass'
import { IHeroCardProps } from '@/interfaces/heroes'
import HeroCard from '../HeroCard'
import { useContext, useEffect, useState } from 'react'
import ModalFightResult from '../ModalFightResult'
import { HeroesContext } from '../../contexts/HeroesContext'
import InfiniteScroll from 'react-infinite-scroller'


const HeroCardsContainer = ({ heroesData }: { heroesData: IHeroCardProps[] }) => {
    const { selectedHeroes, filter, filteredHeroes } = useContext(HeroesContext)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const { setAllHeroes } = useContext(HeroesContext)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [items, setItems] = useState<IHeroCardProps[]>(heroesData.slice(0, 30))

    useEffect(() => {
        setAllHeroes(heroesData)
    }, [heroesData, setAllHeroes, filter, filteredHeroes, items])

    useEffect(() => {
        selectedHeroes.length === 2
            ? setOpenModal(true)
            : null
    }, [selectedHeroes, filteredHeroes, filter])

    const loadMoreItems = (page: number) => {
        const itemsPerPage = 10;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newItems = heroesData.slice(startIndex, endIndex);

        if (newItems.length > 0 && filteredHeroes.length === 0) {
            setItems([...items, ...newItems]);
        } else {
            setHasMore(false)
        }
    };


    return (
        <section className={styles['hero-cards-container']}>
            <InfiniteScroll
                className={styles['hero-cards-wrapper']}
                pageStart={0}
                loadMore={loadMoreItems}
                hasMore={hasMore}
            >
                {
                    filteredHeroes.length > 0
                        ? filteredHeroes.map((el) => <HeroCard key={el.id} heroData={el} />)
                        : items.map((el) => <HeroCard key={el.id} heroData={el} />)
                }
                <ModalFightResult openModal={openModal} setOpenModal={setOpenModal} />
            </InfiniteScroll>

        </section>
    )
}

export default HeroCardsContainer