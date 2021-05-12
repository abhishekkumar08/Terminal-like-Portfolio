const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const exprience = document.querySelector("#exprience");

const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const skillsContent = document.querySelector("#skills-content");
const projectsContent = document.querySelector("#projects-content");
const experienceContent = document.querySelector("#experience-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

skills.addEventListener("click", () => {
  const skillsBox = new WinBox({
    title: "Skills",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 250,
    right: 50,
    bottom: 50,
    left: 450,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

projects.addEventListener("click", () => {
  const projectsBox = new WinBox({
    title: "Projects",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 350,
    right: 50,
    bottom: 50,
    left: 650,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

experience.addEventListener("click", () => {
  const experienceBox = new WinBox({
    title: "Experience",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 450,
    right: 50,
    bottom: 50,
    left: 850,
    mount: experienceContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
