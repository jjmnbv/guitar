package com.xukaiqiang.shared.util;

import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BLANK;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

public abstract class ExcelViewUtils {
	public static final String DATA_ROWS = "dataRows";

	private static class Options {
		Integer firstRow;
		Integer lastRow;
		Integer firstCol;
		Integer lastCol;
		Integer listFirstRow;
		Integer listLastRow;
		Map<String, Integer> listColumnMapping;
	}

	public static interface FillCellCallback<E> {
		public void fill(Cell cell, String propName, E dataRow);
	}

	/**
	 * 填充Excel
	 * 
	 * @param workbook
	 * @param model
	 * @param callback
	 */
	public static <E> void fill(Workbook workbook, Map<String, Object> model, FillCellCallback<E> callback) {
		Options options = getOptions(workbook.getSheetAt(0));

		// 填充固定区域
		if (options.firstRow != null && options.lastRow != null && options.firstCol != null
				&& options.lastCol != null) {
			fill(model, workbook.getSheetAt(1), options.firstRow, options.lastRow, options.firstCol, options.lastCol);
		}

		// 填充动态区域
		if (options.listFirstRow != null) {
			fill(model, workbook.getSheetAt(1), options.listFirstRow, options.listLastRow, options.listColumnMapping,
					callback);
		}

		// 配置表不输出
		workbook.removeSheetAt(0);
	}

	/**
	 * 填充固定区域，支持SpEL
	 * 
	 * @param model
	 * @param sheet
	 * @param firstRow
	 * @param lastRow
	 * @param firstCol
	 * @param lastCol
	 */
	public static void fill(Map<String, Object> model, Sheet sheet, int firstRow, int lastRow, int firstCol,
			int lastCol) {
		ExpressionParser parser = new SpelExpressionParser();
		StandardEvaluationContext context = new StandardEvaluationContext();
		context.setVariable("model", model);
		for (int i = firstRow; i <= lastRow; i++) {
			for (int j = firstCol; j <= lastCol; j++) {
				Cell cell = sheet.getRow(i).getCell(j);
				if (cell == null) {
					continue;
				}
				String value = StringUtils.trim(cell.getStringCellValue());
				if (StringUtils.isEmpty(value)) {
					continue;
				}
				if (!value.matches("\\{\\{.+\\}\\}")) {
					continue;
				}

				String expression = value.substring(2, value.length() - 2);
				cell.setCellValue(parser.parseExpression(expression).getValue(context, String.class));
			}
		}
	}

	/**
	 * 填充可自动扩展行
	 * 
	 * @param model
	 * @param sheet
	 * @param firstRow
	 * @param lastRow
	 * @param columnMapping
	 * @param callback
	 */
	@SuppressWarnings("unchecked")
	public static <E> void fill(Map<String, Object> model, Sheet sheet, Integer firstRow, Integer lastRow,
			Map<String, Integer> columnMapping, FillCellCallback<E> callback) {
		List<E> dataRows = (List<E>) model.get(DATA_ROWS);

		for (int i = 0, n = dataRows.size(); i < n; i++) {
			int rownum = firstRow + i;
			Row row = sheet.getRow(rownum);
			if (row == null) {
				row = sheet.createRow(rownum);
			} else if (lastRow == null) {
				// 自动扩展格式
				copyRow(sheet, rownum, rownum + 1);
			}

			for (Entry<String, Integer> entry : columnMapping.entrySet()) {
				Integer cellnum = entry.getValue();
				if (cellnum == null) {
					continue;
				}

				Cell cell = row.getCell(cellnum);
				if (cell == null) {
					cell = row.createCell(cellnum);
				}

				callback.fill(cell, entry.getKey(), dataRows.get(i));
			}
		}
	}

	private static Options getOptions(Sheet sheet) {
		Options options = new Options();

		// 第一行配置项名称，第二行配置项值
		for (Cell cell : sheet.getRow(0)) {
			Cell valueCell = sheet.getRow(1).getCell(cell.getColumnIndex());
			switch (getStringValue(cell)) {
			case "firstRow":
				options.firstRow = getIntegerValue(valueCell);
				break;
			case "lastRow":
				options.lastRow = getIntegerValue(valueCell);
				break;
			case "firstCol":
				options.firstCol = getIntegerValue(valueCell);
				break;
			case "lastCol":
				options.lastCol = getIntegerValue(valueCell);
				break;
			case "listFirstRow":
				options.listFirstRow = getIntegerValue(valueCell);
				break;
			case "listLastRow":
				options.listLastRow = getIntegerValue(valueCell);
				break;
			default:
				break;
			}
		}
		if (options.listFirstRow != null) {
			options.listColumnMapping = new HashMap<String, Integer>();
			for (Cell cell : sheet.getRow(2)) {
				String name = getStringValue(cell);
				if (!StringUtils.isEmpty(name)) {
					options.listColumnMapping.put(name, cell.getColumnIndex());
				}
			}
		}
		return options;
	}

	private static String getStringValue(Cell cell) {
		if (cell.getCellType() == CELL_TYPE_NUMERIC) {
			return String.valueOf(cell.getNumericCellValue());
		}
		return cell.getStringCellValue();
	}

	private static Integer getIntegerValue(Cell cell) {
		if (cell.getCellType() == CELL_TYPE_NUMERIC) {
			return new Integer((int) cell.getNumericCellValue());
		}
		try {
			return Integer.valueOf(cell.getStringCellValue());
		} catch (Exception e) {
			return null;
		}
	}

	private static void copyRow(Sheet sheet, int srcRownum, int destRownum) {
		Row destRow = sheet.getRow(destRownum);
		if (destRow == null) {
			destRow = sheet.createRow(destRownum);
		} else {
			sheet.shiftRows(destRownum, sheet.getLastRowNum(), 1);
		}

		Row srcRow = sheet.getRow(srcRownum);
		for (int j = 0, m = srcRow.getLastCellNum(); j < m; j++) {
			Cell srcCell = srcRow.getCell(j);
			if (srcCell == null) {
				continue;
			}

			Cell destCell = destRow.createCell(j);

			destCell.setCellStyle(srcCell.getCellStyle());

			if (destCell.getCellComment() != null) {
				destCell.setCellComment(srcCell.getCellComment());
			}

			if (srcCell.getHyperlink() != null) {
				destCell.setHyperlink(srcCell.getHyperlink());
			}

			destCell.setCellType(srcCell.getCellType());

			switch (srcCell.getCellType()) {
			case CELL_TYPE_BLANK:
				break;
			case CELL_TYPE_BOOLEAN:
				destCell.setCellValue(srcCell.getBooleanCellValue());
				break;
			case CELL_TYPE_ERROR:
				destCell.setCellErrorValue(srcCell.getErrorCellValue());
				break;
			case CELL_TYPE_FORMULA:
				destCell.setCellFormula(srcCell.getCellFormula());
				break;
			case CELL_TYPE_NUMERIC:
				destCell.setCellValue(srcCell.getNumericCellValue());
				break;
			case CELL_TYPE_STRING:
				destCell.setCellValue(srcCell.getRichStringCellValue());
				break;
			default:
				break;
			}
		}

		for (int i = 0, n = sheet.getNumMergedRegions(); i < n; i++) {
			CellRangeAddress region = sheet.getMergedRegion(i);
			if (region.getFirstRow() == srcRow.getRowNum()) {
				int firstRow = destRow.getRowNum();
				int lastRow = firstRow + region.getLastRow() - region.getFirstRow();
				int firstCol = region.getFirstColumn();
				int lastCol = region.getLastColumn();

				sheet.addMergedRegion(new CellRangeAddress(firstRow, lastRow, firstCol, lastCol));
			}
		}
	}

}
