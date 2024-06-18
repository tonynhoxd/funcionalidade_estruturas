let valorto = 0; // soma total de todos os produtos


let nome1 = ''; // var pros nomes dos produtos
let valor1 = 0; // var pros preços dos produtos
let quatidade1 = 0; // var pra quantidade dos produtos
let dade1 = 0; // var pro calculo da quantidade
let soma1 = 0; // var pro calculo do valor dos produtos

let nome2 = '';
let valor2 = 0;
let quatidade2 = 0; 
let soma2 = 0;
let dade2 = 0;

let nome3 = '';
let valor3 = 0;
let quatidade3 = 0;
let soma3 = 0;
let dade3 = 0;

let  numeforma = 0; // formatação dos numeros



var vlt = document.getElementById('vlt'); // var pra mostar o valor total dos produtos


if(valorto < 0){ // pra caso o valor total fique negativo 
valorto = 0;
}




function it1(){ // quanto "por no carrinho" for ativo

var car1 = document.getElementById('car1'); // localizar o local do produtos
quatidade1 = document.getElementById('nu1'); // puchando a quantidade
quatidade1 = Number(quatidade1.value); // tranformando o valor da quantidade em numero


if(quatidade1 <= 0) { // checar se a algo no pedio do produto
// caso estiver com nada n ira acontecer nada
}
    
else if(quatidade1 > 0){ // caso estiver com algo 
car1.style.display = 'block'; // reset pro "REMOVER"
   
    
    

valorto = valorto - soma1; // parte do 'REMOVER'
valor1 = valor1 + 3.50; // valor do produto
dade1 = dade1 + quatidade1; // preparo pro calculo do valor



soma1 = valor1 * dade1; // calculo do valor
nome1 = 'cerveja';// nome do produto



valorto = valorto + soma1; // adicionhando o valor dp produtos no valor total
numeforma = Intl.NumberFormat('pt-BR',{ // formatando os numeros
    style: 'currency',
    currency: 'BRL',
}).format(valorto)
vlt.innerHTML = numeforma; // colocando o valor no seu local

numeforma = Intl.NumberFormat('pt-BR',{ // formatando os numeros
    style: 'currency',
    currency: 'BRL',
}).format(soma1)


// inprimindo a "receita do produto" no seu local
car1.innerHTML = ` 
<div class="ui">

    <div class="ifo">
        <strong>Item: `+nome1+`</strong>

        <strong>`+numeforma+`</strong>
    
        <strong>Unidades: `+dade1+`</strong>
    </div>
  

    <p onclick="rev1()">Remover</p>
</div>`;

};

valor1 = 0; // reset do valor para evitar bug
quatidade1 = 0; // reset da quantidade para evitar bug


}

function rev1(){ // quanto "REMOVER" for ativado
    valorto = valorto - soma1; // subitrair o valor do produtos do valor tatol 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma; // mostrando o valor total sem o valor do produto


    soma1 = 0; // reset calculo da quantidade do produto
    dade1 = 0; // reset calculo do valor do produto


    car1.style.display = 'none'; // apagando a inpressão da "receita do produto"
    
}




function it2(){

var car2 = document.getElementById('car2');
quatidade2 = document.getElementById('nu2'); 
quatidade2 = Number(quatidade2.value); 


if(quatidade2 <= 0) {
}
    
else if(quatidade2 > 0){
    car2.style.display = 'block'; 
   
    
    

valorto = valorto - soma2; 
valor2 = valor2 + 9.00; 
dade2 = dade2 + quatidade2; 



soma2 = valor2 * dade2; 
nome2 = 'Jujuba';
    
    
valorto = valorto + soma2;
numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(valorto)
vlt.innerHTML = numeforma;

numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(soma2)


    
    
    car2.innerHTML = `
    <div class="ui">
    
        <div class="ifo" >
            <strong>Item: `+nome2+`</strong>
    
            <strong>`+numeforma+`</strong>
        
            <strong>Unidades: `+dade2+`</strong>
        </div>
      
    
        <p onclick="rev2()">Remover</p>
    </div> `;

};

valor2 = 0;
quatidade2 = 0;

}

function rev2(){
    valorto = valorto - soma2;
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma;

     dade2 = 0;
     soma2 = 0;
        
     car2.style.display = 'none';
    }





 function it3(){
var car3 = document.getElementById('car3');
quatidade3 = document.getElementById('nu3'); 
quatidade3 = Number(quatidade3.value);


if(quatidade3 <= 0) {
}
    
 else if(quatidade3 > 0){
    car3.style.display = 'block'; 

    
    

valorto = valorto - soma3; 
valor3 = valor3 + 7.00; 
dade3 = dade3 + quatidade3; 

   
soma3 = valor3 * dade3; 
nome3 = 'bolacha';
    
    
valorto = valorto + soma3;
numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(valorto)
vlt.innerHTML = numeforma;

numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(soma3)

    

    
    car3.innerHTML = `
    <div class="ui">
    
        <div class="ifo" >
            <strong>Item: `+nome3+`</strong>
    
            <strong>`+numeforma+`</strong>
        
            <strong>Unidades: `+dade3+`</strong>
        </div>
      
    
        <p onclick="rev3()">Remover</p>
    </div> `;

};

valor3 = 0;
quatidade3 = 0;

 }

 function rev3(){    
    valorto = valorto - soma3;
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma;

     dade3 = 0;
     soma3 = 0;
        
     car3.style.display = 'none';
}







