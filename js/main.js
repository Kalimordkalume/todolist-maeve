import { setUpTaskForm } from "./task-form.js";
import { loadSampleTasks } from "./sample-tasks.js";

function main() {
    try {
        setUpTaskForm();

        // Dev helper: run loadSampleTasks() in the browser console
        window.loadSampleTasks = loadSampleTasks;
    } catch (error) {
        console.error("App failed to start:", error.message);
    }
}

main();
