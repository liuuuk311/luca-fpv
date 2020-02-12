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
                        Gear
                    </SubHeading>
                    <ul>
                        <li>Backpack: <a target="_blank" rel="noopener" href="https://www.mountainsteals.com/product/topo-designs-rover-pack_10421500">Topo Rover Pack (Olive/Navy)</a></li>
                        <li>Watch:</li>
                        <ul>
                            <li>Dumb Watch: <a target="_blank" rel="noopener" href="https://amzn.to/37l8gl0">Vincero Chrono S</a></li>
                            <li>Smart Watch: <a target="_blank" rel="noopener" href="https://amzn.to/2w7Gprj">Apple Watch (Space Gray)</a></li>
                        </ul>
                        <li>Cup: weird, but I love this thing... <a target="_blank" rel="noopener" href="https://amzn.to/39vQcWJ">Yeti Rambler</a></li>
                    </ul>

                    <SubHeading>
                        Smart Home
                    </SubHeading>
                    <ul>
                        <li>Soundbar: <a target="_blank" rel="noopener" href="https://amzn.to/2SoL5BX">Sonos Beam</a></li>
                        <li>Other Speakers: <a target="_blank" rel="noopener" href="https://amzn.to/38mL0o1">IKEA Symfonisk</a> paired with this handy dandy gadget: <a target="_blank" rel="noopener" href="https://amzn.to/2SJQ4fk">IKEA symfonisk Sound Remote</a></li>
                    </ul>
                    <SubHeading>
                        Desktop Apps
                    </SubHeading>
                    <ul>
                        <li>Web Browser: <a target="_blank" rel="noopener" href="https://www.google.com/chrome/">Google Chrome</a></li>
                        <li>Window Managment: <a target="_blank" rel="noopener" href="https://www.spectacleapp.com/">Spectacle</a></li>
                        <li>Notes: combination of <a target="_blank" rel="noopener" href="https://notion.so">Notion</a> and <a target="_blank" rel="noopener" href="https://roamresearch.com/">Roam</a></li>
                    </ul>

                    <SubHeading>
                        Mobile Apps
                    </SubHeading>
                    (Only the interesting ones)<br/><br/>
                    <ul>
                        <li>Music: <a target="_blank" rel="noopener" href="https://www.spotify.com/">Spotify</a> for jamming out, <a target="_blank" rel="noopener" href="https://www.endel.io/">Endel</a> for deep work</li>
                        <li>Spending Tracker: <a target="_blank" rel="noopener" href="https://emma-app.com">Emma</a> </li>
                        <li>Food Delivery (Shameless Plug): <a target="_blank" rel="noopener" href="https://apps.apple.com/us/app/foxtrot-delivery-market/id680745992">Foxtrot</a></li>
                    </ul>

                    <br/>

                    Note: This is not a complete list of all things I use, but it is a nice overview of what I use frequently.
                </Body>
            </Container>
        </Default>
    );
}

export default Uses;
