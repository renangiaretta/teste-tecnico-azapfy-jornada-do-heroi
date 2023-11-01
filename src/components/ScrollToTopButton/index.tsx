import { Button } from '@mui/material';
import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import styles from './styles.module.sass'
import { FaChevronUp } from 'react-icons/fa';


const ScrollToTopButton = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div>
            <Button className={styles['scroll-btn']} onClick={scrollToTop}>
                <FaChevronUp />
            </Button>
        </div>
    );
};

export default ScrollToTopButton;
