package com.finders.finders_backend.controller;

import com.finders.finders_backend.model.ReviewsDB.Reviews;
import com.finders.finders_backend.repository.ReviewsRepository;
import com.finders.finders_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewsController {

    private final ReviewsRepository reviewsRepository;

    @Autowired
    public ReviewsController(ReviewsRepository reviewsRepository) {

        this.reviewsRepository= reviewsRepository;
    }

    @GetMapping
    public List<Reviews> getAllUsers() {
        return reviewsRepository.findAll();
    }

    @PostMapping
    public Reviews createReviews(@RequestBody Reviews reviews) {
        return reviewsRepository.save(reviews);
    }
}