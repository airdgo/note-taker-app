const addNoteButton = document.getElementById("submit");
const input = document.getElementById("input");
const clearNotes = document.getElementById("clear_notes");
const modalContainer = document.getElementById("modal_container");
const closeButton = document.getElementById("close");

// Add notes
addNoteButton.addEventListener("click", (e) => {
	e.preventDefault();

	if (input.value == "") {
		return alert("Please add a note");
	}

	let notes = localStorage.getItem("notes");
	if (notes === null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}

	let myObj = {
		input: input.value,
	};

	notesObj.push(myObj);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	input.value = "";

	showNotes();
});

// Clear all notes
clearNotes.onclick = () => {
	localStorage.clear();
};

// Show notes on page
const showNotes = () => {
	let notes = localStorage.getItem("notes");
	let noteWraper = document.getElementById("note-wraper");
	if (notes === null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}

	let html = "";
	notesObj.forEach((element, index) => {
		html += `
                <div class="note-output">
                    <div class="note-head">
                        <h3>Note</h3>
                        <button id="${index}" class="remove-note" onclick="removeNote(this.id)">X</button>
                    </div>
                    <p>${truncated(element.input)}</p>
                    <button id="${index}" class="view-more-button" onclick="viewMore(this.id)">View More</button> 
                </div>
        `;
	});

	if (notesObj != 0) {
		noteWraper.innerHTML = html;
	} else {
		noteWraper.innerHTML = "<p>No notes added yet</p>";
	}
};

// View more
const viewMore = (index) => {
	let notes = localStorage.getItem("notes");
	const modalText = document.getElementById("modal_text");
	if (notes === null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	modalText.innerText = notesObj[index].input;
	modalContainer.classList.add("show");
};

closeButton.addEventListener("click", (e) => {
	e.preventDefault();
	modalContainer.classList.remove("show");
});

// Remove a note
const removeNote = (index) => {
	let notes = localStorage.getItem("notes");
	if (notes === null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}

	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	location.reload();
};

// Function to truncate the input
function truncated(input) {
	if (input.length > 100) {
		return input.substring(0, 100) + "...";
	}
	return input;
}

showNotes();
