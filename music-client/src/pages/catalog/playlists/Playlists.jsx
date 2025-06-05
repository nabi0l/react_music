import React  from "react";
import HeroPlaylist from "./HeroPlaylist";
import CuratedPlaylists from "./CuratedPlaylist";
import ShareablePlaylist from "./SharedPlaylist";


const Playlists = () => {
    return ( 
        <div className="min-h-screen">
            {/**hero section */}
            <div className="hero-section">
                <HeroPlaylist/>
            </div>
            {/**curated playlist */}
            <div className='curated-playlist'>
                <CuratedPlaylists/>
            </div>

            {/**shareable */}
            <div className='shareable'>
                <ShareablePlaylist/>
            </div>
            {/** */}
        </div>
     );
}
 
export default Playlists;