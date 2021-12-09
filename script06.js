
function calcular(){

    var tempoDeestudo = document.getElementById('txthr')
    var diasDeestudo= document.getElementById('txtdia')
    var tempo= Number(tempoDeestudo.value)
    var dia= Number(diasDeestudo.value)
    var res= document.querySelector('div#resultado')
    var conta = (tempo+dia)/2
    
if (conta <=10 ){
    res.innerHTML= 'Precisa se dedicar mais ...'

} else if (conta >=11 && conta <=20) {
  res.innerHTML='Voce esta bem continue assim! '
    
} else { 
  res.innerHTML='Parabéns voce esta estudando bastante !! Voce vai longe !!'
    
}  
    
}

    

    
    
        
        
    

        
