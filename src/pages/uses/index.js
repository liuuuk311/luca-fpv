import React from 'react';
import Helmet from 'react-helmet';

import {
    Default
} from '../../components';

import {
    Container,
    Heading,
    SubHeading,
    Body
} from '../../components/PageStyles/UsesStyles';

const Uses = ({ location }) => {
    return (
        <Default location={location}>
            <Helmet>
                <title>Uses | Kyle McDonald</title>
                <meta name="description" content="Hardware and Software that Kyle McDonald uses"/>
            </Helmet>
            <Container>
                <Heading>
                    Uses
                </Heading>
                <Body>
                    A list of hardware and software I use everyday
                </Body>

                <SubHeading>
                    Editor + Terminal
                </SubHeading>

                <Body>
                    <ul>
                        <li>IDE: <a target="_blank" rel="noopener" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                        <ul>
                            <li>Theme: <a target="_blank" rel="noopener" href="https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Brogrammer">Brogrammer</a> (lol)</li>
                            <li>Font: <a target="_blank" rel="noopener" href="https://github.com/tonsky/FiraCode">Fira Code</a></li>
                        </ul>
                        <li>Terminal: <a target="_blank" rel="noopener" href="https://iterm2.com/">iTerm2</a> with <a target="_blank" rel="noopener" href="https://ohmyz.sh/">Oh My ZSH!</a></li>
                    </ul>
                

                    <SubHeading>
                        Machine + Setup
                    </SubHeading>

                        <ul>
                        <li>Laptop: <a target="_blank" rel="noopener" href="https://amzn.to/38nuRhV">2018 &ndash; 15" Macbook Pro - Space Gray</a></li>
                        <li>Keyboard: <a target="_blank" rel="noopener" href="https://amzn.to/31OZ7jc">Keychron K2 Mechanical Keyboard</a></li>
                        <li>Trackpad (No mouse): <a target="_blank" rel="noopener" href="https://amzn.to/39yeHTh">Apple Magic Trackpad 2 - Space Gray</a></li>
                        <li>Phone: <a target="_blank" rel="noopener" href="https://amzn.to/2SoxmuV">iPhone X - Space Gray - 256 GB</a></li>
                        <li>Headphones: <a target="_blank" rel="noopener" href="https://amzn.to/2SnREo8">Air Pods (1st Gen)</a> for commuting, and <a target="_blank" rel="noopener" href="https://amzn.to/2uInSBz">Bose QC35 II - Black</a> for work</li>
                    </ul>


                    <SubHeading>
                        Desktop Apps
                    </SubHeading>

                     <ul>
                        <li>Web Browser: <a target="_blank" rel="noopener" href="https://www.google.com/chrome/">Google Chrome</a></li>
                        <li>Window Managment: <a target="_blank" rel="noopener" href="https://www.spectacleapp.com/">Spectacle</a></li>
                        <li>Note Taking: combination of <a target="_blank" rel="noopener" href="https://notion.so">Notion</a> and <a target="_blank" rel="noopener" href="https://roamresearch.com/">Roam</a></li>
                        <li>Music: <a target="_blank" rel="noopener" href="https://www.spotify.com/">Spotify</a> for jamming out, <a target="_blank" rel="noopener" href="https://www.endel.io/">Endel</a> for deep work</li>
                    </ul>

                    <br/>

                    Note: This is not a complete list of all things I use, but it is a nice overview of what I use frequently.
                </Body>
            </Container>
        </Default>
    );
}

export default Uses;
