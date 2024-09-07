function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var awards = document.getElementById('awards').value;
    var languages = document.getElementById('languages').value;
    var contactNumber = document.getElementById('contact-number').value;
    var resume = "\n        <h1>".concat(name, "</h1>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n        <p><strong>Objective:</strong> ").concat(objective, "</p>\n        \n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        \n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n        \n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        \n        <h2>Awards</h2>\n        <p>").concat(awards, "</p>\n        \n        <h2>Languages</h2>\n        <p>").concat(languages, "</p>\n        \n        <h2>Contact Number</h2>\n        <p>").concat(contactNumber, "</p>\n    ");
    document.getElementById('resume').innerHTML = resume;
    document.getElementById('resume-output').classList.remove('hidden');
}
function downloadResume() {
    var resumeContent = document.getElementById('resume').innerText;
    var blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('resume-form').addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume();
    });
});
