package com.finders.finders_backend.model.VerificationDB;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//import org.hibernate.annotations.EventType;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "verification_checks")
public class Verification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "property_id")
    private Long propertyId;

    @Column(name = "address_checked", nullable = false)
    private boolean address;

    @Column(name = "property_existence_checked", nullable = false)
    private boolean propertyExistenceChecked;

    @Column(name = "agent_verified", nullable = false)
    private boolean agentVerified;

    @Column(name = "owner_authorization_checked", nullable = false)
    private boolean ownerAuthorizationChecked;

    @Column(name = "listing_reviewed", nullable = false)
    private boolean listingReviewed;

    @Column(name = "checked_by_admin_id")
    private Long checkedByAdminId;

    @Column(name = "checked_at", insertable = false, updatable = true)
    private LocalDateTime checkedAt;

    public Verification() {
    }
}