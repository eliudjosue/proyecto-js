$(document).ready(function () {


    // Slider
    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });

    }


    //Post
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.'
            },

            {
                title: 'prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.'
            },

            {
                title: 'prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.'
            },

            {
                title: 'prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.'
            },
        ];


        posts.forEach((item, index) => {
            var post = `
            <article class="post">
             <h2>${item.title}</h2>
             <span class="date">${item.date}</span>
             <p>
              ${item.content}
             </p>
             
             <a href="#" class="button-more">Leer más</a>
              </article>` ;
              
              $("#posts").append(post);
        });

    }
    //Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    $("#to-rojo").click(function () {
        theme.attr("href", "css/rojo.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }

    //Validacion

    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validar({
            decimalSeparator: ',',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

});
