package com.coldopig.myproject.service;

import com.coldopig.myproject.entity.EmpEntity;
import com.google.zxing.WriterException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;

/**
 * myProject
 * 2020/11/27 上午 11:27
 * 員工 Service
 *
 * @author Joe
 **/
public interface EmpService {
    /**
     * 取得一個員工物件
     *
     * @param username 殖入帳號
     * @return Java Optional
     */
    Optional<EmpEntity> getOneEmp(String username);

    /**
     * Google Auth 轉換成二維碼圖
     *
     * @param securityKey 已生成的密碼
     * @param username 登入帳號
     * @return ByteArrayOutputStream
     * @throws IOException ioeException
     * @throws WriterException writeException
     */
    ByteArrayOutputStream showGoogleVerifyQrCode(String securityKey, String username) throws IOException, WriterException;


}
