import "../scss/styles.scss";

function initializeNotifications() {
  const markReadButton = $(".mark-read");
  const activeNotifications = $(".notification.active");
  const counterElement = $("#counter-number");
  let count = activeNotifications.length;

  function updateCounter() {
    counterElement.text(count);
  }

  function handleMarkRead() {
    activeNotifications.removeClass("active");
    count = 0;
    updateCounter();
  }

  function handleNotificationClick(event) {
    const notification = $(event.currentTarget);

    if (!notification.hasClass("active")) {
      return;
    }

    notification.removeClass("active");
    count--;
    updateCounter();
  }

  markReadButton.on("click", handleMarkRead);
  $(".notifications").on(
    "click",
    ".notification.active",
    handleNotificationClick
  );

  updateCounter();
}

initializeNotifications();
