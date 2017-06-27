package com.xukaiqiang.shared.util;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URI;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Objects;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.protocol.OutputMessage;

public abstract class HttpUtils {

	private static final Logger LOG = LoggerFactory.getLogger(HttpUtils.class);

	public static <RESPONSE extends OutputMessage, REQUEST> RESPONSE sendRequest(SharedVars appVars, String url,
			REQUEST request, Class<RESPONSE> responseClass) {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_JSON);

		try {
			String systemName = SharedVars.getSystemName(responseClass);
			String baseUrl = appVars.findByName("remote.http.server.url." + systemName, appVars.httpServerUrl);
			String requestUrl = UriComponentsBuilder.fromHttpUrl(baseUrl).path(url).toUriString();

			RESPONSE response = new RestTemplate().postForObject(requestUrl, new HttpEntity<REQUEST>(request, headers),
					responseClass);
			if (response == null) {
				return OutputMessage.createErrorResponse(responseClass);
			}
			return response;
		} catch (Exception e) {
			return OutputMessage.createErrorResponse(responseClass);
		}
	}

	public static <RESPONSE, REQUEST> RESPONSE postResponseBody(String httpUrl, REQUEST request,
			Class<RESPONSE> responseClass) {
		String requestUrl = buildUriString(httpUrl, request);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		try {
			ResponseEntity<RESPONSE> response = new RestTemplate().exchange(requestUrl, HttpMethod.POST,
					new HttpEntity<>(headers), responseClass);
			RESPONSE body = response.getBody();
			switch (response.getStatusCode()) {
			case OK:
				return body;
			default:
				LOG.warn(new ObjectMapper().writeValueAsString(body));
				return null;
			}
		} catch (Exception e) {
			return null;
		}
	}

	public static <RESPONSE> RESPONSE getResponseBody(String httpUrl, Object request, Class<RESPONSE> responseClass) {
		String requestUrl = buildUriString(httpUrl, request);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		try {
			ResponseEntity<RESPONSE> response = new RestTemplate().exchange(requestUrl, HttpMethod.GET,
					new HttpEntity<>(headers), responseClass);
			RESPONSE body = response.getBody();
			switch (response.getStatusCode()) {
			case OK:
				return body;
			default:
				LOG.warn(new ObjectMapper().writeValueAsString(body));
				return null;
			}
		} catch (Exception e) {
			return null;
		}
	}

	public static URI getResponseLocation(String httpUrl, Object request) {
		String requestUrl = buildUriString(httpUrl, request);
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		try {
			ResponseEntity<String> response = new RestTemplate(new SimpleClientHttpRequestFactory() {
				@Override
				protected void prepareConnection(HttpURLConnection connection, String httpMethod) throws IOException {
					super.prepareConnection(connection, httpMethod);
					connection.setInstanceFollowRedirects(false);
				}
			}).exchange(requestUrl, HttpMethod.GET, new HttpEntity<>(headers), String.class);
			switch (response.getStatusCode()) {
			case FOUND:
				return response.getHeaders().getLocation();
			default:
				return null;
			}
		} catch (Exception e) {
			return null;
		}
	}

	public static String getHttpUrlLocation(String httpUrl) {
		UriComponents uric = UriComponentsBuilder.fromHttpUrl(httpUrl).build();
		return UriComponentsBuilder.newInstance().scheme(uric.getScheme()).host(uric.getHost()).port(uric.getPort()).path(uric.getPath()).toUriString();
	}

	@SuppressWarnings("unchecked")
	public static String buildUriString(String httpUrl, Object request) {
		if (request == null) {
			return httpUrl;
		}
		MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
		params.setAll(BeanMap.create(request));
		return UriComponentsBuilder.fromHttpUrl(httpUrl).queryParams(params).toUriString();
	}

	public static <RESPONSE> RESPONSE getQueryParams(URI uri, Class<RESPONSE> responseClass) {
		MultiValueMap<String, String> params = UriComponentsBuilder.fromUri(uri).build().getQueryParams();
		try {
			RESPONSE response = responseClass.newInstance();
			BeanMap.create(response).putAll(params.toSingleValueMap());
			return response;
		} catch (Exception e) {
			return null;
		}
	}

	public static String getQueryParam(String httpUrl, String queryParam) {
		MultiValueMap<String, String> params = UriComponentsBuilder.fromHttpUrl(httpUrl).build().getQueryParams();
		try {
			return params.toSingleValueMap().get(queryParam);
		} catch (Exception e) {
			return null;
		}
	}

	public static boolean equalURIFullPath(String a, String b) {
		return equalURIFullPath(UriComponentsBuilder.fromUriString(a).build(),
				UriComponentsBuilder.fromUriString(b).build());
	}

	public static boolean equalURIFullPath(String a, URI b) {
		return equalURIFullPath(UriComponentsBuilder.fromUriString(a).build(), UriComponentsBuilder.fromUri(b).build());
	}

	public static boolean equalURIFullPath(UriComponents a, UriComponents b) {
		return true //
				&& Objects.equal(a.getScheme(), b.getScheme())//
				&& Objects.equal(a.getUserInfo(), b.getUserInfo())//
				&& Objects.equal(a.getHost(), b.getHost())//
				&& Objects.equal(a.getPort(), b.getPort())//
				&& Objects.equal(a.getPath(), b.getPath());
	}

}
