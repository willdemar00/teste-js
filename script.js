function carregar(){
var msg= window.document.getElementById("mgs")
var img= window.document.getElementById("img")
var data= new Date()
//var hora= data.getHours()
var hora=18
msg.innerHTML=`agora sao ${hora} horas`
if(hora>=0 && hora<12){
    img.src="https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg"
    document.body.style.background='#70C2F5'
}
else if(hora>=12 && hora<18){
    img.src="https://media-cdn.tripadvisor.com/media/photo-s/0f/34/3b/10/fim-de-tarde.jpg"
    document.body.style.background='#FF9654'
}
else{img.src="https://www.aluralingua.com.br/artigos/assets/night.jpg"
document.body.style.background='#2C61B0'}
}