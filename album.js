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

img1.title = "27/10/23, after I got off work"
img2.title = ""
img3.title = ""
img4.title = ""
img5.title = ""
img6.title = ""
img7.title = ""
img8.title = ""
img9.title = ""
img10.title = ""
img11.title = ""
img12.title = ""
img13.title = ""
img14.title = ""
img15.title = ""
img16.title = ""
img17.title = ""
img18.title = ""
img19.title = ""
img20.title = ""


