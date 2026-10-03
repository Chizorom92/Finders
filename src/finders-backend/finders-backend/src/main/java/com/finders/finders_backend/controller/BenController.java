package com.finders.finders_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BenController {

    @GetMapping("/")
    public String home() {
        return "Keep Calm! Finders API is running";
    }
}