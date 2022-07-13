const shareBtn = document.querySelector("#share-btn");
const shareTab = document.querySelector("#share-tab");
const card = document.querySelector("#card");

shareBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  shareTab.classList.add("share__tab--open");
});

shareTab.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
});

card.addEventListener("click", function () {
  if (shareTab.classList.contains("share__tab--open")) {
    shareTab.classList.remove("share__tab--open");
  }
});
