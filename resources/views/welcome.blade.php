<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

        <script>
            MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
              }
              // chtml: {
              //   fontCache: 'global'
              // }
            };
        </script>

        {{-- <script type="text/x-mathjax-config">
            MathJax.Hub.Config({
            tex2jax: {inlineMath: [['$','$'],['\\(','\\)']]},
            svg: {
                fontCache: 'global'
              }
            });
        </script> --}}

        <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
        </script>
       
     
        {{-- <script src="../../mathjax/tex-chtml-full.js" id="MathJax-script" async></script> --}}


        
        <title>Examresourse</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('fontawesome-free/css/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app">
    
        </div>
        
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
