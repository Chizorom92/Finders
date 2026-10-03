package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.DocumentDB.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
}