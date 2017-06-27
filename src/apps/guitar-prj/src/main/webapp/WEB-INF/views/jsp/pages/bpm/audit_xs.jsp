<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>student</title>
</head>
<body>
<form id="fm" method="post">
   	<table cellspacing="8px">
   		<tr>
   			<td>请假天数：</td>
   			<td>
   				<input type="text" id="leaveDays" name="leaveDays" class="easyui-numberbox" required="true"/>
   			</td>
   		</tr>
   		<tr>
   			<td valign="top">请假原因：</td>
   			<td>
   			    <input type="hidden" name="user.id" value="${currentMemberShip.user.id }"/>
   			    <input type="hidden" name="state" value="未提交"/>
   				<textarea id="leaveReason" name="leaveReason" rows="5" cols="49" class="easyui-validatebox" required="true"></textarea>
   			</td>
   		</tr>
   		
   	</table>
   </form>
</body>
</html>