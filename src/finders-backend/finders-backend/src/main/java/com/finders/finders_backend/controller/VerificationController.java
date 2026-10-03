package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.VerificationDB.Verification;
import com.finders.finders_backend.repository.VerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/verification")
public class VerificationController {

    private final VerificationRepository verificationRepository;

    @Autowired
    public VerificationController(VerificationRepository verificationRepository) {
        this.verificationRepository = verificationRepository;
    }

    @GetMapping
    public List<Verification> getAllVerification() {
        return verificationRepository.findAll();
    }

    @PostMapping
    public Verification createVerification(@RequestBody Verification verification) {
        return verificationRepository.save(verification);
    }
}