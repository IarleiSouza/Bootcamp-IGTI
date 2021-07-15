function soma(a, b) {
    return a + b;
}

function Reatangulo(altura, largura){
    this.altura = altura;
    this.largura = laargura;
    this.area = function () {
        return this.altura * this.largura;
    };
}

// arrow funciont

var somaV2 = (a, b) => a + b;

function RetanguloV2(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = largura;
    this.area = () => this.altura * this.largura;
}

var r1 = new RetanguloV2(5, 6);

var imrprimeMensagem = () => console.log("teste");