import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';

import {
    Container,
    Offset,
    HomeLink,
    HamburgerButton,
    HamburgerIcon,
    ListContainer,
    ListItem
} from './styled';

const Navigation = () => {
    
    const [ isActive, setIsActive ] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive)
    }

    return (
        <Fragment>
            <Container>
                <HomeLink>
                    <Link to="/">
                        Kyle McDonald
                    </Link>
                </HomeLink>
                <HamburgerButton
                    onClick={handleHamburgerClick}
                    isActive={isActive}
                >
                    <HamburgerIcon
                        isActive={isActive}
                    >
                        <span/>
                    </HamburgerIcon>
                </HamburgerButton>
                <ListContainer
                    isActive={isActive}
                >
                    <ListItem>
                        <Link to="/">
                            Uses
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">
                            Posts
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">
                            Contact
                        </Link>
                    </ListItem>
                </ListContainer>
            </Container>
            <Offset/>
        </Fragment>
    );
}

export default Navigation;
