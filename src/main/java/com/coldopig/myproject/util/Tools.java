package com.coldopig.myproject.util;

import com.coldopig.myproject.common.CacheKey;
import com.coldopig.myproject.common.Consts;
import com.coldopig.myproject.enums.CacheEnum;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

/**
 * myproject
 * 2020/12/10 下午 02:38
 * 工具類
 *
 * @author Joe
 **/
public class Tools {

    public static String getUUID() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    /**
     * 获取 token
     *
     * @param request
     * @return
     */
    public static String getToken(HttpServletRequest request) {
        String token = request.getHeader(Consts.TOKEN);
        if (!StringUtils.hasText(token)) {
            token = request.getParameter(Consts.TOKEN);
        }
        return token;
    }

    /**
     * 获取 tokenKey
     *
     * @param request
     * @return
     */
    public static String getTokenKey(HttpServletRequest request, CacheEnum cacheEnum) {
        String token = getToken(request);
        System.out.println("token=" + token);
        if (cacheEnum.equals(CacheEnum.GOOGLE)) {
            token = String.format(CacheKey.TOKEN_KEY_GOOGLE, token);
        } else if (cacheEnum.equals(CacheEnum.LOGIN)) {
            token = String.format(CacheKey.TOKEN_KEY_LOGIN, token);
        }
        return token;
    }

}
