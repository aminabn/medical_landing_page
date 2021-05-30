function validateForm() {
  
  var fullname = document.forms["form"]["fullname"].value;
  var email = document.forms["form"]["email"].value;
    var phone = document.forms["form"]["phone"].value;
    var birthDate = document.forms["form"]["date"].value;

    if(fullname.length==0 || email.length==0 || phone.length==0 ||birthDate.length==0 ){
    document.getElementById('msg').className = "alert alert-danger alert-dismissible";
    document.getElementById('msg').innerHTML = "Please enter your informations"; }
    else {
     var expPhone=new RegExp("[0-9]+","g");
      var expMail=new RegExp("[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]+\.[a-zA-Z\.\-_]{1,}[a-zA-Z\-_]+","g");
     var testPhone=phone.match(expPhone); 
     var testMail=email.match(expMail);
     if(testMail==null || testPhone==null) {
     document.getElementById('msg').className = "alert alert-danger alert-dismissible";
    document.getElementById('msg').innerHTML = "Please enter correct informations";
                                            }
                                            else{
                                            document.getElementById('msg').className = "alert alert-success alert-dismissible";
    document.getElementById('msg').innerHTML = "Thanks <strong>"+fullname+"</strong> for registering! Soon we will contact you by <strong>"+ email +"</strong> with more information";
                                            }
      
     
    }
    
    
    
    
   
    
}





