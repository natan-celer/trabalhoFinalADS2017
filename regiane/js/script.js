function loginPagina(pagina) {
    var bibl;
    if (pagina == "home") {
        bibl = "paginas/home.html";
    } else if (pagina == "buscar") {
        bibl = "paginas/buscar.html";
    }else if(pagina == "listar"){
        bibl = "paginas/listar.html";
    }else if(pagina == "cadastro"){
        bibl = "paginas/cadastro.html";
    }

    $.ajax({
        url: bibl
    }).done(function (pagina) {
        $("#conteudo").html(pagina);
    }).fail(function (erro) {
        $("#conteudo").html("Erro!");
    });
}
