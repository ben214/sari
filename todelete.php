<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #cont{
            position: absolute;
            inset: auto;
            background: yellow;
            padding: 2em;
        }
    </style>
    <script src="main.js"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(function(){
    $('#cont').load("todelete.php")
    });
    </script>
</head>
<body>
    <img id='img' height="500" width="500" src="https://sarashreiber.com/logosara.jpg">
</body>
</html>