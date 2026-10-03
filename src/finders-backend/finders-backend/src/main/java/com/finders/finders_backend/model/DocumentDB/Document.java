package com.finders.finders_backend.model.DocumentDB;

import com.finders.finders_backend.model.AgentProfilesDB.VerificationStatus;
//import com.finders.finders_backend.model.PropertyHistoryDB.EventType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "documents")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "property_id")
    private Long propertyId;

    @Column(name = "agent_id")
    private Long agentId;

    @Column(name = "uploaded_by_id", nullable = false)
    private Long uploadedById;

    @Enumerated(EnumType.STRING)
    @Column(name = "document_type", nullable = false)
    private DocumentType documentType;

    @Column(name = "file_url", nullable = false, length = 500)
    private String fileUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "verification_status")
    private VerificationStatus verificationStatus = VerificationStatus.PENDING;


    @Column(name = "uploaded_at", insertable = false, updatable = true)
    private LocalDateTime uploadedAt;

    public Document() {
    }
}