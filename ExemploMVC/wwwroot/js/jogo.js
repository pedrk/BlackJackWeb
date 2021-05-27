var pontos_B = 0;
var pontos_A = 0;

var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");


function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogada(isJogadorUm) {
    var cartas1 = document.getElementById("cartas1");
    var cartas2 = document.getElementById("cartas2");
    let label1 = document.getElementById("jogador1");
    let label2 = document.getElementById("jogador2");
    if (isJogadorUm) {
        let valorAleatorioGerado = this.valorAleatorio();
        $(cartas1).attr("src", '/images/' + valorAleatorioGerado + '.png');
        switch (valorAleatorioGerado) {
            case 1: pontos_A += 1; break;
            case 2: pontos_A += 2; break;
            case 3: pontos_A += 3; break;
            case 4: pontos_A += 4; break;
            case 5: pontos_A += 5; break;
            case 6: pontos_A += 6; break;
            case 7: pontos_A += 7; break;
            case 8: pontos_A += 8; break;
            case 9: pontos_A += 9; break;
            case 10: pontos_A += 10; break;
            case 11: pontos_A += 11; break;
            case 12: pontos_A += 12; break;
            case 13: pontos_A += 13; break;
        }
        label1.innerHTML = `${pontos_A}`;
        if (pontos_A >= 21) {
            parar1();
        }
    }
    else {
        let valorAleatorioGerado = valorAleatorio();
        $(cartas2).attr("src", '/images/' + valorAleatorioGerado + '.png');
        switch (valorAleatorioGerado) {
            case 1: pontos_B += 1; break;
            case 2: pontos_B += 2; break;
            case 3: pontos_B += 3; break;
            case 4: pontos_B += 4; break;
            case 5: pontos_B += 5; break;
            case 6: pontos_B += 6; break;
            case 7: pontos_B += 7; break;
            case 8: pontos_B += 8; break;
            case 9: pontos_B += 9; break;
            case 10: pontos_B += 10; break;
            case 11: pontos_B += 11; break;
            case 12: pontos_B += 12; break;
            case 13: pontos_B += 13; break;
        }
        label2.innerHTML = `${pontos_B}`;
        if (pontos_B <= 21) {
            if (pontos_B == 21) {
                resultado();
            }
        }
        else
            resultado();
    }

}

function iniciar() {
    let btn_iniciar = document.getElementById("btn_iniciar");
    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_reiniciar = document.getElementById("btn_reiniciar");

    btn_reiniciar.removeAttribute('disabled', 'disabled');
    btn_jogador1.removeAttribute('disabled', 'disabled');
    btn_parar1.removeAttribute('disabled', 'disabled');
    btn_parar1.removeAttribute('disabled', 'disabled');
    btn_iniciar.setAttribute('disabled', 'disabled');
}

function reiniciar() {
    let label1 = document.getElementById("jogador1");
    let label2 = document.getElementById("jogador2");
    let label = document.getElementById("resultadoFinal");
    var cartas1 = document.getElementById("cartas1");
    var cartas2 = document.getElementById("cartas2");

    $(cartas1).attr("src", '/images/' + 0 + '.png');
    $(cartas2).attr("src", '/images/' + 0 + '.png');

    btn_jogador1.removeAttribute('disabled', 'disabled');
    btn_parar1.removeAttribute('disabled', 'disabled');

    btn_jogador2.setAttribute('disabled', 'disabled');
    btn_parar2.setAttribute('disabled', 'disabled');

    label1.innerHTML = "0";
    label2.innerHTML = "0";
    label.innerHTML = '';
    pontos_A = 0;
    pontos_B = 0;
}

function parar1() {
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function parar2() {

    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_jogador2 = document.getElementById("btn_jogador_2");
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    resultado();
}


function resultado() {
    let label = document.getElementById("resultadoFinal");
    if (pontos_A <= 21 && pontos_B <= 21) {
        if (pontos_A == pontos_B) {
            label.innerHTML = "Empate";
        }
        if (pontos_A > pontos_B) {
            label.innerHTML = "Jogador 1 GANHOU!";
        }
        else {
            label.innerHTML = "Jogador 2 GANHOU!";
        }
    }

    if (pontos_A > 21 && pontos_B <= 21) {
        label.innerHTML = "Jogador 2 GANHOU!";
    }
    if (pontos_A <= 21 && pontos_B > 21) {
        label.innerHTML = "Jogador 1 GANHOU!";
    }
    if (pontos_A > 21 && pontos_B > 21) {
        label.innerHTML = "Derrota Dupla";
    }

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
}