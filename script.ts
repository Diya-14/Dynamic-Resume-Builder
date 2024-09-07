function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const awards = (document.getElementById('awards') as HTMLTextAreaElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const contactNumber = (document.getElementById('contact-number') as HTMLInputElement).value;

    const resume = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Objective:</strong> ${objective}</p>
        
        <h2>Education</h2>
        <p>${education}</p>
        
        <h2>Work Experience</h2>
        <p>${workExperience}</p>
        
        <h2>Skills</h2>
        <p>${skills}</p>
        
        <h2>Awards</h2>
        <p>${awards}</p>
        
        <h2>Languages</h2>
        <p>${languages}</p>
        
        <h2>Contact Number</h2>
        <p>${contactNumber}</p>
    `;

    document.getElementById('resume')!.innerHTML = resume;
    document.getElementById('resume-output')!.classList.remove('hidden');
}

function downloadResume(): void {
    const resumeContent = document.getElementById('resume')!.innerText;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('resume-form')!.addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });
});
