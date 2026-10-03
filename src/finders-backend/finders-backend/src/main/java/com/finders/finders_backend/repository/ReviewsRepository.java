package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.ReviewsDB.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Long> {
}