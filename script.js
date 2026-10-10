const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const clearAllButton = document.querySelector("#clear-all-button");


const STORAGE_KEY = "quicknotes-notes";

let notes = [];

try {
const savedNotes = localStorage.getItem(STORAGE_KEY);

```
if (savedNotes) {
    const parsedNotes = JSON.parse(savedNotes);

    if (Array.isArray(parsedNotes)) {
        notes = parsedNotes.filter((note) =>
            note &&
            typeof note.id === "string" &&
            typeof note.text === "string" &&
            ["Personal", "Work", "Study"].includes(note.category) &&
            typeof note.createdAt === "string"
        );
    }
}
```

} catch (error) {
console.error("Could not load saved notes:", error);
}


function saveNotes() {
try {
localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
} catch (error) {
console.error("Could not save notes:", error);
errorMessage.textContent =
"Unable to save notes. Please check your browser storage.";
}
}


function updateNoteCount() {
if (notes.length === 0) {
noteCount.textContent = "You have no notes yet.";
} else if (notes.length === 1) {
noteCount.textContent = "You have 1 note.";
} else {
noteCount.textContent = `You have ${notes.length} notes.`;
}
}


function render() {
// Clear the existing list safely.
notesList.replaceChildren();

```

const searchTerm = searchInput.value.trim().toLowerCase();


const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm)
);


if (filteredNotes.length === 0) {
    if (searchTerm !== "" && notes.length > 0) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "empty-message";
        emptyItem.textContent = "No notes match your search.";
        notesList.appendChild(emptyItem);
    }

    updateNoteCount();
    return;
}


filteredNotes.forEach((note) => {
    const listItem = document.createElement("li");

    listItem.classList.add("note-card");

    listItem.classList.add(
        `category-${note.category.toLowerCase()}`
    );

   
    const noteText = document.createElement("p");
    noteText.className = "note-text";
    noteText.textContent = note.text;

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category-label";
    categoryLabel.textContent = note.category;

    const noteFooter = document.createElement("div");
    noteFooter.className = "note-footer";

    const noteDate = document.createElement("time");
    noteDate.className = "note-date";
    noteDate.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        deleteNote(note.id);
    });


    noteFooter.append(noteDate, deleteButton);
    listItem.append(noteText, categoryLabel, noteFooter);
    notesList.appendChild(listItem);
});

updateNoteCount();
```

}

function validateNote(text) {
if (text.trim() === "") {
return "Please type a note first.";
}

```
if (text.length > 200) {
    return "Notes must be 200 characters or fewer.";
}

return "";
```

}


noteForm.addEventListener("submit", (event) => {
event.preventDefault();

```
const text = noteInput.value;
const validationError = validateNote(text);


if (validationError) {
    errorMessage.textContent = validationError;
    noteInput.focus();
    return;
}


const newNote = {
    id: crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text: text.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
};


notes.unshift(newNote);


saveNotes();


noteInput.value = "";
errorMessage.textContent = "";


render();


noteInput.focus();
```

});

function deleteNote(id) {
notes = notes.filter((note) => note.id !== id);

```
saveNotes();
render();
```

}


searchInput.addEventListener("input", () => {
render();
});


clearAllButton.addEventListener("click", () => {
if (notes.length === 0) {
return;
}

```
const confirmed = confirm("Delete all notes?");

if (confirmed) {
    notes = [];

    saveNotes();
    render();
    errorMessage.textContent = "";
}
```

});

render();
