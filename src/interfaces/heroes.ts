import { Dispatch, SetStateAction } from "react";

export interface IHeroCardProps {
    id: number;
    name: string;
    slug: string;
    powerstats: IPowerStats;
    appearance: {
        gender: string;
        race: string;
        height: string[];
        weight: string[];
        eyeColor: string;
        hairColor: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}

export interface IPowerStats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}


export interface IModalFightResultProps {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface IModalFightAttributeProps<obj> {
    attribute: keyof obj;
    fighter1: IPowerStats;
    fighter2: IPowerStats;
}