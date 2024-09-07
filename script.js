var _a;
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    // Fetching form values
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var location = ((_c = document.getElementById('location')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var contact = ((_d = document.getElementById('contact')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var objective = ((_e = document.getElementById('objective')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var education = ((_f = document.getElementById('education')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var experience = ((_g = document.getElementById('experience')) === null || _g === void 0 ? void 0 : _g.value) || '';
    var skills = ((_h = document.getElementById('skills')) === null || _h === void 0 ? void 0 : _h.value) || '';
    var awards = ((_j = document.getElementById('awards')) === null || _j === void 0 ? void 0 : _j.value) || '';
    var activities = ((_k = document.getElementById('activities')) === null || _k === void 0 ? void 0 : _k.value) || '';
    // Reference to the resume display section
    var resumeContainer = document.getElementById('resume');
    // Check if the resume container exists before updating
    if (resumeContainer) {
        resumeContainer.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Location:</strong> ").concat(location, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <h3 style=\"color: #00796b;\">Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Education</h3>\n            <table class=\"resume-table\">\n                <tr>\n                    <th>Details</th>\n                </tr>\n                <tr>\n                    <td>").concat(education, "</td>\n                </tr>\n            </table>\n            <h3>Experience</h3>\n            <table class=\"resume-table\">\n                <tr>\n                    <th>Details</th>\n                </tr>\n                <tr>\n                    <td>").concat(experience, "</td>\n                </tr>\n            </table>\n            <h3>Skills</h3>\n            <table class=\"resume-table\">\n                <tr>\n                    <th>Details</th>\n                </tr>\n                <tr>\n                    <td>").concat(skills, "</td>\n                </tr>\n            </table>\n            <h3>Awards</h3>\n            <p>").concat(awards, "</p>\n            <h3>Extra-Curricular Activities</h3>\n            <p>").concat(activities, "</p>\n        ");
    }
    // Show the generated resume section
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.classList.remove('hidden');
    }
}
function downloadPDF() {
    var resumeElement = document.getElementById('resume');
    if (resumeElement) {
        html2pdf().from(resumeElement).save('resume.pdf');
    }
}
// Add event listener to handle form submission and resume generation
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    generateResume();
});
