function save(){
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    if(isNaN(email) && isNaN(password)){
        console.log("A egyik mező rossz!")
    }
    else{
        localStorage.setItem("E-mail",email);
        localStorage.setItem("Jelszó",password);
    }
}