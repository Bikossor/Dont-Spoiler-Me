//#region Utils

const getCurrentUrl = () => {
  return new URL(window.location.href);
};

//#endregion

const runTwitch = () => {
  console.debug("Mode: twitch");
};

const runYouTube = () => {
  console.debug("Mode: youtube");

  const elements = [
    ...document.querySelectorAll("div#contents.ytd-shelf-renderer")
  ];

  elements.forEach(element => {

    const title = element.querySelector("a#video-title yt-formatted-string");
    const thumbnail = element.querySelector("ytd-thumbnail img#img");


    const isMatch = /Horizon Forbidden West/i.test(title.innerText);

    if (!isMatch) {
      thumbnail.style.filter = "blur(0)";
    }

  });

  // elements.forEach(element => console.debug(element.querySelectorAll("a#video-title")))

};

const runExtension = () => {
  console.log("Don't spoiler me");

  const currentUrl = getCurrentUrl()

  if (/youtube/i.test(currentUrl.host)) {
    runYouTube();
    return;
  }

  if (/twitch/i.test(currentUrl.host)) {
    runTwitch();
    return;
  }

  const hideThis = ["Horizon Forbidden West"];

  // Get all GameLinks
  const totalGameLinkElements = [
    ...document.querySelectorAll("[data-test-selector='GameLink']"),
  ];

  const shelfCards = [
    ...document.querySelectorAll("div.tw-tower article.Layout-sc-nxg1ff-0"),
  ]

  shelfCards.forEach(shelfCard => console.log(shelfCard.querySelectorAll("[data-test-selector='GameLink']")))

  totalGameLinkElements.forEach((gameLinkElement) => {
    if (hideThis.includes(gameLinkElement.innerText)) {
      return;
    }

    const gameCard =
      gameLinkElement.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;

    const thumbnail = gameCard.querySelectorAll("img")[1];
    thumbnail.style.filter = "blur(0)";
  });

  // Check if GameLink contains a certain text
  // document..forEach(gameLink => console.log(gameLink.innerText === ""));
};



// Run the extension when the website is done loading
document.addEventListener("DOMContentLoaded", setTimeout(() => {
  runExtension();
}, 500));
