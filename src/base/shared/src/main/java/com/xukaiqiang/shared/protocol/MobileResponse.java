package com.xukaiqiang.shared.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.xukaiqiang.shared.util.MessageError;

/**
 * 报文响应基类
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.NON_NULL)
public class MobileResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private String sessionId;
	private String errorCode;
	private String errorMessage;

	public void error() {
		setErrorCode(MessageError.ERROR_SYSTEM.name());
		setErrorMessage(MessageError.ERROR_SYSTEM.getMsg());
	}

	public void error(MessageError error) {
		if (error == null) {
			error();
		} else {
			setErrorCode(error.name());
			setErrorMessage(error.getMsg());
		}
	}

	public void error(OutputMessage output) {
		if (output == null || output.getErrorCode() == null) {
			error();
		} else {
			setErrorCode(output.getErrorCode().name());
			if (output.getPayload() == null) {
				setErrorMessage(output.getErrorCode().getMsg());
			} else {
				setErrorMessage(output.getPayload().toString());
			}
		}
	}

	public void error(String errorMessage) {
		setErrorCode(MessageError.ERROR_SYSTEM.name());
		setErrorMessage(errorMessage);
	}

	public void error(String errorCode, String errorMessage) {
		setErrorCode(errorCode);
		setErrorMessage(errorMessage);
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	private void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	private void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

}
