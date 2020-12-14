package com.coldopig.myproject.component;

import com.coldopig.myproject.entity.EmpEntity;
import com.coldopig.myproject.repository.EmpRepository;
import org.jboss.aerogear.security.otp.Totp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.Optional;

/**
 * myproject
 * 2020/12/8 下午 12:11
 * CustomAuthenticationProvider
 *
 * @author Joe
 **/
public class CustomAuthenticationProvider extends DaoAuthenticationProvider {

    @Autowired
    private  EmpRepository empRepository;

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {
        String verificationCode
                = ((CustomWebAuthenticationDetails) auth.getDetails())
                .getVerificationCode();

        String username
                = ((CustomWebAuthenticationDetails) auth.getDetails())
                .getUsername();

        String password
                = ((CustomWebAuthenticationDetails) auth.getDetails())
                .getPassword();

        Optional<EmpEntity> user = empRepository.findByLoginAccountEquals(username);
        if (!user.isPresent()) {
            throw new BadCredentialsException("Invalid username or password");
        }
        EmpEntity emp = user.get();
        if ("Y".equals(emp.getEnableGoogleAuth())) {
             Totp totp = new Totp(emp.getSecretKey());
            if (!isValidLong(verificationCode) || !totp.verify(verificationCode)) {
                throw new BadCredentialsException("Invalid verfication code");
            }
        }

        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList("role");

        Authentication result = super.authenticate(auth);
        User currentUser = new User(username, password, result.getAuthorities());
        return new UsernamePasswordAuthenticationToken(
                currentUser, result.getCredentials(), result.getAuthorities());
    }

    private boolean isValidLong(String code) {
        try {
            Long.parseLong(code);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
