const input = document.getElementById('input');
const submitNote = document.getElementById('submit');
const noteWraper = document.getElementById('note-wraper');

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
    p.innerText = input.value;
    const truncatedInput = truncate(p.innerText);

    console.log(truncatedInput);
    const viewMoreButton = document.createElement('button');
    viewMoreButton.innerText = 'View More';

    noteOutput.appendChild(h3);
    noteOutput.append(truncatedInput);
    noteOutput.appendChild(viewMoreButton);

    noteWraper.appendChild(noteOutput);

}

function truncate(input) {
    if (input.length > 150) {
        return input.substring(0, 150) + '...';
    }
    return input;
};