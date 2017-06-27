package com.xukaiqiang.shared.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.ui.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shared.util.MessageError;

import net.sf.cglib.beans.BeanMap;

@JsonIgnoreProperties({ "success" })
@JsonInclude(Include.NON_NULL)
public class OutputMessage implements Serializable {

	public static <RESPONSE extends OutputMessage> RESPONSE createErrorResponse(Class<RESPONSE> responseClass) {
		try {
			RESPONSE response = responseClass.newInstance();
			response.setSystemError();
			return response;
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	private static final long serialVersionUID = 1L;

	private Object payload;

	private MessageCode resultCode = MessageCode.SUCCESS;
	private MessageError errorCode;

	/**
	 * 处理结果
	 * 
	 * @return
	 */
	public Object getPayload() {
		return payload;
	}

	public void setPayload(Object payload) {
		this.payload = payload;
	}

	/**
	 * 处理状态码
	 * 
	 * @return
	 */
	public MessageCode getResultCode() {
		return resultCode;
	}

	public void setResultCode(MessageCode resultCode) {
		this.resultCode = resultCode;
	}

	/**
	 * 处理错误码
	 * 
	 * @return
	 */
	public MessageError getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(MessageError errorCode) {
		this.errorCode = errorCode;
	}

	/**
	 * 处理错误消息
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<String> getErrors() {
		if (errorCode == null) {
			return Collections.emptyList();
		}

		List<String> errors = new ArrayList<String>();
		if (payload == null) {
			errors.add(errorCode.getMsg());
		} else if (payload instanceof List) {
			errors.addAll((List<String>) payload);
		} else {
			errors.add(payload.toString());
		}

		return errors;
	}

	public void setParameterErrors(Object errors) {
		setResultCode(MessageCode.FAIL);
		setErrorCode(MessageError.ERROR_PARAM);
		setPayload(errors);
	}

	public void setSystemError() {
		setResultCode(MessageCode.FAIL);
		setErrorCode(MessageError.ERROR_SYSTEM);
	}

	public boolean isSuccess() {
		return MessageCode.SUCCESS.equals(getResultCode());
	}

	@SuppressWarnings("unchecked")
	public void addAttributeTo(Model model) {
		model.asMap().putAll(BeanMap.create(this));
	}

}
