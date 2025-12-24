function validatesignup(){
    let name =
    document.getElementById("name").value;
    let email=
    document.getElementById("email").value;
    let pass=
     document.getElementById("password").value;
} let cpass=
     document.getElementById("confirm_password").value;
     if(name == ""|| email === ""|| pass ====""|| cpass === ""){
        alert("all fields are required!")
        return false;
     }
     alert("signup successful");
     return true;
     
    