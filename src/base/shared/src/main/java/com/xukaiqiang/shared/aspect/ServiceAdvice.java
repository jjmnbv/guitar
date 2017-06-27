package com.xukaiqiang.shared.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.xukaiqiang.shared.SharedVars;

@Aspect
@Component
public class ServiceAdvice {

	private static Logger LOG = LoggerFactory.getLogger(ServiceAdvice.class);

	@Pointcut("execution(* " + SharedVars.ROOT_PACKAGE + "..service.*.*(..))")
	public void aspect() {
	}

	@Around(value = "aspect()")
	public Object aspectAfterReturning(ProceedingJoinPoint pjp) throws Throwable {
		LOG.info("{}.{} running...", pjp.getTarget().getClass().getSimpleName(), pjp.getSignature().getName());

		return pjp.proceed();
	}
}
