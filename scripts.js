let enrolledCourses = [];

// Save Profile Information
function saveProfile(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;

  // Display profile details
  document.getElementById("displayName").textContent = name;
  document.getElementById("displayContact").textContent = contact;
  document.getElementById("displayEmail").textContent = email;

  // Display enrolled courses
  const displayCourses = document.getElementById("displayCourses");
  displayCourses.innerHTML = "";  // Clear previous list
  enrolledCourses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.textContent = course;
    displayCourses.appendChild(listItem);
  });

  // Show saved profile and hide form
  document.getElementById("profileForm").style.display = "none";
  document.getElementById("enrollmentSection").style.display = "none";
  document.getElementById("savedProfile").style.display = "block";
}

// Add Course to Enrolled List
function addCourse() {
  const courseInput = document.getElementById("courseInput");
  const courseName = courseInput.value.trim();
  if (courseName && !enrolledCourses.includes(courseName)) {
    enrolledCourses.push(courseName);

    // Display in current enrolled courses
    const courseList = document.getElementById("courseList");
    const listItem = document.createElement("li");
    listItem.textContent = courseName;
    courseList.appendChild(listItem);

    courseInput.value = ""; // Clear input
  }
}

// Edit Profile
function editProfile() {
  // Show form and enrolled courses section, hide saved profile
  document.getElementById("profileForm").style.display = "block";
  document.getElementById("enrollmentSection").style.display = "block";
  document.getElementById("savedProfile").style.display = "none";
}
