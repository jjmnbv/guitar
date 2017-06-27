package com.xukaiqiang.shared.util;

import org.apache.thrift.TException;
import org.apache.thrift.TProcessor;
import org.apache.thrift.server.TThreadedSelectorServer;
import org.apache.thrift.server.TThreadedSelectorServer.Args;
import org.apache.thrift.transport.TFramedTransport;
import org.apache.thrift.transport.TNonblockingServerSocket;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.protocol.OutputMessage;

public abstract class ThriftUtils {

	public interface Executor<T extends OutputMessage> {
		public T execute(TTransport transport) throws TException;
	}

	public static ThriftServer createThriftServer(SharedVars appVars, TProcessor processor) throws TTransportException {
		Args args = new TThreadedSelectorServer.Args(new TNonblockingServerSocket(appVars.thriftServerPort))
				.processor(processor).workerThreads(appVars.thriftWorkerThreads)
				.selectorThreads(appVars.selectorThreads);

		return new ThriftServer(new TThreadedSelectorServer(args));
	}

	public static <T extends OutputMessage> T sendRequest(SharedVars appVars, Executor<T> executor,
			Class<T> responseClass) {
		try {
			String systemName = SharedVars.getSystemName(responseClass);
			String host = appVars.findByName("remote.thrift.server.host." + systemName, appVars.thriftServerHost);
			String port = appVars.findByName("remote.thrift.server.port." + systemName,
					String.valueOf(appVars.thriftServerPort));

			TTransport transport = new TFramedTransport(new TSocket(host, Integer.valueOf(port)));
			transport.open();
			try {
				return executor.execute(transport);
			} finally {
				transport.close();
			}
		} catch (TException e) {
			return OutputMessage.createErrorResponse(responseClass);
		}
	}
}
