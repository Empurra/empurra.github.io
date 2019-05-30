$(document).ready(function () {

  console.log("Vai um Empurrão?");

  //Configurações da aplicação!
  var tema = 0;
  var imagens = [
    "img/pedra.png",
    "img/papel.png",
    "img/tesoura.png",
    "img/proibido.png"
  ];

  //Setando as imagens
  $("#bot").attr('src', imagens[3]);
  $("#pedra").attr('src', imagens[0]);
  $("#papel").attr('src', imagens[1]);
  $("#tesoura").attr('src', imagens[2]);
  $("#score").fadeIn('slow');

  console.log("Jogo iniciado!");

  function jogar(escolhaUsuario) {
    var vezesJogadas = parseInt($('#played').html(), 10);
    $('#played').html(++vezesJogadas);

	//teste jogo = 3
	// alert("vezesJogadas: " + vezesJogadas);
	
	if (vezesJogadas == 4)
	{
		
		var vitorias_final = $('#vitorias').html();
		var derrotas_final = $('#derrotas').html();
		var empates_final = $('#empates').html();
		
		// alert("vitorias_final: " + vitorias_final);
		// alert("derrotas_final: " + derrotas_final);
		// alert("empates_final: " + empates_final);
		
		//empate = alert("Fim Jogo - Pensa Melhor!");
		//vitoria = alert("Fim Jogo - Segue com isso :) ");
		// derrota = alert("Fim Jogo - Muda de ideia!");
		
		if (vitorias_final > derrotas_final || vitorias_final > empates_final) 
		{
			// $('#resultado').text("JOGADOR: " + vitorias_final + " | WEB: " + derrotas_final + " | EMPATE: " + empates_final + " -> RESULTADO: Vitória - JOGADOR");
			alert("Fim Jogo - Segue com isso :) ");
		}
		
		else if (vitorias_final < derrotas_final || derrotas_final > empates_final) 
		{
			// $('#resultado').text("JOGADOR: " + vitorias_final + " | WEB: " + derrotas_final + " | EMPATE: " + empates_final + " -> RESULTADO: Vitória - WEB");
			alert("Fim Jogo - Pensa Melhor!");	
		}
			
		else if (empates_final > vitorias_final || derrotas_final > vitorias_final)
		{
			// $('#resultado').text("JOGADOR: " + vitorias_final + " | WEB: " + derrotas_final + " | EMPATE: " + empates_final + " -> RESULTADO: EMPATE");
			alert("Fim Jogo - Muda de ideia!");	
		}
		else 
		{
			// $('#resultado').text("JOGADOR: " + vitorias_final + " | WEB: " + derrotas_final + " | EMPATE: " + empates_final + " -> RESULTADO: EMPATE");
			alert("Fim Jogo - Muda de ideia!");	
		}
		
		zerar();
	}
	else {
		//Gerar um número aleatório e setar a imagem
		var escolhaMaquina = String(Math.random() * 3).charAt(0);
		$("#bot").attr('src', imagens[escolhaMaquina]);

		//Regras básicas do Pedra, Papel e Tesoura
		if (escolhaUsuario == 0 && escolhaMaquina == 2 || escolhaUsuario == 1 && escolhaMaquina == 0 || escolhaUsuario == 2 && escolhaMaquina == 1) {
		  // $('#jogo').text("Segue com isso:)");
		  var vitorias = parseInt($('#vitorias').html(), 10);
		  $('#vitorias').html(++vitorias);
		  // console.log("Segue com isso:)");
		}
		if (escolhaMaquina == 0 && escolhaUsuario == 2 || escolhaMaquina == 1 && escolhaUsuario == 0 || escolhaMaquina == 2 && escolhaUsuario == 1) {
		  // $('#jogo').text("Muda de ideia!");
		  var derrotas = parseInt($('#derrotas').html(), 10);
		  $('#derrotas').html(++derrotas);
		  // console.log("Muda de ideia!");
		}
		if (escolhaUsuario == escolhaMaquina) {
		  // $('#jogo').text("Pensa Melhor!");
		  var empates = parseInt($('#empates').html(), 10);
		  $('#empates').html(++empates);
		  // console.log("Pensa Melhor!");
		}
		
	}
	
  }
  //Função que faz o jogo zerar
  function zerar() {
    if ($("#played").html() == "0") {
      return null;
    }
    else {
      $("#played").html(0);
      //$("#jogo").html("");
      console.log("Pontuação zerada!");
      //Setar a imagem padrão
      $("#bot").attr('src', imagens[3]);
      $('.score').html("0");
      return zerar;
    }
  }

  
  //Eventos
  $("#btn1").click(function () {
    jogar(0);
  });
  $("#btn2").click(function () {
    jogar(1);
  });
  $("#btn3").click(function () {
    jogar(2);
  });
  $("#zerar").click(function () {
    if (zerar() == null) {
    }
    else {
      setTimeout(zerar, 1000);
    }
  });
  $("#tema").click(function () {
    setTimeout(mudarTema, D1000);
  });
});
