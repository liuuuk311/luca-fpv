import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'gatsby';

import {
    Container,
    ContentContainer,
    HomeLink,
    HamburgerButton,
    HamburgerIcon,
    ListContainer,
    ListItem
} from './styled';

const Navigation = ( ) => {
    
    const [ isActive, setIsActive ] = useState(false);
    const [ isSticky, setIsSticky ] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', handleSticky);

        return () => {
            document.removeEventListener('scroll', handleSticky);
        }
    }, [])

    const handleSticky = () => {
        const scrollPosition = window.scrollY;

        if(scrollPosition > 50){
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }

    const handleHamburgerClick = () => {
        setIsActive(!isActive)
    }

    return (
        <Fragment>
            <Container>
                <ContentContainer
                    isSticky={isSticky}
                    isActive={isActive}
                >
                    <HomeLink>
                        <Link to="/">
                            Luca FPV
                        </Link>
                    </HomeLink>
                    <HamburgerButton
                        onClick={handleHamburgerClick}
                        isActive={isActive}
                        aria-label="Hamburger Menu"
                    >
                        <HamburgerIcon
                            isActive={isActive}
                        >
                            <span/>
                        </HamburgerIcon>
                    </HamburgerButton>
                </ContentContainer>
                <ListContainer
                    isActive={isActive}
                >
                    {}
                    <ListItem>
                        <Link to="/offerte-e-coupon">
                            Offerte e Coupon
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/tutorial">
                            Tutorial
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/news">
                            News
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/articoli">
                            Tutti gli Articoli
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/contattami">
                            Contattami
                        </Link>
                    </ListItem>
                </ListContainer>
            </Container>
        </Fragment>
    );
}

export default Navigation;
