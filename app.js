const components = document.querySelectorAll(".imageDiv");

// components.forEach((component) => {
//   component.addEventListener("click", () => {
//     removeActive();
//     component.classList.add("active");
//   });
// });

// function removeActive() {
//   components.forEach((component) => {
//     component.classList.remove("active");
//   });
// }

components.forEach((component) => {
  component.addEventListener("mouseover", () => {
    removeActive();
    component.classList.add("active");
  });
});

function removeActive() {
  components.forEach((component) => {
    component.classList.remove("active");
  });
}
