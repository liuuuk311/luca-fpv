import React from 'react';

import {
    Section,
    ProductBenefitGroup,
    TagLine1,
    Image1,
    TagLine2,
    Image2,
} from './styled';

const ProductBenefit = () => {
    return (
        <Section>
            <ProductBenefitGroup>
                <TagLine1>
                    Scritta completamente in Italiano
                </TagLine1>
                <Image1/>
                <TagLine2>
                    Non perdere tempo e torna a volare
                </TagLine2>
                <Image2/>
            </ProductBenefitGroup>
        </Section>
    );
}

export default ProductBenefit;
