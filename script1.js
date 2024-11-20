let currentStep = 0;
const totalSteps = 5; // Total steps to complete the course

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateProgress();
  }
}

function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `${progressPercentage}%`;

  if (progressPercentage === 100) {
    alert("Congratulations! You've completed the course.");
  }
}
