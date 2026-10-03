package com.finders.finders_backend.model.ReviewsDB;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "agent_id", nullable = false)
    private Long agentid;

    @Column(name = "reviewer_id", nullable = false)
    private long reviewer_id;

    @Column (name = "rating", nullable = false)
    private Integer rating;

    @Column(name = "comment", nullable = false)
    private String comment;


    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public Reviews() {
    }
}