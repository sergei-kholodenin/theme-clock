const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const needles = document.querySelector(".needle")

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        toggle.textContent = "Light mode";
    } else {
        toggle.textContent = "Dark mode";
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'; 

    hourEl.style.transform = `translate(-50%, -100%) rotate(${360 / 12 * hoursForClock}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * minutes}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * seconds}deg)`;
    timeEl.textContent = `${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${time.getDate()}</span>`;

}

setTime();

setInterval(setTime, 1000);