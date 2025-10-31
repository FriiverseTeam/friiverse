document.getElementById("tutorial-close").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("tutorial-window").style.display = "none";
});
const tabNews = document.getElementById("tab-header-my-news");
const tabFriends = document.getElementById("tab-header-friend-request");
const list = document.getElementById("news-list-content");
function showUpdates() {
  tabNews.classList.add("selected");
  tabFriends.classList.remove("selected");

  document.querySelectorAll(".update-item").forEach(i => i.style.display = "block");
  document.querySelectorAll(".friend-item").forEach(i => i.style.display = "none");
}
function showFriends() {
  tabFriends.classList.add("selected");
  tabNews.classList.remove("selected");

  document.querySelectorAll(".update-item").forEach(i => i.style.display = "none");
  document.querySelectorAll(".friend-item").forEach(i => i.style.display = "block");
}
tabNews.addEventListener("click", showUpdates);
tabFriends.addEventListener("click", showFriends);
showUpdates();