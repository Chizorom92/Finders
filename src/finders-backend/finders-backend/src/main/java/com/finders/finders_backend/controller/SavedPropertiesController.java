package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.SavedPropertiesDB.SavedProperties;
import com.finders.finders_backend.repository.SavedPropertiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/saved-properties")
public class SavedPropertiesController {

    private final SavedPropertiesRepository savedPropertiesRepository;

    @Autowired
    public SavedPropertiesController(SavedPropertiesRepository savedPropertiesRepository) {
        this.savedPropertiesRepository = savedPropertiesRepository;
    }

    @GetMapping
    public List<SavedProperties> getAllSavedProperties() {
        return savedPropertiesRepository.findAll();
    }

    @PostMapping
    public SavedProperties createSavedProperties(@RequestBody SavedProperties savedProperties) {
        return savedPropertiesRepository.save(savedProperties);
    }
}