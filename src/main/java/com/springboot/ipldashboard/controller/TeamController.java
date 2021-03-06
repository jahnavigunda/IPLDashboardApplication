package com.springboot.ipldashboard.controller;

import com.springboot.ipldashboard.Model.Team;
import com.springboot.ipldashboard.repository.MatchRepository;
import com.springboot.ipldashboard.repository.TeamRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
       Team team = this.teamRepository.findByTeamName(teamName);
       team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, teamName, 4));

        return team;
    }
}
