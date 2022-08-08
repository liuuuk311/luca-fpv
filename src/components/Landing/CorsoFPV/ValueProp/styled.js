import styled from 'styled-components';
import { colors, media, fonts } from '../../../../utils';

export const Section = styled.section`
    display: block
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    row-gap: 0.25em;
    margin-bottom: 2em;
    padding: 2em;
    max-width: 75rem;
    margin: 0 auto;

    ${media.medium`
        margin: 2rem auto 3rem auto;
    `}
`;

export const MainMessage = styled.div`
    grid-column: span 8;
    grid-row: span 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
        margin-top: 0;
        padding-right: 2rem;
    }

    ${media.medium`
        align-items: flex-start;
        text-align: left;
        grid-column: span 4;
        grid-row: span 8;
        button {
            margin: 0;
          }
    `}
`;

export const Heading = styled(fonts.Heading)`
    color: ${colors.black};
`;

export const SubHeading = styled(fonts.SubSubHeading)`
    font-size: 1.25rem;
    font-weight: 550;
`;

export const Paragraph = styled(fonts.Body)`
    font-size: 18px;
    font-weight: 400;
`;

export const MainPhoto = styled.div`
    grid-column: span 8;
    grid-row: span 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/landing/corso-fpv/corso-1.jpg");
    border-radius: 1.25rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 100%;
    height: 20rem;
    padding: 0;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;

  ${media.medium`
        grid-column: span 4;
        grid-row: span 8;
    `}

    ${media.small`
        background-position: 50% 100%;
    `}
`;