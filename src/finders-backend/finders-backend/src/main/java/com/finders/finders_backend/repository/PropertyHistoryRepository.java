package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.PropertyHistoryDB.PropertyHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyHistoryRepository extends JpaRepository<PropertyHistory, Long> {
}