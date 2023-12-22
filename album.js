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

img1.title = "27th of October 2023, after I got off work"
img2.title = "23rd of November 2023, went to uni very early"
img3.title = "2nd of December 2023"
img4.title = "13th of December 2023"
img5.title = "29th of November 2023, going home after a long and hard mid-term exam"
img6.title = "9th of December 2023"
img7.title = "22nd of December 2023, today, before we went out w my brother"
img8.title = "14th of December 2023, my camera cant capture the redness of the sky, it was so beatiful"
img9.title = "30th of November 2023, i was mesmmerised by how the sky looked that day"
img10.title = "13th of December 2023, beatiful sunset"
img11.title = "23rd of November 2023"
img12.title = ""
img13.title = ""
img14.title = ""
img15.title = ""
img16.title = ""
img17.title = ""
img18.title = ""
img19.title = ""
img20.title = "22nd of December 2023, this morning, might be my fav photo out of all"


