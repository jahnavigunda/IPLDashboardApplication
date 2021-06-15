package com.springboot.ipldashboard.repository;

import com.springboot.ipldashboard.Model.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.CrudRepositoryExtensionsKt;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends CrudRepository<Team,Long> {
    Team findByTeamName(String teamName);
}
