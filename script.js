const contactForm = document.querySelector("#contact-form");
const notification = document.querySelector("#form-notification");

console.log(contactForm);

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Message sent successfully!");
        notification.classList.add("show");
        setTimeout(function () {
          notification.classList.remove("show");
        }, 4000);
      } else {
        console.log("Something went wrong!");
      }
    })
    .catch(function (error) {
      console.log("Network error:", error);
    });

  console.log(formData);
  console.log("Form Submitted!");
});
