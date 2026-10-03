package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.UserDB.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}