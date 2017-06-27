package com.xukaiqiang.shared.util;

import java.util.Calendar;

/**
 * From: https://github.com/twitter/snowflake
 */
public class IdWorker {

	// private static final long twepoch = 1288834974657L;

	private static final long workerIdBits = 3L;
	private static final long datacenterIdBits = 0L;
	private static final long maxWorkerId = ~(-1L << workerIdBits);
	private static final long maxDatacenterId = ~(-1L << datacenterIdBits);
	private static final long sequenceBits = 3L;

	private static final long workerIdShift = sequenceBits;
	private static final long datacenterIdShift = sequenceBits + workerIdBits;
	private static final long timestampLeftShift = sequenceBits + workerIdBits + datacenterIdBits;
	private static final long sequenceMask = ~(-1L << sequenceBits);

	private long lastTimestamp = -1L;
	private long workerId;
	private long datacenterId;
	private long sequence = 0L;

	public IdWorker(long workerId, long dataCenterId) {
		// sanity check for workerId
		if (workerId > maxWorkerId || workerId < 0) {
			throw new IllegalArgumentException(
					String.format("worker Id can't be greater than %d or less than 0", maxWorkerId));
		}
		if (dataCenterId > maxDatacenterId || dataCenterId < 0) {
			throw new IllegalArgumentException(
					String.format("datacenter Id can't be greater than %d or less than 0", maxDatacenterId));
		}
		this.workerId = workerId;
		this.datacenterId = dataCenterId;
		// LOG.info(String.format("worker starting. timestamp left shift %d,
		// datacenter id bits %d, worker id bits %d, sequence bits %d, workerid
		// %d", timestampLeftShift, datacenterIdBits, workerIdBits,
		// sequenceBits, workerId));
	}

	public synchronized long nextId() {
		long timestamp = timeGen();

		if (timestamp < lastTimestamp) {
			// LOG.error(String.format("clock is moving backwards. Rejecting
			// requests until %d.", lastTimestamp));
			throw new RuntimeException(String.format(
					"Clock moved backwards.  Refusing to generate id for %d milliseconds", lastTimestamp - timestamp));
		}

		if (lastTimestamp == timestamp) {
			sequence = (sequence + 1) & sequenceMask;
			if (sequence == 0) {
				timestamp = tilNextMillis(lastTimestamp);
			}
		} else {
			sequence = 0L;
		}

		lastTimestamp = timestamp;
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.HOUR, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return ((timestamp - cal.getTimeInMillis()) << timestampLeftShift) | (datacenterId << datacenterIdShift)
				| (workerId << workerIdShift) | sequence;
	}

	protected long tilNextMillis(long lastTimestamp) {
		long timestamp = timeGen();
		while (timestamp <= lastTimestamp) {
			timestamp = timeGen();
		}
		return timestamp;
	}

	protected long timeGen() {
		return System.currentTimeMillis();
	}
}