package com.coldopig.myproject.repository;

import com.coldopig.myproject.entity.EmpEntity;

import java.util.Optional;

/**
 * myProject
 * 2020/11/27 上午 11:19
 * user table dao
 *
 * @author Joe
 **/
public interface EmpRepository extends BaseRepository<EmpEntity, String> {
    /**
     * 用帳號查emp
     * @param loginAccount 登入帳號
     * @return EmpEntity 員工實體
     */
    Optional<EmpEntity> findByLoginAccountEquals(String loginAccount);
}
