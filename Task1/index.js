function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
        if (username == "") {
            showText("user name field cannot be empty");
        } else if (password == "") {
            showText("password field cannot be empty");
        } else if (!(password.match(/[A-Z]/g)) || !(password.match(/[a-z]/g)) || (password.length) < 8) {
            showText("enter the password contains uppercases and lower cases and the length is more than 8");
        } else {
            login();
        }
    

}

function showText(text) {
    document.getElementById("validator-text").innerText = text;
    document.getElementById("validator-text").style.display = 'block';
}





async function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    var logObj = {
        "email": username.value,
        "password": pass.value
    }

    try {
        var lObj = await fetch("https://reqres.in/api/login", {
            method: "post",
            body: JSON.stringify(logObj),
            headers: {
                "content-type": "application/json"
            }
        })

        var logObj = await lObj.json();

        if (logObj.token) {
            showText("login Success");
            localStorage.mytoken = logObj.token;
        } else {
            showText("login failed, bad data")
        }
    } catch (error) {
        console.log(error);
    }
}