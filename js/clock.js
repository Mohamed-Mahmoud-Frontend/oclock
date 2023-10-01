function clock (){

    let date = new Date();
    let hours = date.getHours();
    let minuit = date.getMinutes();
    let second =date.getSeconds();
    let flag = "PM";


    if(hours == 0){
hours=12
    }
    if(hours > 12){
        hours = hours - 12
        flag= "AM"
    }
            if(minuit < 10){
                    minuit = "0" + minuit
                }
                if(hours < 10){
                    hours = "0" + hours
                }
                if(second < 10){
                    second = "0" + second
                }
    
    document.querySelector('.clock').innerHTML = `${hours} : ${minuit} : ${second}  ${flag}`;



        setTimeout(function(){
            clock()
        }, 1000)
}
clock()