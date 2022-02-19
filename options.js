function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({color: "TestMiaucolor"});
}

alert("Mdiwamdiawmd")

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("form").innerText = result.color;
    alert(result.color)
  }

  function onError(error) {
    alert(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
