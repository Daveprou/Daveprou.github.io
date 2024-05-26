function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
    document.addEventListener("click", closeDropdownOutside);
  }
}

function closeDropdownOutside(event) {
  var dropdownContent = document.getElementById("myDropdown");
  var dropbtn = document.querySelector(".dropbtn");
  if (!dropdownContent.contains(event.target) && event.target !== dropbtn) {
    dropdownContent.style.display = "none";
    document.removeEventListener("click", closeDropdownOutside);
  }
}