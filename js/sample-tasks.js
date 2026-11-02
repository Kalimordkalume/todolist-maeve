import { appendNewTask } from "./task-list.js";

const SAMPLE_TASKS = [
    "Buy groceries",
    "Call the dentist",
    "Water the plants",
    "Reply to pending emails",
    "Take out the trash",
    "Book train tickets",
    "Clean the kitchen",
    "Pay the electricity bill",
    "Walk the dog",
    "Read 20 pages",
    "Prepare tomorrow's meeting",
    "Go for a run"
];

function pickRandomTasks(count) {
    const pool = [...SAMPLE_TASKS];

    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, count);
}

export function loadSampleTasks(count = 6) {
    for (const taskContent of pickRandomTasks(count)) {
        appendNewTask(taskContent);
    }
}
