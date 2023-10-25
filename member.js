function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberBox = document.getElementById("memberBox");
    var skillsBox = document.getElementById("skillsBox");
    var projectsBox = document.getElementById("projectsBox");
    var contactBox = document.getElementById("contactBox");
    var aboutBox = document.getElementById("aboutBox");
    member.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    skills.style.backgroundColor = "rgba(0, 0, 0, 0)";
    projects.style.backgroundColor = "rgba(0, 0, 0, 0)";
    contact.style.backgroundColor = "rgba(0, 0, 0, 0)";
    about.style.backgroundColor = "rgba(0, 0, 0, 0)";
    memberBox.style.display = "block";
    skillsBox.style.display = "none";
    projectsBox.style.display = "none";
    contactBox.style.display = "none";
    aboutBox.style.display = "none";
}