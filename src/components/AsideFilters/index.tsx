'use client'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.sass';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { HeroesContext } from '@/contexts/HeroesContext';

const AsideFilters = () => {
    const { setFilteredHeroes, allHeroes } = useContext(HeroesContext);
    const [selectedAlignment, setSelectedAlignment] = useState('All');
    const [selectedGender, setSelectedGender] = useState('All');

    const alignments = {
        All: 'Todos',
        good: 'Forças do bem',
        bad: 'Forças do mal',
        neutral: 'Neutros',
        '-': 'Indefinido',
    };
    const genders = {
        All: 'Todos',
        Male: 'Masculino',
        Female: 'Feminino',
        '-': 'Indefinido',
    };

    const handleFilters = (alignment: string, gender: string) => {
        setSelectedAlignment(alignment);
        setSelectedGender(gender);

        if (alignment === 'All' && gender === 'All') {
            setFilteredHeroes(allHeroes);
        } else {
            const filteredHeroes = allHeroes.filter((hero) => {
                return (
                    (alignment === 'All' || hero.biography.alignment === alignment) &&
                    (gender === 'All' || hero.appearance.gender === gender)
                );
            });
            setFilteredHeroes(filteredHeroes);
        }
    };

    return (
        <aside className={styles['aside-filters-container']}>
            <h2>Filtros</h2>
            <Accordion
                className={styles['aside-filters-accordion-container']}
                sx={{ bgcolor: '#FFD700' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={styles['aside-filters-accordion-title']}>Orientação</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles['aside-filters-accordion-title']}>
                        {Object.entries(alignments).map(([key, value], index) =>
                            <Button
                                onClick={() => handleFilters(key, selectedGender)}
                                className={selectedAlignment === key ? styles['selected'] : styles['btn']}
                                key={index}
                            >
                                {value}
                            </Button>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
            className={styles['aside-filters-accordion-container']}
                sx={{ bgcolor: '#FFD700' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles['aside-filters-accordion-title']}>Gênero</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {Object.entries(genders).map(([key, value], index) =>
                            <Button
                                onClick={() => handleFilters(selectedAlignment, key)}
                                className={selectedGender === key ? styles['selected'] : styles['btn']}
                                key={index}
                            >
                                {value}
                            </Button>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </aside>
    );
};

export default AsideFilters;