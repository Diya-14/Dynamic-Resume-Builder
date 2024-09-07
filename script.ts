function generateResume() {
    // Fetching form values
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const location = (document.getElementById('location') as HTMLInputElement)?.value || '';
    const contact = (document.getElementById('contact') as HTMLInputElement)?.value || '';
    const objective = (document.getElementById('objective') as HTMLTextAreaElement)?.value || '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || '';
    const awards = (document.getElementById('awards') as HTMLTextAreaElement)?.value || '';
    const activities = (document.getElementById('activities') as HTMLTextAreaElement)?.value || '';

    // Reference to the resume display section
    const resumeContainer = document.getElementById('resume') as HTMLDivElement;

    // Check if the resume container exists before updating
    if (resumeContainer) {
        resumeContainer.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <h3 style="color: #00796b;">Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <table class="resume-table">
                <tr>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>${education}</td>
                </tr>
            </table>
            <h3>Experience</h3>
            <table class="resume-table">
                <tr>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>${experience}</td>
                </tr>
            </table>
            <h3>Skills</h3>
            <table class="resume-table">
                <tr>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>${skills}</td>
                </tr>
            </table>
            <h3>Awards</h3>
            <p>${awards}</p>
            <h3>Extra-Curricular Activities</h3>
            <p>${activities}</p>
        `;
    }

    // Show the generated resume section
    const resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.classList.remove('hidden');
    }
}

function downloadPDF() {
    const resumeElement = document.getElementById('resume') as HTMLDivElement;
    if (resumeElement)
        
        {html2pdf().from(resumeElement).save('resume.pdf');
    }
}
// Add event listener to handle form submission and resume generation
document.getElementById('resume-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    generateResume();
});
