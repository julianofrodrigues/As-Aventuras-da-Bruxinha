class TelaInicial{
    constructor(){

    }
    draw(){
        this._imagemDeFundo();
    }
    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
        this._texto();
        this._botao();
    }
    _texto(){
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras da', width/2, height / 3);
        textSize(150);
        text('Bruxinha', width /2, height / 5 * 3)
    }
    _botao(){
        botaoGerenciador.y = height/7 * 5;
        botaoGerenciador.draw();
    }
}