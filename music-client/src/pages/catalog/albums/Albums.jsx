import React from 'react';
import AlbumHero from './AlbumHero';
import TrackList from './TrackList';
import AlbumGrid from './AlbumGrid';
import FeaturedAlbum from './FeaturedAlbum';
import NewRelease from './NewRelease';
import ReviewsAndCTA from './ReviewsAndCta';

const Albums = () => {
    return (
        <div className='min-h-screen'>
            {/**hero section */}
            <div className='hero-section'>
                <AlbumHero/>
            </div>
            
            {/**categorizng albums  artists, chronological, genre-based, tagging*/}
            {/**track list */}
            <div className='track-list'>
            <TrackList/>
            </div>
            <div className='album'>
                <AlbumGrid/>
            </div>
            {/**album description */}
            {/**related albums */}
            <div className='new-release'>
                <NewRelease/>
            </div>
            <div className='featured-album'>
                <FeaturedAlbum/>
            </div>
            {/**media section */}
            {/**related media */}
            {/**artist section */}
            {/**purchase */}
            {/**reviews */}
            <div className='review'>
                <ReviewsAndCTA/>
            </div>

        </div>
    );
};

export default Albums;