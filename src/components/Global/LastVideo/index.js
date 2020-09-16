import React from 'react';

import {
    Container,
    IFrame,
} from './styled';

const LastVideo = () => {
    return (
        <Container>
            <IFrame src="https://www.youtube.com/embed/JUxElR51Udk?controls=0&autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </Container>
    );
}

export default LastVideo;