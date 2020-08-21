<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Eleven Software</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"/>
        <link rel="stylesheet" href="{{ asset('css/container/new_fashi.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/font-awesome.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/themify-icons.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/elegant-icons.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/owl.carousel.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/nice-select.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/jquery-ui.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/slicknav.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/fashi/style.css') }}" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
        <link href="{{ asset('css/container/produto.css') }}" rel="stylesheet" />
        <link href="{{ asset('css/container/mostrarprodutos.css') }}" rel="stylesheet" />
        <link href="{{ asset('css/container/procurarProdutos.css') }}" rel="stylesheet" />
        <link href="{{ asset('css/container/header.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
