window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads > div");
  const visuals = document.querySelector(".visuals");

  const colors = ["#f6f6", "#d26", "green", "orange", " #e5e", "aqua"];

  pads.forEach((pads, index) => {
    pads.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });
  const createBubble = i => {
    const bubble = document.createElement("div");
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visuals.removeChild(this);
    });
  };
});
