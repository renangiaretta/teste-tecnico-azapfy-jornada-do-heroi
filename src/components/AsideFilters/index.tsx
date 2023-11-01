'use client'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.sass'
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { HeroesContext } from '@/contexts/HeroesContext';

const AsideFilters = () => {
    const { setFilteredHeroes, allHeroes } = useContext(HeroesContext)
    const alignments = {
        good: 'Forças do bem',
        bad: 'Forças do mal',
        neutral: 'Neutra',
        '-': 'Indefinido',
        All: 'Todos',
    }
    const genders = {
        Male: "Masculino",
        Female: "Feminino",
        All: "Todos",
        "-": "Indefinido"
    }
    const [selectedAlignment, setSelectedAlignment] = useState('')
    const [selectedGender, setSelectedGender] = useState('')

    const handleFilters = (selectedAlignment: string, selectedGender: string) => {
        const filteredHeroes = allHeroes.filter((hero) => {
            if (selectedAlignment && selectedGender) {
                return hero.biography.alignment === selectedAlignment && hero.appearance.gender === selectedGender
            } else if (selectedAlignment) {
                return hero.biography.alignment === selectedAlignment
            } else if (selectedGender) {
                return hero.appearance.gender === selectedGender
            }
            return true
        });

        setFilteredHeroes(filteredHeroes);
    };

    return (
        <aside className={styles['aside-filters-container']}>
            <h2>Filtros</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        Orientação
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {Object.entries(alignments).map(([key, value], index) => (
                            <Button
                                onClick={() => handleFilters(key, selectedGender)}
                                className={selectedGender === key ? styles['selected'] : styles['btn']}
                                key={index}
                            >
                                {value}
                            </Button>
                        ))}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        Gênero
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {Object.entries(genders).map(([key, value], index) => (
                            <Button
                                onClick={() => handleFilters(selectedAlignment, key)}
                                className={selectedGender === key ? styles['selected'] : styles['btn']}
                                key={index}
                            >
                                {value}
                            </Button>
                        ))}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </aside>
    )
}

export default AsideFilters