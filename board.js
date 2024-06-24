function myFunction() {
    var x = document.getElementsByClassName("hiddenItems");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }