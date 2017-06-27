function carregaInicio(inicio){
    var _url;
    if(inicio == "inicio"){
        _url = "pages/inicio.html";
    }else{}
    
    $.ajax({
       url: _url 
    }).done(function(inicio){
        $("#conteudo").html(inicio);
    }).fail(function(erro){
        $("#conteudo").html("Página Inexistente!");
    });
};

function carregaCadastro(cadastro){
    var _url;
    if(cadastro == "cadastro"){
        _url = "pages/cadastro.html";
    }else{}
    
    $.ajax({
       url: _url 
    }).done(function(cadastro){
        $("#conteudo").html(cadastro);
    }).fail(function(erro){
        $("#conteudo").html("Página Inexistente!");
    });
};

function carregaListagem(listagem){
    var _url;
    if(listagem == "listagem"){
        _url = "pages/listagem.html";
    }
    
    $.ajax({
       url: _url 
    }).done(function(listagem){
        $("#conteudo").html(listagem);
    }).fail(function(erro){
        $("#conteudo").html("Página Inexistente!");
    });
};

function carregaBusca(busca){
    var _url;
    if(busca == "busca"){
        _url = "pages/busca.html";
    }
    
    $.ajax({
       url: _url
    }).done(function(busca){
        $("#conteudo").html(busca);
    }).fail(function(erro){
        $("#conteudo").html("Página Inexistente!");
    });
};