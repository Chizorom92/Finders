package com.finders.finders_backend.repository;

import com.finders.finders_backend.model.MessageDB.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}