'use client'
import styles from './styles.module.sass'
import { IHeroCardProps } from '@/interfaces/heroes'
import HeroCard from '../HeroCard'
import { useContext, useEffect, useState } from 'react'
import ModalFightResult from '../ModalFightResult'
import { HeroesContext } from '../../contexts/HeroesContext'
import InfiniteScroll from 'react-infinite-scroller'
import ScrollToTopButton from '../ScrollToTopButton'


const HeroCardsContainer = ({ heroesData }: { heroesData: IHeroCardProps[] }) => {
    const { selectedHeroes, filter, filteredHeroes } = useContext(HeroesContext)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const { setAllHeroes } = useContext(HeroesContext)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [items, setItems] = useState<IHeroCardProps[]>([] as IHeroCardProps[])

    useEffect(() => {
        setAllHeroes(heroesData)
    }, [heroesData, setAllHeroes, filter, filteredHeroes, items])

    useEffect(() => {
        selectedHeroes.length === 2
            ? setOpenModal(true)
            : null
    }, [selectedHeroes])

    const loadMoreItems = (page: number) => {
        const itemsPerPage = 10;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        if (filteredHeroes.length === 0) {
            const newItems = heroesData.slice(startIndex, endIndex)
            if (newItems.length > 0) {
                setItems([...items, ...newItems])
            } else {
                setHasMore(false)
            }
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
            <ScrollToTopButton />
        </section>
    )
}

export default HeroCardsContainer