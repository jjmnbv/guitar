package com.xukaiqiang.shared.util;

import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.shiro.codec.Base64;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class Cryptos {

	private static final String AES = "AES";
	private static final String HMACSHA1 = "HmacSHA1";
	private static final String AES_PADDING_SCHEME = "AES/ECB/PKCS7Padding";

	static {
		Security.addProvider(new BouncyCastleProvider());
	}

	public static void main(String[] args) {
		System.out.println(Base64.encodeToString(Cryptos.generateAESKey(128)));
	}

	public static String aesEncrypt(String str, byte[] key) {
		byte[] plaintext = str.getBytes();
		byte[] ciphertext = aesEncrypt(plaintext, key);
		return Base64.encodeToString(ciphertext);
	}

	public static String aesDecrypt(String str, byte[] key) {
		byte[] ciphertext = Base64.decode(str);
		byte[] plaintext = aesDecrypt(ciphertext, key);
		return new String(plaintext);
	}

	public static byte[] aesEncrypt(byte[] plaintext, byte[] key) {
		try {
			SecretKeySpec secretKey = new SecretKeySpec(key, AES);

			Cipher cipher = Cipher.getInstance(AES_PADDING_SCHEME, BouncyCastleProvider.PROVIDER_NAME);
			cipher.init(Cipher.ENCRYPT_MODE, secretKey);
			return cipher.doFinal(plaintext);
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	public static byte[] aesDecrypt(byte[] ciphertext, byte[] key) {
		try {
			Security.addProvider(new BouncyCastleProvider());
			SecretKeySpec secretKey = new SecretKeySpec(key, AES);

			Cipher cipher = Cipher.getInstance(AES_PADDING_SCHEME, BouncyCastleProvider.PROVIDER_NAME);
			cipher.init(Cipher.DECRYPT_MODE, secretKey);
			return cipher.doFinal(ciphertext);

		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	public static byte[] generateAESKey(int size) {
		try {
			KeyGenerator keyGenerator = KeyGenerator.getInstance(AES);
			keyGenerator.init(size);
			SecretKey secretKey = keyGenerator.generateKey();
			return secretKey.getEncoded();
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	public static byte[] hmacSHA1(byte[] input, byte[] key) {
		try {
			SecretKeySpec secretKey = new SecretKeySpec(key, HMACSHA1);
			Mac mac = Mac.getInstance(HMACSHA1);
			mac.init(secretKey);
			return mac.doFinal(input);
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	public static byte[] generateHmacSHA1Key(int size) {
		try {
			KeyGenerator keyGenerator = KeyGenerator.getInstance(HMACSHA1);
			keyGenerator.init(size);
			SecretKey secretKey = keyGenerator.generateKey();
			return secretKey.getEncoded();
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

}
