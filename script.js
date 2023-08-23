// Define variables and functions
const GOALS_SELECTOR = '#goals';
const DEADLINES_SELECTOR = '#deadlines';
const ADD_GOAL_BUTTON = '#add-goal';
const ADD_DEADLINE_BUTTON = '#add-deadline';

// Function to add a goal
function addGoal(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the form data
    const goalTitle = document.getElementById('goal-title').value;
    const goalDescription = document.getElementById('goal-description').value;

    // Add the goal to the list
    const goalList = document.querySelector(GOALS_SELECTOR);
    const newGoalElement = document.createElement('li');
    newGoalElement.textContent = `${goalTitle}`;
    newGoalElement.addEventListener('click', () => {
        // Remove the goal from the list
        goalList.removeChild(newGoalElement);
    });
    goalList.appendChild(newGoalElement);

    // Reset the form fields
    document.getElementById('goal-title').value = '';
    document.getElementById('goal-description').value = '';
}

// Function to add a deadline

function addDeadline(event) {

    // Prevent default form submission behavior

    event.preventDefault();


    // Get the form data

    const deadlineDate = document.getElementById('deadline-date').value;
    const deadlineDescription = document.getElementById('deadline-description').value;

    // Add the deadline to the list

    const deadlinesList = document.querySelector(DEADLINES_SELECTOR);
    const newDeadlineElement = document.createElement('li');
    newDeadlineElement.textContent = `${deadlineDate} - ${deadlineDescription}`;
    newDeadlineElement.addEventListener('click', () => {
        // Remove the deadline from the list
        deadlinesList.removeChild(newDeadlineElement);
    });
    deadlinesList.appendChild(newDeadlineElement);

    // Reset the form fields

    document.getElementById('deadline-date').value = '';
    document.getElementById('deadline-description').value = '';
}

// Event listener for adding goals

ADD_GOAL_BUTTON.addEventListener('click', addGoal);


// Event listener for adding deadlines

ADD_DEADLINE_BUTTON.addEventListener('click', addDeadline);