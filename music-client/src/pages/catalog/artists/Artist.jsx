import React from 'react';
import HeroArtist from './HeroArtist';
import FeaturedMusic from './FeaturedMusic';
import TopSongs from './TopSongs';
import CollaborationCredits from './CollaborationCredits';
import FeaturedArtists from './FeaturedArtists';
import SocialProof from './SocialProof';
import EmbeddedVideos from './EmbeddedVideos';
import DiscographyGrid from './DiscographyGrid';
import ShopMusic from "./ShopMusic";

const Artist = () => {
    return (
      <div className="min-h-screen">
        {/**artist info/ hero section */}
        <div className='hero'>
            <HeroArtist/>
        </div>

        {/**featured music player*/}
        <div className='featured-music'>
            <FeaturedMusic/>
        </div>

        {/** top songs */}
        <div className='top-songs'>
            <TopSongs/>
        </div>

        {/**discography grid */}
        
        {/**music description */}
        {/**shop music  */}
        <div className='shop-music'>
            <ShopMusic/>
        </div>
        
        {/**social proof */}
        <div className='social-proof'>
            <SocialProof/>
        </div>
        {/**collaboration credits */}
        <div className='collaboration'>
            <CollaborationCredits/>
        </div>
        {/**tour dates integration */}
        {/**social media links and embedded videos */}
        {/* <div className='embedded-videos'>
            <EmbeddedVideos/>
        </div> */}

        {/**featured artists */}
        <div className='featured-artists'>
            <FeaturedArtists/>
        </div>
      </div>
    );
};

export default Artist;