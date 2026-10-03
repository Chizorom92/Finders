package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.AreasDB.Areas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AreasRepository extends JpaRepository<Areas, Long> {
}