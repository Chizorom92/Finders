package com.finders.finders_backend.model.PropertyHistoryDB;

import com.finders.finders_backend.model.PropertyHistoryDB.EventType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "property_history")
public class PropertyHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "property_id", nullable = false)
    private long property_id;

    @Enumerated(EnumType.STRING)
    @Column(name = "event_type", nullable = false)
    private EventType eventType;

    @Column (name = "previous_value", nullable = false)
    private String previousValue;

    @Column (name = "new_value", nullable = false)
    private String newValue;

    @Column(name = "occurred_at", insertable = false, updatable = false)
    private LocalDateTime occurredAt;

    public PropertyHistory() {
    }
}