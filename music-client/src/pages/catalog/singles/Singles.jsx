import ArtistsDiversity from "./ArtistDiversity";
import SearchSection from "./SearchSection";
import SingleHero from "./SingleHero";
import TrackGrid from "./TrackGrid";
import TrendingSongs from "./TrendingSongs";

const Singles = () => {
    return ( 
        <div className="min-h-screen">
            {/**hero section */}
            <div className='hero'>
                <SingleHero/>
            </div>
            <div className='search'>
                <SearchSection/>
            </div>

            {/**main content track grid with sorting */}
            <div className='track-grid'>
                <TrackGrid/>
            </div>

            {/** artists diversity*/}
            <div className='artist-diversity'>
                <ArtistsDiversity/>
            </div>

            {/**trending songs with tags of social media tiktok or instagram */}
            <div className='trending-songs'>
                <TrendingSongs/>
            </div>
        </div>
     );
}
 
export default Singles;