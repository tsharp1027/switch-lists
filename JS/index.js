//create lists
const houseChores = ['Dishes','Laundry','Vacuum','Toilets'];
const yardWork = ['Mowing', 'Raking', 'Weeding', 'Trimming'];

const selectedValue = document.querySelector('input[name="todo-list"]:checked');
    const displayDiv = document.getElementById('listDisplay');

    if (selectedValue) {
        let listToDisplay;
        
        // Determine which list to display based on selection
        if (selectedValue.value === 'House Chores') {
            listToDisplay = houseChores;
        } else if (selectedValue.value === 'Yard Work') {
            listToDisplay = yardWork;
        }