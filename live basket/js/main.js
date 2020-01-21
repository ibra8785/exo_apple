var status_email= 0; var status_tel = 0; var status_nom = 0; var status_prenom = 0;
var status_username = 0; var status_pass1 = 0; var status_pass2 = 0;
var status_pass1_1 = 0; var pass1_value; var pass1_1_value;

var email = document.querySelector('#email_bas');
var reGex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    email.addEventListener('keyup', function(){
        var long = this.value.length;
        var mail_test = reGex_email.test(this.value);
        if(!mail_test || long < 8){
             this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
             this.style.border ="1px solid red";
             status_email= 0;
             
         }
         if(mail_test && long >= 8){
             this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
             this.style.border ='1px solid #46c77a';
             status_email = 1;  
    
         }
    })



/************************ */
var tel = document.querySelector('#tel');
var reGex_tel = /[^0-9]/;

tel.addEventListener('keyup', function(e){
 var tel_test = this.value;
 longs = tel_test.length;

 var text_reg = reGex_tel.test(tel_test);

 if(longs !== 8 ||  text_reg){
     this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
     this.style.border ="1px solid red";
     status_tel = 0; 
 }
 if(longs == 8 && !text_reg){
    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
    this.style.border ='1px solid #46c77a';  
    status_tel = 1; 
 }
 
})
/*************************************** */
var pass = document.querySelector('.pass_1');
    pass.addEventListener('keyup', function(){
        if(this.value.length < 4){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_pass1 = 0;
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';  
         status_pass1 = 1; 
         pass1_value = this.value;

        }
    })
    var pass = document.querySelector('.pass_1_1');
    pass.addEventListener('keyup', function(){
        if(this.value.length < 4){
         this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
         this.style.border ="1px solid red";
         status_pass1_1 = 0;
        }
        else{
         this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
         this.style.border ='1px solid #46c77a';  
         status_pass1_1 = 1; 
         pass1_1_value = this.value;
        }
    })

    var pass2 = document.querySelector('.pass_2');
    pass2.addEventListener('keyup', function(){
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
    /***************************form du haut form2 */
    var un = document.querySelector(".un");///noom form2
    var reGex_name = /[^A-Za-z]/;        
        un.addEventListener('keyup', function(e){
            var long = this.value.length;
            var nom_val = reGex_name.test(this.value);
            if(long <= 3 || nom_val){
                this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                this.style.border ="1px solid red";
                status_nom = 0;
            }if(long >= 4 && !nom_val){
                this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                this.style.border ='1px solid #46c77a';
                status_nom = 1; 
            }
        })



        var deux = document.querySelector(".deux");///prenoom form2

        var reGex_name = /[^A-Za-z]/;
            deux.addEventListener('keyup', function(){
                var long = this.value.length;
                var nom_val = reGex_name.test(this.value);
                if(long < 4 || nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_prenom = 0;
                }if(long >= 4 && !nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                    status_prenom = 1; 
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

   var reGex_name = /[^A-Za-z]/;
            username.addEventListener('keyup', function(){
                var long = this.value.length;
                var nom_val = reGex_name.test(this.value);
                if(long < 4 || nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/rouge.png" >';
                    this.style.border ="1px solid red";
                    status_username = 0;
                }if(long >= 4 && !nom_val){
                    this.nextElementSibling.innerHTML = ' <img src="img/vert.png" >';
                    this.style.border ='1px solid #46c77a';
                    status_username = 1; 
                }
            })