let celsiusinput=document.querySelector('#celsius >input');
let fahrenheitinput=document.querySelector('#fahrenheit >input');
let kelvininput=document.querySelector('#kelvin >input');
let btn=document.querySelector('.button button');



function roundNumber(number)
{
    return Math.round(number*100)/100;
};
celsiusinput.addEventListener('input',function(){
    let ctemp= parseFloat(celsiusinput.value);
    let ftemp= (ctemp*(9/5))+32;
    let ktemp= ctemp +273.15;
    fahrenheitinput.value =roundNumber(ftemp);
    kelvininput.value=roundNumber(ktemp);
})
fahrenheitinput.addEventListener('input',function(){
    let ftemp= parseFloat(fahrenheitinput.value);
    let ctemp= (ftemp-(32))*(5/9);
    let ktemp= (ftemp-32)*(5/9) +273.15;
    celsiusinput.value =roundNumber(ctemp);
    kelvininput.value=roundNumber(ktemp);
})
kelvininput.addEventListener('input',function(){
    let ktemp= parseFloat(kelvininput.value);
    let ctemp= (ktemp-273.15);
    let ftemp= (ktemp-273.15)*(9/5)+32;
    celsiusinput.value =roundNumber(ctemp);
    fahrenheitinput.value=roundNumber(ftemp);
})
btn.addEventListener('click',()=>{
    celsiusinput.value="";
    fahrenheitinput.value="";
    kelvininput.value="";
})