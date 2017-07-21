package com.xukaiqiang.gu.api.controller;

import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnResponse;
import com.xukaiqiang.gu.api.protocol.FindCuPostSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuPostSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderResponse;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsResponse;
import com.xukaiqiang.gu.api.service.MessageService;
import com.xukaiqiang.gu.api.util.Urls;
import com.xukaiqiang.shared.util.Executor;

@Controller
public class CuHttpMessageSkeletonController {

	@Autowired
	private MessageService service;
	@Autowired
	private MessageSource messageSource;

	@RequestMapping(value = Urls.FINDCUBRS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuBrsResponse findCuBrs(@Valid @RequestBody final FindCuBrsRequest request, BindingResult result,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuBrs(request);
			}
		}, messageSource, result, locale, FindCuBrsResponse.class);
	}

	@RequestMapping(value = Urls.FINDTOPCUBRS, method = RequestMethod.POST)
	@ResponseBody
	public FindTopCuBrsResponse findTopCuBrs(@Valid @RequestBody final FindTopCuBrsRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findTopCuBrs(request);
			}
		}, messageSource, result, locale, FindTopCuBrsResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUMAYNS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuMaYnsResponse findCuMaYns(@Valid @RequestBody final FindCuMaYnsRequest request, BindingResult result,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuMaYns(request);
			}
		}, messageSource, result, locale, FindCuMaYnsResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUPOSTS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuPostSResponse findCuPostS(@Valid @RequestBody final FindCuPostSRequest request, BindingResult result,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuPostS(request);
			}
		}, messageSource, result, locale, FindCuPostSResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUUSSBYPOSTNO, method = RequestMethod.POST)
	@ResponseBody
	public FindCuUsSByPostNoResponse findCuUsSByPostNo(@Valid @RequestBody final FindCuUsSByPostNoRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuUsSByPostNo(request);
			}
		}, messageSource, result, locale, FindCuUsSByPostNoResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUUSSBYLOGINNA, method = RequestMethod.POST)
	@ResponseBody
	public FindCuUsSByLoginNaResponse findCuUsSByLoginNa(@Valid @RequestBody final FindCuUsSByLoginNaRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuUsSByLoginNa(request);
			}
		}, messageSource, result, locale, FindCuUsSByLoginNaResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUBRSTOCUUS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuBrSToCuUsResponse findCuBrSToCuUs(@Valid @RequestBody final FindCuBrSToCuUsRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuBrSToCuUs(request);
			}
		}, messageSource, result, locale, FindCuBrSToCuUsResponse.class);
	}

	@RequestMapping(value = Urls.FINDMNCUUSCUBRS, method = RequestMethod.POST)
	@ResponseBody
	public FindMnCuUsCuBrSResponse findMnCuUsCuBrS(@Valid @RequestBody final FindMnCuUsCuBrSRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findMnCuUsCuBrS(request);
			}
		}, messageSource, result, locale, FindMnCuUsCuBrSResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUMNCUUS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuMnCuUsResponse findCuMnCuUs(@Valid @RequestBody final FindCuMnCuUsRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuMnCuUs(request);
			}
		}, messageSource, result, locale, FindCuMnCuUsResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUMNCUBRS, method = RequestMethod.POST)
	@ResponseBody
	public FindCuMnCuBrSResponse findCuMnCuBrS(@Valid @RequestBody final FindCuMnCuBrSRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuMnCuBrS(request);
			}
		}, messageSource, result, locale, FindCuMnCuBrSResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUMNYN, method = RequestMethod.POST)
	@ResponseBody
	public FindCuMnYnResponse findCuMnYn(@Valid @RequestBody final FindCuMnYnRequest request, BindingResult result,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuMnYn(request);
			}
		}, messageSource, result, locale, FindCuMnYnResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUUSBYID, method = RequestMethod.POST)
	@ResponseBody
	public FindCuUsByIdResponse findCuUsById(@Valid @RequestBody final FindCuUsByIdRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuUsById(request);
			}
		}, messageSource, result, locale, FindCuUsByIdResponse.class);
	}

	@RequestMapping(value = Urls.FINDCUUSTOWORKORDER, method = RequestMethod.POST)
	@ResponseBody
	public FindCuUsToWorkOrderResponse findCuUsToWorkOrder(@Valid @RequestBody final FindCuUsToWorkOrderRequest request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.findCuUsToWorkOrder(request);
			}
		}, messageSource, result, locale, FindCuUsToWorkOrderResponse.class);
	}

}
