import React from 'react';

import {
    Container,
    Heading,
    TagList,
    TagItem,
} from './styled';

import { Link } from 'gatsby';
const HomeNewsletter = () => {
    return (
        <Container>
            <TagList>
                <TagItem><Link><Heading>Principiante</Heading></Link></TagItem>
                <TagItem><Link><Heading>Principiante</Heading></Link></TagItem>
                <TagItem><Link><Heading>Principiante</Heading></Link></TagItem>
            </TagList>
        </Container>
    );
}

export default HomeNewsletter;
