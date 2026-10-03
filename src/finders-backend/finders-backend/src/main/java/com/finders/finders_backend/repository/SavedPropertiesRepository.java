package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.SavedPropertiesDB.SavedProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedPropertiesRepository extends JpaRepository<SavedProperties, Long> {
}