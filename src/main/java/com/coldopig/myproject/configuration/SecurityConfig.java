package com.coldopig.myproject.configuration;

import com.coldopig.myproject.component.CustomAuthenticationProvider;
import com.coldopig.myproject.component.CustomWebAuthenticationDetailsSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.session.web.http.CookieSerializer;
import org.springframework.session.web.http.DefaultCookieSerializer;

/**
 * myProject
 * 2020/11/26 下午 04:55
 * Spring Security Config
 *
 * @author Joe
 **/
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;

    private final CustomWebAuthenticationDetailsSource authenticationDetailsSource;

    @Autowired
    public SecurityConfig(UserDetailsService userDetailsService, CustomWebAuthenticationDetailsSource authenticationDetailsSource) {
        this.userDetailsService = userDetailsService;
        this.authenticationDetailsSource = authenticationDetailsSource;
    }

    /**
     * 使用配置的方法 加入登入帳號和密碼
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        // String password = bCryptPasswordEncoder.encode("123456");
        // auth.inMemoryAuthentication()
        //         .withUser("joe2")
        //         .password(password)
        //         .roles("admin");
        // auth.userDetailsService(userDetailsService).passwordEncoder(password());

        auth.authenticationProvider(authProvider());
    }

    /**
     * 靜態資源可訪問
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        //解决静态资源被拦截的问题
        web.ignoring().antMatchers("/static/**");
    }

    /**
     * 認證配置
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 自定義定入頁面
                .formLogin()
                    // 登入頁面名稱
                    .loginPage("/login.html")
                    // 登入訪問的路徑(Controller 由 Security 來實現)
                    .loginProcessingUrl("/emp/login")
                    // 登入成功後，要跳轉的路徑
                    .defaultSuccessUrl("/index")
                    // .failureForwardUrl("/error")
                    .authenticationDetailsSource(authenticationDetailsSource)
                .permitAll()
            .and()
                // 哪些路徑需要認證 哪些不允要
                .authorizeRequests()
                    // 設置不需認證的路徑
                    .antMatchers("/", "/login.html", "/js/**", "/css/**", "/img/**", "/emp/login", "/error")
                    .permitAll()
                    .anyRequest()
                        .authenticated()
            .and()
                    // 關關csrf防護機制
                    .csrf()
                        .disable();
    }

    @Bean
    PasswordEncoder password() {
        return new BCryptPasswordEncoder();
    }

    /**
     * 将Spring Session默认的Cookie Key从SESSION替换为原生的JSESSIONID。
     *
     * @return CookieSerializer cookieSerializer
     */
    @Bean
    public CookieSerializer cookieSerializer() {
        DefaultCookieSerializer serializer = new DefaultCookieSerializer();
        serializer.setCookieName("JSESSIONID");
        serializer.setCookiePath("/");
        serializer.setDomainNamePattern("^.+?\\.(\\w+\\.[a-z]+)$");
        return serializer;
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        CustomAuthenticationProvider authProvider = new CustomAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(password());
        return authProvider;
    }
}
