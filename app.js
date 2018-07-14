const sendMessage = (event) =>{
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;
    console.log(document.getElementById("sendmessage").value);
    console.log("hey "+name);

    fetch("https://roopam527.github.io/mail_api/",{
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