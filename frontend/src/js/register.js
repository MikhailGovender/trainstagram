const form = document.getElementById("register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.target);

  fetch("/register", { method: "post", body: data })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("Success!");
        window.location.href = "/home";
      }
    })
    .catch((error) => {
      console.log(error);
      alert("DO YOU EVEN EXIST??");
    });
});
