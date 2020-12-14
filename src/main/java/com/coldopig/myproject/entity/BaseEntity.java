package com.coldopig.myproject.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.sql.Timestamp;

/**
 * myproject
 * 2020/11/26 下午 03:44
 * Base Enity
 *
 * @author Joe
 **/
@MappedSuperclass
@EnableJpaAuditing
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

    /**
     * 建立時間
     */
    @CreatedDate
    @Column(name = "CREATE_DATE", nullable = false, updatable = false)
    private Timestamp createDate;

    /**
     * 建立者
     */
    @CreatedBy
    @Column(name = "CREATE_USER", nullable = false, updatable = false)
    private String createUser;

    /**
     * 修改時間
     */
    @LastModifiedDate
    @Column(name = "UPDATE_DATE")
    private Timestamp updateDate;

    /**
     * 修改者'
     */
    @Column(name = "UPDATE_USER")
    private String updateUser;
}
