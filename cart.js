

// document.getElementById("login-form").addEventListener("submit", function (e) {
//   e.preventDefault(); // stop form from reloading the page

//   const email = document.getElementById("user-email").value;
//   const password = document.getElementById("user-pass1").value;

//   const userData = {
//       email: email,
//       password: password
//   };

//   localStorage.setItem('userData', JSON.stringify(userData));

//   // Get it back from localStorage
//   const storedUserDataString = localStorage.getItem('userData');
//   if (storedUserDataString) {
//       const storedUserData = JSON.parse(storedUserDataString);
//       const eb = storedUserData.email;
//       const ad = storedUserData.password;

//       console.log("Stored Email:", eb);
//       console.log("Stored Password:", ad);
//   }
// });


function showPass() {
    var x = document.getElementById("login-password");
    if (x.type === "password") {
        x.type = "text";
        x.innerHTML = "show"
    } else {
        x.type = "password";
        x.innerHTML = "hide";
    }

}
// var input = document.getElementById("loginup-email");
// input.addEventListener("keypress", function (event) {
// const input = (event) =>{
//   if (event.key === "Enter") {
//     event.preventDefault();
//     // document.getElementById("login-btn").click();
//   }
// }

// const entr =() =>{
// var input = document.getElementById("login-email");
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     // document.getElementById("login-btn").click();
//   }
// });
// }

// var input = document.getElementById("login-form");
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("login-btttn").click();
//   }
// });






// const confPassword = () =>{
// const confirmPassword = document.getElementById('re-pass').value;
// const password = document.getElementById("user-pass1").value;
// if( confirmPassword !==  password){
//   alert("Enter right pass mate!")
// }
// else{
//   newlnk =document.getElementById("newpge");
//     newlnk.href= "cart-three.html";
// }

// }
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     //   x.style.border = "1px solid red";
//     } else {
//       x.style.display = "block";
//     }
//   }









// function UserRegistration() {
//   let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
//   const userData = {
//       email: document.getElementById('register-email').value,
//       password: document.getElementById('register-pass').value
//   };
//   storedUsers.push(userData);
//   localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
//   window.location.reload();
// }

// function loginUser() {
//   const loginEmail = document.getElementById('login-email').value
//   const loginPass = document.getElementById('login-pass').value
//   if (localStorage.getItem('UsersLogin')) {
//       const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
//       const matchedUser = allStoredUsers.filter(user => {
//           return loginEmail === user.email && loginPass === user.password;
//       })
//       if (matchedUser.length) {
//           console.log('Login successful')
//       } else {
//           console.log('Wrong credentials')
//       }
//   } else {
//       console.log('Wrong credentials') // Don't say "Not a registered user"
//   }
// }



function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    let text;

    const users = JSON.parse(localStorage.getItem("users")) ;

    const matchedUseremail = users.find(user => user.email === email);
    const matchedUserPass = users.find(user => user.password === password);
    // const forPass = users.find(f => f.passw )

    // if (matchedUseremail , matchedUserPass) {
    //     // document.getElementById("myDIV").innerText = "Login successful!";

    //     // newlnk = document.getElementById("newpge");
    //     // newlnk.href = "cart-three.html";
    //     window.location.href = 'cart-three.html';

    // } 
    if (!matchedUserPass){
        text="Not valid"
        // document.getElementById("myDIV").innerText = "Invalid email or password.";
       console.log('invalid pss');
    }
    else if(!matchedUseremail){
        text="Not valid"
    }
    else{
        text="Pass matched";
        window.location.href = 'cart-three.html';
    }
    document.getElementById("foremail").innerHTML= text;
    document.getElementById("forpass").innerHTML= text;
    console.log("working?")
}








document.getElementById("login-btttn").addEventListener("click", function(event){
    event.preventDefault(); 
    if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("login-btttn").click();
          }

});







