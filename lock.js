const PASSWORD = "19082707";

function unlock() {

    let pass = document.getElementById("password").value;

    if (pass === PASSWORD) {

        window.location.href = "love.html";

    } else {

        alert("Wrong Password ❤️");

    }

}

document.getElementById("password").addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        unlock();

    }

});