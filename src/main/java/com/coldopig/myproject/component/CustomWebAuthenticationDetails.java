package com.coldopig.myproject.component;

import org.springframework.security.web.authentication.WebAuthenticationDetails;

import javax.servlet.http.HttpServletRequest;

/**
 * myproject
 * 2020/12/8 上午 11:46
 *
 * @author Joe
 **/
public class CustomWebAuthenticationDetails extends WebAuthenticationDetails {

    private String username;

    private String password;

    private String verificationCode;

    public CustomWebAuthenticationDetails(HttpServletRequest request) {
        super(request);
        username = request.getParameter("username");
        password = request.getParameter("password");
        verificationCode = request.getParameter("code");
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
