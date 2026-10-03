package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.PropertyDB.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
}