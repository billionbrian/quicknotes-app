
QuickNotes is a simple, responsive note-taking web application that helps users create, organize, search, and manage their notes in one place. Users can categorize notes as Personal, Work, or Study, and each note displays its creation date and time. The application uses HTML, CSS, and JavaScript, with browser local storage to keep notes available after refreshing the page.

Add Notes: Create notes by entering text and selecting a category.
Three Categories:Organize notes into Personal, Work, and Study categories.
Input Validation: Prevent empty notes and notes containing more than 200 characters.
Delete Notes: Remove individual notes when they are no longer needed.
Search Notes:Find notes by text using case-insensitive search.
Note Counter: Display the total number of saved notes.
Local Storage:Save notes in the browser so they remain available after refreshing the page.
 Creation Timestamps: Display the date and time each note was created.
Clear All: Remove all notes after confirming the action.
Responsive Design:Use the application on desktop computers, tablets, and mobile devices.
Category Colours:Identify Personal, Work, and Study notes using different border colours.



* **HTML5:** Provides the structure and semantic elements of the application.
* **CSS3:** Handles styling, layout, note cards, and responsive design.
* **JavaScript:** Implements note creation, validation, deletion, searching, and counting.
* **Web Storage API:** Uses `localStorage` to persist notes in the browser.
* **Git and GitHub:** Track project changes and host the source code repository.


Follow these steps to run QuickNotes on your computer.



Open a terminal and run the following command:

```bash
git clone https://github.com/YOUR-USERNAME/quicknotes-app.git
```

Replace `YOUR-USERNAME` with your GitHub username.



```bash
cd quicknotes-app
```


Open `index.html` in your web browser.

Alternatively, open the project folder in Visual Studio Code and use the Live Server extension to launch the application.

No additional packages or dependencies are required.


1. Enter your note in the text field.
2. Select Personal, Work, or Study from the category dropdown.
3. Click **Add Note** to save the note.
4. View your saved notes in the Your Notes section.
5. Use the search field to find a note by its text.
6. Click **Delete** to remove an individual note.
7. Click **Clear All** and confirm the action to remove all notes.

Your notes are stored in your browser's local storage and remain available when you revisit the application in the same browser, provided the stored data has not been cleared.



While building QuickNotes, I learned:

1. HTML Structure and Semantics: How to build a well-organized web page using semantic HTML elements, forms, labels, inputs, and buttons.

2. CSS Styling and Responsive Design: How to use Flexbox, card layouts, category-specific styling, hover effects, and media queries to create a clean interface that works on different screen sizes.

3. JavaScript and DOM Manipulation: How to select HTML elements, respond to form submissions, create elements dynamically, and update the page using `textContent`.

4.Arrays and Objects: How to represent notes as objects in an array and use array methods to add, search, filter, and delete notes.

5. Form Validation: How to validate user input and display helpful error messages when the input is invalid.

6. Browser Local Storage: How to use `localStorage`, `JSON.stringify()`, and `JSON.parse()` to save and restore application data.

7. Git and GitHub: How to track changes using Git commits and publish a project repository on GitHub.



Possible improvements include:

* Adding the ability to edit existing notes.
* Adding filters to display notes by category.
* Supporting dark mode.
* Adding note sorting by creation date or category.
* Adding an export feature to download notes.



Created as a learning project to practise HTML, CSS, JavaScript, responsive web design, browser storage, and Git version control.


