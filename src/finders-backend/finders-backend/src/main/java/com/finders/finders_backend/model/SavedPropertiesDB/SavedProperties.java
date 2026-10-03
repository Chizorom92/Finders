package com.finders.finders_backend.model.SavedPropertiesDB;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "saved_properties")
public class SavedProperties {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "property_id", nullable = false)
    private Long propertyId;

    @Column(name = "saved_at", insertable = false, updatable = false)
    private LocalDateTime savedAt;

    public SavedProperties() {
    }
}