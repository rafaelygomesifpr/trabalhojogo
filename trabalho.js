var ns,n
ns= Math.floor(Math.random() * 100) + 1;
n=parseInt(prompt("Digite um numero:"))
if(n==ns)
{
    alert("Você acertou!")
}
if (n>ns){
   alert("Muito alto!")
}
else if (n<ns)
{
    alert("Muito baixo!")
}
