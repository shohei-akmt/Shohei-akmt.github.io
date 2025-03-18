//Basic Animation on scroll
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

projects.forEach((project) => {
  observer.observe(project);
});
