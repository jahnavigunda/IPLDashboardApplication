import { React } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
  return (
    <div className="TeamPage">
      <h1>Team Name</h1>
      <h3>Latest Matches</h3>
      <MatchDetailCard />
      <MatchSmallCard />
      <MatchSmallCard />
      <MatchSmallCard />


    </div>
  );
}


