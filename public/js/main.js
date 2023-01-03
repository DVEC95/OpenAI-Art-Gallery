function onSubmit(e) {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (!prompt) {
        alert('Please enter a description.');
        return;
    }

    generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size){
    try {
        showSpinner();

        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        if (!response.ok){
            removeSpinner();
            throw new Error('Image could not be generated.');
        }

        const data = await response.json();
        // console.log(data);

        const imageUrl = data.data;
        const tagline = toTitleCase(prompt);

        document.querySelector('#image').src = imageUrl;
        
        // console.log(tagline);

        removeSpinner();

        document.getElementById('tagline-text').innerHTML = tagline;
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);