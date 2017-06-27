package com.xukaiqiang.shared.util;

import org.apache.thrift.server.TServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.SmartLifecycle;

public class ThriftServer implements SmartLifecycle {

	private static final Logger LOG = LoggerFactory.getLogger(ThriftServer.class);

	private TServer server;

	public ThriftServer(TServer server) {
		this.server = server;
	}

	@Override
	public void start() {
		if (server == null) {
			return;
		}

		new Thread(new Runnable() {
			public void run() {
				LOG.info("thrift server started.");
				server.serve();
			}
		}, "thrift server").start();
	}

	@Override
	public void stop() {
		stop(null);
	}

	@Override
	public boolean isRunning() {
		if (server == null) {
			return false;
		}
		return server.isServing();
	}

	@Override
	public int getPhase() {
		return Integer.MAX_VALUE;
	}

	@Override
	public boolean isAutoStartup() {
		return true;
	}

	@Override
	public void stop(Runnable callback) {
		if (!isRunning()) {
			return;
		}

		LOG.info("thrift server shutdown");

		server.setShouldStop(true);
		server.stop();

		if (callback != null) {
			callback.run();
		}
	}

}
