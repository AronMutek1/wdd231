document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    const courses = document.querySelectorAll(".course");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.textContent.trim().toLowerCase();
  
        courses.forEach((course) => {
          if (
            type === "all" ||
            course.classList.contains(type)
          ) {
            course.style.display = "block";
          } else {
            course.style.display = "none";
          }
        });
      });
    });
  });
  