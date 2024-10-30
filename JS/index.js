const houseChores = ['Dishes','Laundry','Vacuum','Toilets'];
const yardWork = ['Mowing', 'Raking', 'Weeding', 'Trimming'];

function switchLists(){
const selectedValue = document.querySelector('input[name="todo-list"]:checked');
const displayDiv = document.getElementById('listDisplay');

const children = displayDiv.childNodes; 
    for (let i = children.length - 1; i >= 0; i--) {
        displayDiv.removeChild(children[i]);
    }

    if (selectedValue) {
        let listToDisplay;

        if (selectedValue.value === 'House Chores') {
            listToDisplay = houseChores;
        } else if (selectedValue.value === 'Yard Work') {
            listToDisplay = yardWork;
        }

        const header = document.createElement('h2');
        header.textContent = selectedValue.value + ':';
        displayDiv.appendChild(header);

        const ul = document.createElement('ul');

        listToDisplay.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        displayDiv.appendChild(ul);
    }
}