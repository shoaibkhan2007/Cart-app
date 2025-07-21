// const store = [{}]

// const email = document.getElementById("user-email").value;
// const password = document.getElementById("user-pass").value;
// const fstname =document.getElementById("first-name").value;
// const lastname = document.getElementById("second-name").value;
// const repass =document.getElementById("re-pass").value;

// email.push(store);
// password.push(store);
// fstname.push(store);
// lastname.push(store);
// repass.push(store);












// document.getElementById("login-form").addEventListener("submit", function (e) {
//   e.preventDefault(); // stop form from reloading the page

//   const email = document.getElementById("user-email").value;
//   const password = document.getElementById("user-pass").value;
//   const fstname =document.getElementById("first-name").value;
//   const lastname = document.getElementById("second-name").value;
//   const repass =document.getElementById("re-pass").value;

//   const userSignIn = {
//     firstname :fstname,
//     secondname:lastname,
//       email: email,
//       password: password,
//       retypepass :repass
//   };


//   localStorage.setItem('UserSignIn', JSON.stringify(userSignIn));


//   const storedUserDataString = localStorage.getItem('UserSignIn');
//   if (storedUserDataString) {
//       const storedUserData = JSON.parse(storedUserDataString);
//       const eb = storedUserData.email;
//       const ad = storedUserData.password;
//       const cb =storedUserData.firstname;
//       const lb =storedUserData.secondname;
//       const vb =storedUserData.retypepass;


//       console.log("First namar:", cb);
//       console.log("last name:", lb);
//       console.log("Stored Email:", eb);
//       console.log("Stored Password:", ad);
//       console.log("re pass:", vb);


//   }
// });

const  showPass = () => {
  var x = document.getElementById("signup-password");
  if (x.type === "password") {
    x.type = "text";
    x.innerHTML = "show"
  } else {
    x.type = "password";
    x.innerHTML = "hide";
  }

}

// var input = document.getElementById("signup-email");
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("login-btn").click();
//   }
// });


document.getElementById("login-btttn").addEventListener("click", function(event){
  event.preventDefault(); 
  if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("login-btttn").click();
        }

});

// const checkPassword = () => {
//   password1 = document.getElementById("user-pass").value;
//   password2 = document.getElementById("re-pass").value;

//   if (password1 == '')
//       alert("Please fill out the form!");

//   else if (password2 == '')
//       alert("Please enter confirm password");
  
//   else if (password1 != password2) {
//       alert("\nPassword did not match: Please try again...")
//   }

//   else {
//     newlnk =document.getElementById("nextpge");
//     newlnk.href= "cart.html";
//   }
// }


function signUp() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const msg = document.getElementById("myDIV");
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    msg.innerText = "Please fill all fields.";
    return;
  }
  if (password !== confirmPassword) {
    msg.innerText = "Passwords do not match.";
    return;
  }
  let storedUsers = localStorage.getItem("txt");
  let users = storedUsers ? JSON.parse(storedUsers) : [];
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    msg.innerText = "User with this email already exists.";
    return;
  }
  const newUser = {
    firstName,
    lastName,
    email,
    password
  };
  users.push(newUser);
  localStorage.setItem("txt", JSON.stringify(users));
  msg.innerText = "User registered successfully!";
  // Optional: clear fields
  // document.getElementById("first-name").value = '';
  // document.getElementById("last-name").value = '';
  // document.getElementById("signup-email").value = '';
  // document.getElementById("signup-password").value = '';
  // document.getElementById("confirm-password").value = '';
}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}