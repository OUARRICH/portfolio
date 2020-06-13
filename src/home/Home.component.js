import React from 'react';
import { withMedia } from 'react-media-query-hoc';

import './Home.component.css';
import desktopImage from '../assets/images/desktop.jpg';
import mobileImage from '../assets/images/mobile.jpg';

const Home = ({ media }) => <div className="Home">
    <div className="Home__description">
        <h2>HI! Je suis Said</h2>
        <h4>Je suis expert JavaScript</h4>    
    </div>
    <img 
        src={media.mobile ? mobileImage : desktopImage} 
        className="Home__background"
        alt="profile image"
    />
</div>

export default withMedia(Home);
