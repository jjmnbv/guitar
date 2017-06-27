<#compress>

<#macro printTableComment tableName commentText>
ALTER TABLE ${tableName} COMMENT '${commentText}';
</#macro>

<#macro printColumnComment tableName columnName commentText>
CALL sp_alter_column_comment('${tableName}', '${columnName}', '${commentText}');
</#macro>

DROP PROCEDURE IF EXISTS sp_alter_column_comment;
DELIMITER $$
CREATE PROCEDURE sp_alter_column_comment(IN p_table VARCHAR(255), IN p_column VARCHAR(255), IN p_comment VARCHAR(255))  
BEGIN
  SET @sqltext=(
    SELECT CONCAT("ALTER TABLE `",
      table_name,
      "` MODIFY `",
      column_name,
      "` ",
      column_type,
      " ",
      IF(!ISNULL(column_default),CONCAT(" DEFAULT ",CASE WHEN column_default='CURRENT_TIMESTAMP' THEN column_default ELSE CONCAT("'",column_default,"'") END),''),
      IF(is_nullable='YES',' ',' NOT NULL '),
      " ",
      extra,
      " ",
      " COMMENT '",
      p_comment,
      "';"
    ) FROM information_schema.columns WHERE table_schema IN (SELECT database()) AND table_name=p_table AND column_name=p_column
  );

  PREPARE stmt FROM @sqltext;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;
<#include "../comments.ftl">

</#compress>