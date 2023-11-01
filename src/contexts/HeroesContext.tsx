'use client'
import { IHeroCardProps } from "@/interfaces/heroes";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"


interface HeroesProviderProps {
    children: ReactNode;
}

interface HeroesProviderValues {
    // selectedHero1: IHeroCardProps
    // setSelectedHero1: Dispatch<SetStateAction<IHeroCardProps>>
    // selectedHero2: IHeroCardProps
    // setSelectedHero2: Dispatch<SetStateAction<IHeroCardProps>>
    selectedHeroes: IHeroCardProps[]
    setSelectedHeroes: Dispatch<SetStateAction<IHeroCardProps[]>>
}

export const HeroesContext = createContext<HeroesProviderValues>({} as HeroesProviderValues)

export const HeroesProvider = ({ children }: HeroesProviderProps) => {
    const [selectedHero1, setSelectedHero1] = useState<IHeroCardProps>({} as IHeroCardProps)
    const [selectedHero2, setSelectedHero2] = useState<IHeroCardProps>({} as IHeroCardProps)
    const [selectedHeroes, setSelectedHeroes] = useState<IHeroCardProps[]>([] as IHeroCardProps[])

    return (
        <HeroesContext.Provider value={{
            // selectedHero1,
            // setSelectedHero1,
            // selectedHero2,
            // setSelectedHero2
            selectedHeroes,
            setSelectedHeroes
        }}>
            {children}
        </HeroesContext.Provider>
    )
}