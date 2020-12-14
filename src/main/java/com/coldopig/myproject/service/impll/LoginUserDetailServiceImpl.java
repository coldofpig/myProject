package com.coldopig.myproject.service.impll;

import com.coldopig.myproject.entity.EmpEntity;
import com.coldopig.myproject.repository.EmpRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * myProject
 * 2020/11/27 上午 11:15
 * login user
 *
 * @author Joe
 **/
@Service("userDetailsService")
public class LoginUserDetailServiceImpl implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginUserDetailServiceImpl.class);

    private final EmpRepository empRepository;

    @Autowired
    public LoginUserDetailServiceImpl(EmpRepository empRepository) {
        this.empRepository = empRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        LOGGER.info("loadUserByUsername username = {}", username);

        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList("role");
        Optional<EmpEntity> optional = empRepository.findByLoginAccountEquals(username);

        if (optional.isPresent()) {
            LOGGER.info("經由username查詢，取得的員工編號：{}", optional.get().getEmpNo());
            // TODO: 2020/12/8 Google Verify Code
            if (true) {
                // TODO: 2020/12/8 Query role and set
            }

            return new User(optional.get().getLoginAccount(), optional.get().getLoginPwd(), authorities);
        } else {
            throw new UsernameNotFoundException("帳號/密碼/驗証碼錯誤 錯誤");
        }
    }
}
