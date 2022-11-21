let checkname = false;
   let checkemail = false;
   let checkphone = false;
   let checkmessage = false;





 function checkname1() {
   let namevalue = $("#name").val()
   let nameRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (namevalue == "") {
     $("#error1").html("Name is mandatory!")
   }
   else if(namevalue.length<3 || namevalue.length>20 ){
     checkname = true
     $("#error1").html("please enter valid name")
   }
   else if (namevalue.match(nameRegex)) {
     checkname = true
     $("#error1").html("")
   }
 }

 function checkemail1() {
   let emailvalue = $("#email").val()
   let emailRegex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
   if (emailvalue == "") {
     $("#error2").html("Email is mandatory!")
   }
   else if (emailvalue.match(emailRegex)) {
     checkemail = true
     $("#error2").html("")
   }
   else {
     $("#error2").html("Invalid email!")
     checkemail = false
   }
 }
 $('#email').keypress(function( email ) {
   if(email.which === 32) 
   return false;
   });

 

 function checkphone1() {
   let phonevalue = $("#phone").val()
   let phoneRegex = /[0-9]{10}/;
   let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (phonevalue == "") {
     $("#error3").html("Mobile number is mandatory!")
   }
   else if (phonevalue.match(phoneRegex)) {
     checkphone = true
     $("#error3").html("")
   }
   else if(phonevalue.match(messageRegex)){
     checkphone=false
     $("#error3").html("please enter a valid mobile number")
   }
   else if(phonevalue.length==10){
     checkphone = true
     $("#error3").html("")
   }
   else{
     $("#error3").html("please enter 10 digit number")
     checkphone=false
   }
 }
 


 function checkmessage1() {
   let messagevalue = $("#exampleFormControlTextarea1").val()
   let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
   if (messagevalue == "") {
     $("#error4").html("Enter Something!")
   }
   else if (messagevalue.match(messageRegex)) {
     checkmessage = true
     $("#error4").html("")
   }
   else {
     $("#error4").html("")
     checkmessage = false
   }

 }

 $('#name').keypress(function(event){
  if (
      !event.key.match(/^[A-Za-z ]+$/) ||
      (this.value.slice(-1) == ' ' && event.key == ' ')||
      (this.value == '' && event.key == ' ')
    ) {
      event.preventDefault()
    }
   })


 $(document).ready(function () {
    $("#name").keyup(function () {
     checkname1()
    })

    $("#email").keyup(function () {
     checkemail1()
    })

    $("#phone").keyup(function () {
     checkphone1()
    })
    $("#exampleFormControlTextarea1").keyup(function () {
     checkmessage1()
    })

   });
// form submit
$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxGsQK3X1RIOWIsHBRouHw_kRKevXIf7gJUYrueVkLVtQEJltkqeXHV-TP6IiUKxPJw/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("You have registered successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})

// back to top

// Get the button
let mybutton = document.getElementById("backtop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 