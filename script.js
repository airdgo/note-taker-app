const input = document.getElementById('input');
const submitNote = document.getElementById('submit');
const noteWraper = document.getElementById('note-wraper');

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal_text');

const clearNotes = document.getElementById('clear_notes');

submitNote.addEventListener('click', e => {
    e.preventDefault();
    submitNoteFunction();
})

clearNotes.addEventListener('click', e => {
    e.preventDefault();
    noteWraper.style.opacity = '0';
    noteWraper.innerHTML = '';
})

const submitNoteFunction = () => {
    const noteOutput = document.createElement('div');
    noteOutput.className = 'note-output';

    const noteHeading = document.createElement('h3');
    noteHeading.innerText = 'Note:';

    const noteParagraph = document.createElement('p');
    noteParagraph.innerText = truncate(input.value);

    const modalParagraph = document.createElement('p');
    modalParagraph.innerText = input.value;

    const viewMoreButton = document.createElement('button');
    viewMoreButton.className = 'view-more-button'
    viewMoreButton.innerText = 'View More';
    viewMoreButton.onclick = () => {
        modalText.innerText = modalParagraph.innerText;
        modalContainer.classList.add('show');
    }

    const removeNote = document.createElement('button');
    removeNote.className = 'remove-note';
    removeNote.innerText = 'X';
    removeNote.onclick = () => {
        removeNote.parentNode.parentNode.remove();
    }

    const noteHead = document.createElement('div');
    noteHead.className = 'note-head';
    noteHead.appendChild(noteHeading);
    noteHead.appendChild(removeNote);

    noteOutput.appendChild(noteHead);
    noteOutput.appendChild(noteParagraph);
    noteOutput.appendChild(viewMoreButton);
    noteWraper.appendChild(noteOutput);

    noteWraper.style.opacity = '1';

    input.value = '';
}

closeButton.addEventListener('click', e => {
    e.preventDefault();
    modalContainer.classList.remove('show');
});

function truncate(input) {
    if (input.length > 100) {
        return input.substring(0, 100) + '...';
    }
    return input;
};