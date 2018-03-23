<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var = "context" value ="<%=application.getContextPath()%>"/>
<html>
<head>
  <title>Home</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="${context}/resources/js/app.js"></script>
</head>
<body>
<div id="wrapper">
  <h1></h1>
</div>
<div id="contents">
</div>
</body>
</html>
<script>
  app.init('${context}');  
</script>