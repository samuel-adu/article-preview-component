const shareBtn = document.querySelector("#share-btn");
const shareTab = document.querySelector("#share-tab");
const card = document.querySelector("#card");

shareBtn.addEventListener("click", function () {
  shareTab.classList.add("share__tab--open");
});
