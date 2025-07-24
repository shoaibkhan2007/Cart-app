



function showPass() {
    var x = document.getElementById("login-password");
    var f =document.getElementById("lik");
    if (x.type === "password") {
      x.type = "text";
      f.innerHTML ="Hide";
    } else {
      x.type = "password";
      f.innerHTML ="Show"
    }
  }
  document.getElementById("lik").addEventListener("click", function (event) {
    event.preventDefault();

});






function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
        //   x.style.border = "1px solid red";
    } else {
        x.style.display = "block";
    }
}






function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    let text;

    const vertxt = JSON.parse(localStorage.getItem("txt"));

    const matchedUseremail = vertxt.find(user => user.email === email && user.password === password);
    console.log(matchedUseremail);
    // const matchedUserPass = users.find(user => user.password === password);
    if (!matchedUseremail) {
        text = "Not valid"
        console.log('invalid pss');
        // return;
    }
    //  if(!matchedUseremail){
    //     text="Not valid"
    // }
    else {
        text = "Pass matched";
        // newlnk = document.getElementById("newpge");
        // newlnk.href = "cart-three.html";
        window.location.href = 'cart-three.html';
    }
    document.getElementById("foremail").innerHTML= text;
    document.getElementById("forpass").innerHTML = text;
    console.log("working?")
}








document.getElementById("login-btttn").addEventListener("click", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("login-btttn").click();
    }

});







