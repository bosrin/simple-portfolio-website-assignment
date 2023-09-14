// function SendEmail() {
//   Email.send({
//       Host: "smtp.gmail.com",
//       Username: "bosrinbintenasir@gmail.com",
//       Password: "rawnaf3891",
//       To: 'bosrinbintenasir@gmail.com',
//       From: document.getElementById("custom_input3").value,
//       Subject: "New Contact Form Enquiry",
//       Body: "Name: " + document.getElementById("custom_input1").value +
//           "<br> Email: " + document.getElementById("custom_input3").value +
//           "<br> Contact number: " + document.getElementById("custom_input4").value +
//           "<br> Message: " + document.getElementById("custom_textarea").value
//   }).then(
//       message => {
//           alert("Email sent successfully!");
//           // Optionally, you can reset the form here.
//       }
//   ).catch(error => {
//       console.error("Email sending failed:", error);
//       alert("Email sending failed. Please try again later.");
//   });
// }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_c7sn70p";
    const templateID = "template_0gadsuq";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }