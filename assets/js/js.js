
document.addEventListener('DOMContentLoaded', function () {

    let today= new Date();
    let year=today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();


    const date = document.querySelectorAll(".date");
    
    const button = document.querySelector("button");

    const anwers = document.querySelectorAll("strong");

    const error = document.querySelectorAll(".error");
    const label = document.querySelectorAll("label");




    

    button.addEventListener('click',function(){

        if(date[0].value>0 && date[0].value<30){
            if(date[1].value>0 && date[1].value<=12){
                if(date[2].value>0 && date[2].value<year) {
                    anwers[0].innerHTML=(year-date[2].value);
                    anwers[1].innerHTML=(month-date[1].value)+1;
                    anwers[2].innerHTML=(day-date[0].value);
                    error[0].innerHTML="";
                    error[1].innerHTML="";
                    error[2].innerHTML="";
                    label[0].classList.remove('red')
                    label[1].classList.remove('red')
                    label[2].classList.remove('red')

                } else{
                    error[2].innerHTML="Ingrese año actual o menor";
                    error[2].classList.add('red');
                    error[1].innerHTML="";
                    label[2].classList.add('red');
                    label[1].classList.remove('red')
    
                } 
            }else{
                error[1].innerHTML="Ingrese mes valido";
                error[1].classList.add('red');
                error[0].innerHTML="";
                label[1].classList.add('red');
                label[0].classList.remove('red')

            }  
        }else{
            error[0].innerHTML="Ingrese dia valido";
            error[0].classList.add('red');
            label[0].classList.add('red');
        }       
        
    

        

        

        // const year=fecha.getFullYear();
        

        // window.alert(year);
    })
})