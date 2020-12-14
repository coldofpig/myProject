package com.coldopig.myproject.controller;

import com.coldopig.myproject.entity.EmpEntity;
import com.coldopig.myproject.service.EmpService;
import com.google.zxing.WriterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

/**
 * myproject
 * 2020/11/30 下午 02:43
 *
 * @author Joe
 **/
@Controller
public class LoginController {

    private final EmpService empService;

    @Autowired
    public LoginController(EmpService empService) {
        this.empService = empService;
    }

    @GetMapping(value = {"/", "/login.html"})
    public String loginPage() {
        return "login";
    }

    @GetMapping("/index")
    public String index(Model model) throws WriterException, IOException {

        String username = null;
        String secretKey = null;

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        }

        if (Objects.nonNull(username)) {
            Optional<EmpEntity> empEntityOptional = empService.getOneEmp(username);
            secretKey = empEntityOptional.isPresent() ? empEntityOptional.get().getSecretKey() : "";
        }

        String finalSecretKey = secretKey;
        String finalUsername = username;
        Map<String, Object> attrMap = new HashMap<String, Object>(2) {
            {
                put("secretKey", finalSecretKey);
                put("qrcodeBase64Str", Base64Utils.encodeToString(empService.showGoogleVerifyQrCode(finalSecretKey, finalUsername).toByteArray()));
                put("username", finalUsername);
            }
        };
        model.addAllAttributes(attrMap);
        return "/page/index";
    }


    @GetMapping("/error")
    public String error404() {
        return "404";
    }
}
