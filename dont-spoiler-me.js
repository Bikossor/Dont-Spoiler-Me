const runExtension = () => {
  console.log("Don't spoiler me");

  const hideThis = ["Horizon Forbidden West"];

  // Get all GameLinks
  const totalGameLinkElements = [
    ...document.querySelectorAll("[data-test-selector='GameLink']"),
  ];

  console.log(totalGameLinkElements);

  const totalThumbnailElements = [
    ...document.querySelectorAll(".tw-hover-accent-effect img"),
  ]


  totalGameLinkElements.forEach((gameLinkElement) => {
    if (hideThis.includes(gameLinkElement.innerText)) {
      return;
    }

    const gameCard =
      gameLinkElement.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;

    const thumbnail = gameCard.querySelectorAll("img")[1];
    thumbnail.style.filter = "blur(0)";
    console.log(thumbnail);
  });

  // Check if GameLink contains a certain text
  // document..forEach(gameLink => console.log(gameLink.innerText === ""));
};



// Run the extension when the website is done loading
document.addEventListener("DOMContentLoaded", setTimeout(() => {
  runExtension();
}, 500));
