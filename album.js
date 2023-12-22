function createElements() {
    const container = document.createElement('div');
    container.classList.add('container');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'row-cols-2', 'row-cols-md-4', 'row-cols-sm-3', 'g-4');

    for (let i = 1; i <= 20; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-img-top');

        image.src = `photos/${i}.jpg`;
        image.addEventListener("click", function (event) {
            window.open(`photo${i}.html`, '_blank');
        }, false);
        image.id = `img${i}`

        cardDiv.appendChild(image);
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
    }

    container.appendChild(rowDiv);

    const here = document.querySelector('#here');
    here.insertAdjacentElement('afterend', container);
};

createElements();


img1.title = "27th of October 2023, a few days after our break up. i was feeling like shit and i just got off work when i took this photo. i wished that i could send you it at that moment."
img2.title = "23rd of November 2023, went to uni very early"
img3.title = "2nd of December 2023"
img4.title = "13th of December 2023"
img5.title = "29th of November 2023, going home after a long and hard mid-term exam"
img6.title = "9th of December 2023"
img7.title = "22nd of December 2023, today, before we went out w my brother"
img8.title = "14th of December 2023, my camera cant capture the redness of the sky, it was so beatiful. i wonder if you get sunsets like this in saudi"
img9.title = "30th of November 2023, i was mesmerized by how the sky looked that day"
img10.title = "13th of December 2023, beatiful sunset"
img11.title = "23rd of November 2023, the moon was so big and beatiful that day. i wondered if you looked at the sky and saw it too when i was taking this photo. my camera couldnt zoom too much tho..."
img12.title = "6th of December 2023"
img13.title = "15th of December 2023"
img14.title = "9th of December 2023"
img15.title = "7th of December 2023"
img16.title = "13th of December 2023"
img17.title = "9th of December 2023"
img18.title = "14th of December 2023"
img19.title = "9th of December 2023"
img20.title = "22nd of December 2023, this morning, might be my fav photo out of all"


