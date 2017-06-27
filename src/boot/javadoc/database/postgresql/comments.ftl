<#compress>

<#macro printTableComment tableName commentText>
COMMENT ON TABLE ${tableName} IS '${commentText}';
</#macro>

<#macro printColumnComment tableName columnName commentText>
COMMENT ON COLUMN ${tableName}.${columnName} IS '${commentText}';
</#macro>

<#include "../comments.ftl">

</#compress>