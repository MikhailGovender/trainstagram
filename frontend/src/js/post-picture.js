const picturePreview = document.getElementById("picture-preview");
const form = document.getElementById("post-picture");

const updatePreview = (updateEvent) => {
  const target = updateEvent.target;
  if (target.files && target.files[0]) {
    const reader = new FileReader();

    reader.onload = (loadEvent) => {
      picturePreview.setAttribute("src", loadEvent.target.result);
      picturePreview.classList.remove("hidden");
    };

    reader.readAsDataURL(target.files[0]);
  }
};

form.addEventListener("submit", async (formEvent) => {
  formEvent.preventDefault();
  const img = document.getElementById("new-picture");
  const tagline = document.getElementById("picture-tagline");
  const formData = new FormData(formEvent.target);
  if ((img.files.length > 0 && img.files.length <= 1) && tagline.value.length > 0) { 
    fetch("/post", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        img.value = null;
        picturePreview.removeAttribute("src");
        picturePreview.classList.add("hidden");
        tagline.value = "";
        alert("Success!");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Looks like your train got derailed! We'll choo-choo-try again to get it back on track!")
    });
    
  } else {
    alert("Please add an image and/or tagline.");
  }

});

document
  .getElementById("new-picture")
  .addEventListener("change", updatePreview);


  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  