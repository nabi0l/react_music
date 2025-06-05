import React from 'react';
import HeroGenre from './HeroGenre';
import GenreCard from './GenreCard';
import FeaturedSongAlbum from './FeaturedSongAlbum';
import CuratedPlaylists from './CuratedPLaylists';
import BestSeller from './BestSeller';
import EmergingArtist from './EmergingArtist';
import Recommendation from './Recommendation';
import Filter from './Filter';
import TrendingTopics from './TrendingTopics';

const Genre = () => {
    return (
        <div className='min-h-screen'>
            {/**hero section */}
            <div className='hero'>
                <HeroGenre/>
            </div>

            {/**genre cards */}
            <div className='genre'>
                <GenreCard/>
            </div>

            {/**trending topics */}
            <div className='trending-topics'>
                <TrendingTopics/>
            </div>
            {/**feature songs or albums per genre */}
            <div className='featured'>
                <FeaturedSongAlbum/>
            </div>

            {/**filter  */}
            <div className='filter'>
                <Filter/>
            </div>

            {/**curated playlist */}
            <div className='curated'>
                <CuratedPlaylists/>
            </div>
            
            {/**subgenre navigation */}
            {/**mood activity filters */}

            {/**bestseller highlights */}
            <div className='best-seller'>
                <BestSeller/>
            </div>

            {/**emerging artist spotlight with specific genre */}
            <div className='emerging'>
                <EmergingArtist/>
            </div>

            {/**recommendation */}
            <div className='recommendation'>
                <Recommendation/>
            </div>

        </div>
    );
};

export default Genre;