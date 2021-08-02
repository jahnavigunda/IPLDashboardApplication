import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

   const [team, setTeam] = useState({matches: []});
   const { teamName } = useParams();
//this executes when component loads.
//here, fetchMatches is async function which calls the rest api using fetch fn.
 //await - as fetch is returning some response.
 //use @CrossOrigin in controller class to allow url to access the cross domains.
   useEffect(
       () => {
       const fetchMatches = async() => {
            const response = await fetch(`http://localhost:8081/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data);
       };
       fetchMatches();
       }, []
   );
   if(!team || !team.teamName){
     return <h1>Team Not Found</h1>
   }
  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallCard  match={match} />)}

    </div>
  );
}



