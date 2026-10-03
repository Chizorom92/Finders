package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.PropertyDB.Property;
import com.finders.finders_backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    private final PropertyRepository propertyRepository;

    @Autowired
    public PropertyController(PropertyRepository propertyRepository) {

        this.propertyRepository = propertyRepository;
    }

    @GetMapping
    public List<Property> getAllProperties() {

        return propertyRepository.findAll();
    }

    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

}