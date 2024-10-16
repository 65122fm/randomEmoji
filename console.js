const randomSticker = document.querySelector('.container h2');
const description = document.querySelector('.container p');
const btn = document.querySelector('.btn');

async function fetchEmojiData() {
    const api_key = 'c19c0ee927b1c575056f3d80f6e03a0df8848d86';
    const api_url = `https://emoji-api.com/emojis?access_key=${api_key}`;

    try {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        btn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * data.length);            

            btn.innerHTML = `<b id='a'>${data[randomIndex].character}</b>`
            description.textContent = data[randomIndex].unicodeName;
        });

    } catch (error) {
        console.error(error); r
    }
}

fetchEmojiData();
