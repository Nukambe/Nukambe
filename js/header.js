window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("nav button");
  Array.from(elements).forEach(element => {
    element.onclick = () => {
      const target = document.getElementById(element.dataset.target);
      target.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    }
  });
});
