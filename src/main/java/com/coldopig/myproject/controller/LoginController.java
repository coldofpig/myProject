package com.coldopig.myproject.controller;

import com.coldopig.myproject.util.GoogleAuthUtil;
import com.coldopig.myproject.util.QrCodeUtil;
import com.google.zxing.WriterException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * myproject
 * 2020/11/30 下午 02:43
 *
 * @author Joe
 **/
@Controller
public class LoginController {

    @GetMapping(value = {"/", "/login.html"})
    public String logginPage() {
        return "login";
    }

    @GetMapping("/index")
    public String index(Model model) throws WriterException, IOException {
        String secretKey = GoogleAuthUtil.createSecretKey();
        String barCode = GoogleAuthUtil.getGoogleAuthenticatorBarCode(secretKey, "joe", "abcd");
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        QrCodeUtil.writeToStream(barCode, out, 200, 200);

        Map<String, Object> attrMap = new HashMap<String, Object>(1) {
            {
                put("secretKey", secretKey);
                put("qrcodeBase64Str", Base64Utils.encodeToString(out.toByteArray()));
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
