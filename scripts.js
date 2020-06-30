function mostrarImagem(img){
    const imagemGrande=document.getElementById("imagemGrande");
    imagemGrande.src=img.src;
    imagemGrande.parentElement.style.display="block";

}

var a=1;


function tab(){
var b = document.getElementById("num1").value;

for(cont=0; cont<10; cont++){
for(conta=0; conta<=10;conta++){
var result=a*b;
if(conta==10){
document.write(b+"x"+a+"="+result);
document.write("<br>");
a++;
}
}
}
}



function convecao(){
    var t1 = document.getElementById("temp1").value;
    t1 =5/9*(t1-32);
    alert(t1);
    }



    function compara(){

        var n1= document.getElementById("num1").value;
        var n2= document.getElementById("num2").value;
        
        if(n1<n2){
        alert(n2+"é maior que"+n1);
        }
        else if (n2<n1){
        alert(n1+"émaior que"+n2);
        }
        else{
        alert("Os númereros são iguais");
        }
        
        }

