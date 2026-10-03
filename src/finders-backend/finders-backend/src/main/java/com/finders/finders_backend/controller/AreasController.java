package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.AreasDB.Areas;
import com.finders.finders_backend.repository.AreasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/areas")
public class AreasController {

    private final AreasRepository areasRepository;

    @Autowired
    public AreasController(AreasRepository areasRepository) {
        this.areasRepository = areasRepository;
    }

    @GetMapping
    public List<Areas> getAllAgents() {
        return areasRepository.findAll();
    }

    @PostMapping
    public  Areas createAgent(@RequestBody Areas areas) {
        return areasRepository.save(areas);
    }
}