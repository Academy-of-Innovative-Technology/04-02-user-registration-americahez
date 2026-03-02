document.querySelector(".btn-primary").addEventListener("click", function (event) {

    const first = document.querySelector(".first");
    var last = document.querySelector(".last");
    var email = document.querySelector(".email");
    var acc = document.querySelector(".form-control-input:checked");

    var user = {
        firstName: first,
        lastName: last,
        userEmail: email,
        accType: acc
    };
    localStorage.setItem("user", JSON.stringify(user));

    var u = localStorage.getItem("user");
    console.log(JSON.parse(u));
});