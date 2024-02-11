document.getElementById("startButton").addEventListener("click", function () {
  document.querySelector(".welcome").style.display = "none";
  document.querySelector("#photo1").style.display = "block";
  document.querySelector(".nav-buttons").style.display = "block";
});

function showPhoto(photoNumber) {
  // Hide all photo containers
  document.querySelectorAll(".photo-container").forEach(function (photo) {
    photo.style.display = "none";
  });

  // Show the photo container corresponding to the photoNumber
  document.querySelector("#photo" + photoNumber).style.display = "block";
}

function showNextPhoto(currentPhotoNumber) {
  if (currentPhotoNumber < 5) {
    showPhoto(currentPhotoNumber + 1);
  }
}

function showPrevPhoto(currentPhotoNumber) {
  if (currentPhotoNumber > 1) {
    showPhoto(currentPhotoNumber - 1);
  }
}

// Event listeners for next and previous buttons
for (let i = 1; i <= 5; i++) {
  document
    .getElementById("nextButton" + i)
    .addEventListener("click", function () {
      showNextPhoto(i);
    });

  document
    .getElementById("prevButton" + i)
    .addEventListener("click", function () {
      showPrevPhoto(i);
    });
}
