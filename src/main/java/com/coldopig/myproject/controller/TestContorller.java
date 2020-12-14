package com.coldopig.myproject.controller;

import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * myproject
 * 2020/11/26 下午 05:27
 * test
 *
 * @author Joe
 **/
@RestController
@RequestMapping("/test")
public class TestContorller {

    @GetMapping("/hello")
    public String hello() {
        return "hello security";
    }

    @GetMapping("/getClientCookies")
    public String getClientCookies(@RequestParam(name = "browser", required = false) String browser,
                                   HttpServletRequest request,
                                   HttpSession session) {
        Object sessionBrowser = session.getAttribute("browser");
        Cookie[] cookies = request.getCookies();

        StringBuffer sb = new StringBuffer();

        if (ObjectUtils.isEmpty(sessionBrowser)) {
            if (browser == null) {
                browser = "CHROME";
            }
            session.setAttribute("browser", browser);
            sb.append("不存在session，设置browser=").append(browser);
        } else {
            sb.append("存在session，browser=").append(sessionBrowser.toString());
        }

        if (!ObjectUtils.isEmpty(cookies)) {
            for(Cookie cookie : cookies) {
                sb.append(cookie.getName()).append(" : ").append(cookie.getValue()).append(", ");
            }
            return sb.substring(0, sb.length() - 2);
        }
        return sb.toString();
    }
}
