document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault()





    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement


    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){


        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';  
     
    const resumeOutput = `
    <h2>Editable Resume</h2> 
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' } 
    <p><strong>Name:</strong><span contenteditable="true">${name}</span></p> 
    <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
    <p><strong>Phone No:</strong><span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
     <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
     <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>`;



    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('The details are missings')   
    }
 } else {
    console.error('Kindly fill the details');
     
    

    }
})





