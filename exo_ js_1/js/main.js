var status_email= 0; var status_tel = 0; var status_nom = 0; var status_prenom = 0;
var status_username = 0; var status_pass1 = 0; var status_pass2 = 0;

var email = document.querySelector('#email_bas');
email.addEventListener('blur', function(){
     var mail_test = this.value;
     var reGex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
     if(!reGex_email.test(mail_test)){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_email= 0;
         
     }else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';
         status_email = 1;  

     }

})



/************************ */
var tel = document.querySelector('#tel');
tel.addEventListener('blur', function(){
 var tel_test = this.value;
 var reGex_tel = /[^0-9]/;
 if(tel_test.length != 8){
     this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
     this.style.border ="1px solid red";
 }else{
     if(reGex_tel.test(tel_test)){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_tel = 0;
      }else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';
         status_tel = 1;
      }
 }
 
})
/*************************************** */
var pass = document.querySelector('.pass_1');
    pass.addEventListener('blur', function(){
        if(this.value.length < 4){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_pass1 = 0;
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';  
         status_pass1 = 1; 
        }
    })

    var pass2 = document.querySelector('.pass_2');
    pass2.addEventListener('blur', function(){
        if(this.value.length < 4){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';   
        }
    })
    /***************************form du haut form2 */
    var un = document.querySelector(".un");///noom form2

        un.addEventListener('blur', function(){
            var long = this.value.length;
            if(long < 3){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                this.style.border ="1px solid red";
            }else{
                var reGex_name = /[^A-Za-z]/;

                var nom_val = reGex_name.test(this.value);
                if(nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_nom = 0;
                }
                else{
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                    status_nom = 1; 
                }
            }     
        })

        var deux = document.querySelector(".deux");///prenoom form2

        deux.addEventListener('blur', function(){
            var long = this.value.length;
            if(long < 3){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                this.style.border ="1px solid red";
            }else{
                var reGex_name = /[^A-Za-z]/;

                var nom_val = reGex_name.test(this.value);
                if(nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_prenom = 0; 
                }
                else{
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                    status_prenom = 1; 
                }
            }     
        })
        /*********************************************form du bas   form1 */
        var pass2 = document.querySelector('.pass_2');
        pass2.addEventListener('blur', function(){
        if(this.value.length < 4){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_pass2 = 0;
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';  
         status_pass2 = 1; 
        }
    })


    var username = document.querySelector(".username");///noom form2

    username.addEventListener('blur', function(){
        var long1 = this.value.length;
        if(long1 < 3){
            this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
            this.style.border ="1px solid red";
        }else{
            var reGex_names = /[^A-Za-z]/;

            var nom_val = reGex_names.test(this.value);
            if(nom_val){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                this.style.border ="1px solid red";
                status_username = 0;
            }
            else{
                this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                this.style.border ='1px solid #46c77a';
                status_username = 1; 
            }
        }     
    })