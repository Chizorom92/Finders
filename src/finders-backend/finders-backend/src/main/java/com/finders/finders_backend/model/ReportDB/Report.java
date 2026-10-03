package com.finders.finders_backend.model.ReportDB;

import com.finders.finders_backend.model.PropertyDB.PropertyType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "property_id", nullable = false)
    private long property_id;

    @Column(name = "agent_id", nullable = false)
    private long agent_id;

    @Column(name = "reported_by_id", nullable = false)
    private  long reported_by_id;

    @Enumerated(EnumType.STRING)
    @Column(name = "reason", nullable = false)
    private Reason reason;

    @Column (name = "details", nullable = false)
    private String details;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public Report() {
    }
}