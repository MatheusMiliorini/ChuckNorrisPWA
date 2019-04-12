$(function () {
    $.ajax({
        url: "https://api.icndb.com/jokes/random",
        success: function (data) {
            var piada = data.value.joke;
            console.log(piada);
            $("#frase").html(piada);
            localStorage.setItem("ultimaFrase", piada);
        },
        error: function (err) {
            console.log("Ocorreu um erro na consulta à API");
            $("#frase").html(localStorage.getItem("ultimaFrase"));
        }
    })
});