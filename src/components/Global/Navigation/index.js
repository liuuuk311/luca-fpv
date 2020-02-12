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

const Navigation = () => {
    
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
                            Kyle McDonald
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
                    {/* <ListItem>
                        <Link to="/">
                            Uses
                        </Link>
                    </ListItem>*/}
                    <ListItem>
                        <Link to="/posts">
                            Posts
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </ListItem>
                </ListContainer>
            </Container>
        </Fragment>
    );
}

export default Navigation;
