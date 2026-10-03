package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.ReportDB.Report;
import com.finders.finders_backend.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportRepository reportRepository;

    @Autowired
    public ReportController(ReportRepository reportRepository) {

        this.reportRepository= reportRepository;
    }

    @GetMapping
    public List<Report> getAllUsers() {
        return reportRepository.findAll();
    }

    @PostMapping
    public Report createReport(@RequestBody Report report) {
        return reportRepository.save(report);
    }
}