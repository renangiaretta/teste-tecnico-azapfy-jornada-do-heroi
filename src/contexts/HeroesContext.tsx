'use client'
import { IHeroCardProps } from "@/interfaces/heroes";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"


interface HeroesProviderProps {
    children: ReactNode;
}

interface HeroesProviderValues {
    selectedHeroes: IHeroCardProps[]
    setSelectedHeroes: Dispatch<SetStateAction<IHeroCardProps[]>>
    allHeroes: IHeroCardProps[]
    setAllHeroes: Dispatch<SetStateAction<IHeroCardProps[]>>
    filter: string
    setFilter: Dispatch<SetStateAction<string>>
    filteredHeroes: IHeroCardProps[]
    setFilteredHeroes: Dispatch<SetStateAction<IHeroCardProps[]>>
}

export const HeroesContext = createContext<HeroesProviderValues>({} as HeroesProviderValues)

export const HeroesProvider = ({ children }: HeroesProviderProps) => {
    const [selectedHeroes, setSelectedHeroes] = useState<IHeroCardProps[]>([] as IHeroCardProps[])
    const [allHeroes, setAllHeroes] = useState<IHeroCardProps[]>([])
    const [filter, setFilter] = useState<string>('')
    const [filteredHeroes, setFilteredHeroes] = useState<IHeroCardProps[]>([])

    
    return (
        <HeroesContext.Provider value={{
            selectedHeroes,
            setSelectedHeroes,
            allHeroes,
            setAllHeroes,
            filter,
            setFilter,
            filteredHeroes,
            setFilteredHeroes,
        }}>
            {children}
        </HeroesContext.Provider>
    )
}