import React from 'react';

import {
    Heading,
    SubHeading,
    Body
} from '../../../utils/fonts';

import {
    Section,
    FeatureList,
    Feature1,
    Icon1,
    Feature2,
    Icon2,
    IconContainer,
} from './styled';

const ProductBenefit = () => {
    return (
        <Section>
            <Heading>Più di 30 soluzioni tra:</Heading>
            <FeatureList>
                <Feature1>
                    <IconContainer>
                        <Icon1/>
                    </IconContainer>
                    <SubHeading>
                        Problemi hardware
                    </SubHeading>
                    <Body>
                        Motori, ESC, riceventi e VTX
                    </Body>
                </Feature1>

                <Feature2>
                <IconContainer>
                        <Icon2/>
                    </IconContainer>
                    <SubHeading>
                        Problemi di Betaflight
                    </SubHeading>
                    <Body>
                        Il drone non si arma o vola male
                    </Body>
                </Feature2>


            </FeatureList>
        </Section>
    );
}

export default ProductBenefit;
