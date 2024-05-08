let toastbox = document.getElementById("toastbox");
let successmessage = "  Successfully sumitted";
let errormessage = " Please fix the error";
let invalidmessage = "Invalid output,plz check again";
function showtoast(message) {
  let toast = document.createElement("div");

  toast.classList.add("toast");
  toast.innerHTML = message;
  toastbox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
