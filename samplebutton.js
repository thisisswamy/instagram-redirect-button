// Specify the Instagram handle
var instagramHandle = "my_web_app_instagram,";

// Create a button element
var button = document.createElement("button");
button.innerHTML = "Go to Instagram";

// Add an event listener to the button
button.addEventListener("click", function() {
  // Redirect to the Instagram handle
  window.location.href = "https://www.instagram.com/" + instagramHandle;
});

// Append the button to the document body
document.body.appendChild(button);
