import React from "react";

import HeroSection from "./HeroSection";
import TrendingNow from "./TrendingNow";
import NewRelease from "./NewRelease";
import FeaturedMusic from "./Featured";
import ChartsPopular from "./ChartsPopular";
import ForYourMood from "./ForYourMood";
import ArtistSpotlight from "./ArtistSpotlight";
import MusicWithMeaning from "./MusicWithMeaning";
import NewsletterSignup from "./NewsletterSignup";
import RateAndReview from "../../components/Shared/reviews/RateAndReview";


const Home = () => {
  return (
    <div className="min-h-screen ">
      {/**Hero */}
      <div className="hero">
        <HeroSection />
      </div>

      {/**search bar + filter */}

      {/**trending now */}
      <div className="trending now ">
        <TrendingNow />
      </div>

      {/**latest singles and albums */}
      <div className="new release">
        <NewRelease />
      </div>

      {/**Features singles with audio previews */}
      <div className="featured-music">
        <FeaturedMusic />
      </div>

      {/**charts & popular picks*/}
      {/* <div className="charts">
        <ChartsPopular />
      </div> */}

      {/**for your sprit / mood */}
      {/* <div className="mood filters">
        <ForYourMood />
      </div> */}

      {/**spotlight on teams / bands with profile links */}
      <div className="spotlight container mx-auto">
        <ArtistSpotlight />
      </div>

      {/**music with meaning */}
      {/* <div className="music meaning">
        <MusicWithMeaning />
      </div> */}

      {/**rate and reviews */}
      {/* <div className="rates">
        <RateAndReview
          averageRating={0}
          reviews={[]}
          context="general"
          contextName="Our Platform"
        />
      </div> */}

      {/*live worship nights / events section*/}
      {/* <div className="events">
        <Events/>
      </div> */}
      {/**shop highlights: merch + music bundles */}

      {/**newsletter signup + social links */}
      <div className="newsletter">
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Home;
