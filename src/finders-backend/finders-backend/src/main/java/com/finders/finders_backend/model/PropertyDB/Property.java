package com.finders.finders_backend.model.PropertyDB;

import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "properties")
public class Property {

    // Getters and setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "agent_id", nullable = false)
    private Long agentId;

    @Column(name = "area_id", nullable = false)
    private Long areaId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, length = 500)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name = "property_type", nullable = false)
    private PropertyType propertyType;

    private Integer bedrooms;

    private Integer bathrooms;

    @Column(precision = 10, scale = 7)
    private BigDecimal latitude;

    @Column(precision = 10, scale = 7)
    private BigDecimal longitude;

    @Column(name = "annual_rent", nullable = false, precision = 12, scale = 2)
    private BigDecimal annualRent;

    @Column(name = "agency_fee", precision = 12, scale = 2)
    private BigDecimal agencyFee = BigDecimal.ZERO;

    @Column(name = "caution_fee", precision = 12, scale = 2)
    private BigDecimal cautionFee = BigDecimal.ZERO;

    @Column(name = "legal_fee", precision = 12, scale = 2)
    private BigDecimal legalFee = BigDecimal.ZERO;

    @Column(name = "inspection_fee", precision = 12, scale = 2)
    private BigDecimal inspectionFee = BigDecimal.ZERO;

    @Column(name = "total_upfront_cost", precision = 12, scale = 2)
    private BigDecimal totalUpfrontCost;

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_level")
    private RiskLevel riskLevel = RiskLevel.HIGH;

    @Enumerated(EnumType.STRING)
    private PropertyStatus status = PropertyStatus.ACTIVE;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public Property() {
    }

    public void setId(Long id) { this.id = id; }

    public void setAgentId(Long agentId) { this.agentId = agentId; }

    public void setAreaId(Long areaId) { this.areaId = areaId; }

    public void setTitle(String title) { this.title = title; }

    public void setDescription(String description) { this.description = description; }

    public void setAddress(String address) { this.address = address; }

    public void setPropertyType(PropertyType propertyType) { this.propertyType = propertyType; }

    public void setBedrooms(Integer bedrooms) { this.bedrooms = bedrooms; }

    public void setBathrooms(Integer bathrooms) { this.bathrooms = bathrooms; }

    public void setLatitude(BigDecimal latitude) { this.latitude = latitude; }

    public void setLongitude(BigDecimal longitude) { this.longitude = longitude; }

    public void setAnnualRent(BigDecimal annualRent) { this.annualRent = annualRent; }

    public void setAgencyFee(BigDecimal agencyFee) { this.agencyFee = agencyFee; }

    public void setCautionFee(BigDecimal cautionFee) { this.cautionFee = cautionFee; }

    public void setLegalFee(BigDecimal legalFee) { this.legalFee = legalFee; }

    public void setInspectionFee(BigDecimal inspectionFee) { this.inspectionFee = inspectionFee; }

    public void setTotalUpfrontCost(BigDecimal totalUpfrontCost) { this.totalUpfrontCost = totalUpfrontCost; }

    public void setRiskLevel(RiskLevel riskLevel) { this.riskLevel = riskLevel; }

    public void setStatus(PropertyStatus status) { this.status = status; }

}