
console.log("hello");

const sendMessage = () =>{
  
    const name = document.getElementById("name").value;
    document.getElementById("name").value="";
    const email = document.getElementById("email").value;
    document.getElementById("email").value="";
    const mobile = document.getElementById("mobile").value;
    document.getElementById("mobile").value=0;
    const message = document.getElementById("sendmessage-id").value;
    document.getElementById("sendmessage-id").value="";
   console.log("hello");
    fetch("https://rootapi.herokuapp.com/",{
        method:"post",
        headers : {'Content-type' : 'application/json'},
        body:JSON.stringify({
            name:name,
            email:email,
            mobile:mobile,
            message:message
        })
    })
}

