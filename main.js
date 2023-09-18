const saveNote = () => {
    const textNote = document.querySelector('.note-area').value;
    const keyNote = Date.now().toString();
    localStorage.setItem(keyNote, textNote);
    createNote(keyNote, textNote);
};

const deleteNote = (keyNote) => {
localStorage.removeItem(keyNote);
document.querySelector(`#id${keyNote}`).remove();
};

const createNote = (keyNote, textNote) => {
    const div = document.createElement('div');
    div.id = 'id' + keyNote;
    div.className = 'note';
    div.textContent = textNote;

    div.style.backgroundColor = randomRgbColor();
    
    const button = document.createElement('button');
    button.textContent = 'Usuń';
    button.className = 'btn-note-delete';
    button.onclick = () => {
        deleteNote(keyNote);
    };

    div.appendChild(button);
    document.querySelector('.notes').appendChild(div);
};

const init = () => {
    Object.keys(localStorage).forEach((keyNote) => {
        const textNote = localStorage.getItem(keyNote);
        createNote(keyNote, textNote);
    });
};

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 56 + 200); // Random between 0-255
    let g = Math.floor(Math.random() * 56 + 200); // Random between 0-255
    let b = Math.floor(Math.random() * 56 + 200); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

init();