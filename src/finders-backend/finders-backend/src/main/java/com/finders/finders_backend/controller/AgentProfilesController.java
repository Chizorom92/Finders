package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.AgentProfilesDB.AgentProfiles;
import com.finders.finders_backend.repository.AgentProfilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
public class AgentProfilesController {

    private final AgentProfilesRepository agentProfilesRepository;

    @Autowired
    public AgentProfilesController(AgentProfilesRepository agentProfilesRepository) {
        this.agentProfilesRepository = agentProfilesRepository;
    }

    @GetMapping
    public List<AgentProfiles> getAllAgents() {
        return agentProfilesRepository.findAll();
    }

    @PostMapping
    public  AgentProfiles createAgent(@RequestBody AgentProfiles agentProfiles) {
        return agentProfilesRepository.save(agentProfiles);
    }
}