function Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;
   /* this.area = calculadora;*/
    this.area = function (){
    return this.altura * this.largura;
    }
};

/*function calculadora() {
    return this.altura * this.largura;
}*/

