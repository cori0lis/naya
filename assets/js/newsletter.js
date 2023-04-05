document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const requestOptions = {
        method: "POST",
        body: formData,
      };
  
      fetch("https://script.google.com/macros/s/AKfycbwN7N4wSY5M1drrtZsDKGOOfyTpv3U5PAvW78ENTxkdQCQ1lF_G6sFtF6374J3AnWhV/exec", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.result === "success") {
            // Show a success message or perform any other desired action
          } else {
            // Show an error message or perform any other desired action
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  