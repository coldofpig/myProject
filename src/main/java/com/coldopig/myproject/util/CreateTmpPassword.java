package com.coldopig.myproject.util;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Random;

/**
 * myproject
 * 2020/11/27 下午 12:30
 * 生成暫時性密碼
 *
 * @author Joe
 **/
public class CreateTmpPassword {

    public static final String allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static String create() {
        String notEncryptStr = getRandomStr(8);
        System.out.println(notEncryptStr);
        String encryptStr =  new BCryptPasswordEncoder().encode(notEncryptStr);
        System.out.println(encryptStr);
        return encryptStr;
    }


    private static String getRandomStr(int length) {
        StringBuffer sb = new StringBuffer();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            sb.append(allChar.charAt(random.nextInt(allChar.length())));
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        create();
    }
}
