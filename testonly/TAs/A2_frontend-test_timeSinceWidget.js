// Create a function that takes in a Date and returns text that shows how long ago the date was.
// The function should represent the time as one of the following:
//  - just now
//  - less than a minute ago
//  - n minutes ago
//  - n hours ago
//  - n days ago
//  - n weeks ago
//  - n months ago
//  - n years ago

// Date object accepted/validated
// Comparison to now
// return difference (graduation of increment)

const milliseconds = 1000
const minutes = 1000*60
const hours = 1000*60*60
const days = 1000*60*60*24
const months = 1000*60*60*24*30
const years = 1000*60*60*24*365

function dateUntilNow(date) {
    const currentDateTime = Date.now();
    let difference = currentDateTime - date
    if (difference < milliseconds) {
        return `just now`
    } else if (difference < minutes) {
        return `less than a minute ago`
    } else if (difference < hours) {
        let diffInMinutes = difference/minutes
        return `${diffInMinutes} minutes ago`
    } else if (difference < days) {
        let diffInHours = difference/hours
        return `${diffInHours} hours ago`
    } // more of the same with bigger time increments
}

// Create a component that takes in a Date and renders text that shows how long ago the date was.
// The widget should update as time passes and should represent the time as in your created function.

const container = querySelector('#container-div')

function howLongAgo(d) {
    let timeSince = dateUntilNow(d);
    let timeWidget = createElement("span")
    timeWidget.innerHTML = timeSince
    container.appendChild(timeWidget)
}
