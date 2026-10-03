package com.finders.finders_backend.model.AreasDB;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "areas")
public class Areas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( nullable = false)
    private String name;


    @Column(name = "average_annual_rent", precision = 12, scale = 3)
    private BigDecimal averageAnnualRent;

    @Column(name = "listing_count")
    private Integer listingCount = 0;

    private String city;

    private String state;

    public Areas() {
    }
}