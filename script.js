function generateSheet() {
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const race = document.getElementById('race').value;
    const level = document.getElementById('level').value;
    const background = document.getElementById('background').value;

    document.getElementById('display-name').textContent = name;
    document.getElementById('display-class').textContent = className;
    document.getElementById('display-race').textContent = race;
    document.getElementById('display-level').textContent = level;
    document.getElementById('display-background').textContent = background;
}
