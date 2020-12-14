package com.coldopig.myproject.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * myproject
 * 2020/11/26 下午 03:49
 * Emp
 *
 * @author Joe
 **/
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "EMP")
public class EmpEntity extends BaseEntity implements Serializable {

    /**
     * 員工編號
     */
    @Id
    @Column(name = "EMP_NO", nullable = false, updatable = false, unique = true, length = 50)
    private String empNo;

    /**
     * 登入帳號
     */
    @Column(name = "LOGIN_ACCOUNT", nullable = false, length = 50)
    private String loginAccount;

    /**
     * 登入密碼
     */
    @Column(name = "LOGIN_PWD", nullable = false, length = 255)
    private String loginPwd;

    /**
     * 名字
     */
    @Column(name = "FIRST_NAME", length = 50)
    private String firstName;

    /**
     * 姓氏
     */
    @Column(name = "LAST_NAME", length = 50)
    private String lastName;

    /**
     * 地址
     */
    @Column(name = "ADDRESS", length = 255)
    private String address;

    /**
     * 是否啟用 Google Auth
     */
    @Column(name = "ENABLE_GOOGLE_AUTH", length = 1)
    private String enableGoogleAuth;

    /**
     * Google Auth Secret Key
     */
    @Column(name = "SECRET_KEY", length = 32)
    private String secretKey;
}
