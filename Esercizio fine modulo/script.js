document.addEventListener("DOMContentLoaded", function () {

    function scorrimentoFilm(listaFilm, avantiId, dietroId) {
        const contenitoreFilm = document.getElementById(listaFilm);
        const tastoAvanti = document.getElementById(avantiId);
        const tastoDietro = document.getElementById(dietroId);

        if (contenitoreFilm && tastoAvanti && tastoDietro) {
            tastoAvanti.addEventListener("click", function () {
                contenitoreFilm.scrollBy({
                    left: 300,
                    behavior: "smooth",
                });
            });

            tastoDietro.addEventListener("click", function () {
                contenitoreFilm.scrollBy({
                    left: -300,
                    behavior: "smooth",
                });
            });
        }
    }

   
    scorrimentoFilm("contenitore-lista-film-1", "avanti1", "dietro1");
    scorrimentoFilm("contenitore-lista-film-2", "avanti2", "dietro2");
    scorrimentoFilm("contenitore-lista-film-3", "avanti3", "dietro3");

});
