const input = document.getElementById('input');
const submitNote = document.getElementById('submit');
const noteWraper = document.getElementById('note-wraper');

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal_text');

submitNote.addEventListener('click', e => {
    e.preventDefault();
    submitNoteFunction();
})

const submitNoteFunction = () => {
    const noteOutput = document.createElement('div');
    noteOutput.className = 'note-output';
    const h3 = document.createElement('h3');
    h3.innerText = 'Note:';
    const p = document.createElement('p');
    p.innerText = truncate(input.value);
    const ps = document.createElement('p');
    ps.innerText = input.value;

    const viewMoreButton = document.createElement('button');
    viewMoreButton.innerText = 'View More';
    viewMoreButton.onclick = () => {
        modalText.innerText = ps.innerText;
        modalContainer.classList.add('show');
    }

    noteOutput.appendChild(h3);
    noteOutput.appendChild(p);
    noteOutput.appendChild(viewMoreButton);
    noteWraper.appendChild(noteOutput);
}

closeButton.addEventListener('click', e => {
    e.preventDefault();
    modalContainer.classList.remove('show');
});

function truncate(input) {
    if (input.length > 150) {
        return input.substring(0, 150) + '...';
    }
    return input;
};