package com.xukaiqiang.cb.api.service;

import org.junit.runner.RunWith;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@Rollback
@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("development")
@ContextConfiguration(locations = { "classpath*:/net/zkbc/spring/*.xml", "classpath:/spring/*.xml" })
public class CsMessageServiceTest {

}
