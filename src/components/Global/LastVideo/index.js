import React from 'react';

import {
    Container,
    IFrame,
} from './styled';

const LastVideo = () => {
    return (
        <Container>
            <IFrame src="https://www.youtube.com/embed/JUxElR51Udk?controls=0&autoplay=0&rel=0&showinfo=0&autohide=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </Container>
    );
}

export default LastVideo;