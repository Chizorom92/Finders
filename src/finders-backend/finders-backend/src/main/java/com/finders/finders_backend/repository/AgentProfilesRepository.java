package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.AgentProfilesDB.AgentProfiles;
import com.finders.finders_backend.model.AgentProfilesDB.AgentProfiles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentProfilesRepository extends JpaRepository<AgentProfiles, Long> {
}