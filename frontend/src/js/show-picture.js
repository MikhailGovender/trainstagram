// app.js
document.getElementById("fetchOneButton").addEventListener("click", async function fetchData() {
  try {
    const response = await fetch(`/user/post/${1}`);
    const data = await response.json();

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear previous content

    console.log(data);
    data.post = [data.post];

    data.post.forEach((item) => {
      const article = document.createElement("article");

      const h1 = document.createElement("h1");
      h1.textContent = item.Caption;

      const decodedImage = atob(item.Image);

      // Convert the decoded string into an ArrayBuffer
      const buffer = new Uint8Array(decodedImage.length);
      for (let i = 0; i < decodedImage.length; i++) {
        buffer[i] = decodedImage.charCodeAt(i);
      }

      // Convert the ArrayBuffer to a Blob
      const imageBlob = new Blob([buffer], { type: 'image/png' });

      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(imageBlob);
      const img = document.createElement("img");
      img.src = imageUrl;

      article.appendChild(h1);
      article.appendChild(img);

      resultContainer.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

document.getElementById("fetchAllButton").addEventListener("click", async function fetchData() {
  try {
    const response =  await fetch("/user/post");
    const data = await response.json();

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear previous content

    console.log(data);

    data.post.forEach((item) => {
      const article = document.createElement("article");

      const h1 = document.createElement("h1");
      h1.textContent = item.Caption;

      const decodedImage = atob(item.Image);

      // Convert the decoded string into an ArrayBuffer
      const buffer = new Uint8Array(decodedImage.length);
      for (let i = 0; i < decodedImage.length; i++) {
        buffer[i] = decodedImage.charCodeAt(i);
      }

      // Convert the ArrayBuffer to a Blob
      const imageBlob = new Blob([buffer], { type: 'image/png' });

      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(imageBlob);
      const img = document.createElement("img");
      img.src = imageUrl;

      article.appendChild(h1);
      article.appendChild(img);

      resultContainer.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

document.getElementById("fetchFeedButton").addEventListener("click", async function fetchData() {
  try {
    const response =  await fetch("/post-feed");
    const data = await response.json();

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear previous content

    console.log(data);

    data.post.forEach((item) => {
      const article = document.createElement("article");

      const h1 = document.createElement("h1");
      h1.textContent = item.Caption;

      const decodedImage = atob(item.Image);

      // Convert the decoded string into an ArrayBuffer
      const buffer = new Uint8Array(decodedImage.length);
      for (let i = 0; i < decodedImage.length; i++) {
        buffer[i] = decodedImage.charCodeAt(i);
      }

      // Convert the ArrayBuffer to a Blob
      const imageBlob = new Blob([buffer], { type: 'image/png' });

      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(imageBlob);
      const img = document.createElement("img");
      img.src = imageUrl;

      article.appendChild(h1);
      article.appendChild(img);

      resultContainer.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

