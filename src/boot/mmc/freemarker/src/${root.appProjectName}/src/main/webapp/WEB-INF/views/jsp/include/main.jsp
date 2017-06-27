<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${self.title}</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="${self.path.bootstrap}/css/bootstrap.min.css">
    <link rel="stylesheet" href="${self.path.FontAwesome}/css/font-awesome.min.css">
    <link rel="stylesheet" href="${self.path.ionicons}/css/ionicons.min.css">
    <link media="all" rel="stylesheet" type="text/css" href="${self.path.app}/css/all.css" />
    <link media="all" rel="stylesheet" type="text/css" href="${self.path.uploader}/css/dropzone.css" />
    ${self.css.plugins}
    <link rel="stylesheet" href="${self.path.app}/css/app.css" />
    ${self.css.main}

    <!--[if lt IE 9]>
      <script src="${self.path.html5shiv}/html5shiv.min.js"></script>
      <script src="${self.path.respond}/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div>${self.content.main}</div>
    <script src="${self.path.jquery}/jquery.min.js"></script>
    <script src="${self.path.bootstrap}/js/bootstrap.min.js"></script>
    ${self.js.plugins}
    <script src="${self.path.app}/js/app.js"></script>
    ${self.js.main}
  </body>
</html>
