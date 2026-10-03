package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.PropertyHistoryDB.PropertyHistory;
import com.finders.finders_backend.repository.PropertyHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/property-history")
public class PropertyHistoryController {

    private final PropertyHistoryRepository propertyHistoryRepository;

    @Autowired
    public PropertyHistoryController(PropertyHistoryRepository propertyHistoryRepository) {
        this.propertyHistoryRepository = propertyHistoryRepository;
    }

    @GetMapping
    public List<PropertyHistory> getAllPropertyHistory() {
        return propertyHistoryRepository.findAll();
    }

    @PostMapping
    public PropertyHistory createPropertyHistory(@RequestBody PropertyHistory propertyHistory) {
        return propertyHistoryRepository.save(propertyHistory);
    }
}