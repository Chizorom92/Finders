package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.VerificationDB.Verification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationRepository extends JpaRepository<Verification, Long> {
}