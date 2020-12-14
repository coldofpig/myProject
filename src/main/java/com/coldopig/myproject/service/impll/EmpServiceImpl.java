package com.coldopig.myproject.service.impll;

import com.coldopig.myproject.entity.EmpEntity;
import com.coldopig.myproject.repository.EmpRepository;
import com.coldopig.myproject.service.EmpService;
import com.coldopig.myproject.util.GoogleAuthUtil;
import com.coldopig.myproject.util.QrCodeUtil;
import com.google.zxing.WriterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;

/**
 * myproject
 * 2020/12/14 上午 11:23
 * EmpService Impl
 *
 * @author Joe
 **/
@Service
public class EmpServiceImpl implements EmpService {

    private final EmpRepository empRepository;

    @Autowired
    public EmpServiceImpl(EmpRepository empRepository) {
        this.empRepository = empRepository;
    }

    @Override
    public Optional<EmpEntity> getOneEmp(String username) {
        return empRepository.findByLoginAccountEquals(username);
    }

    @Override
    public ByteArrayOutputStream showGoogleVerifyQrCode(String securityKey, String username) throws IOException, WriterException {

        String barCode = GoogleAuthUtil.getGoogleAuthenticatorBarCode(securityKey, username, "myProject");
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        QrCodeUtil.writeToStream(barCode, out, 200, 200);

        return out;
    }
}
