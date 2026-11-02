import { getTaskFormNode, getTaskInputNode } from "./dom.js";
import { appendNewTask } from "./task-list.js";

function handleTaskSubmit(event) {
    event.preventDefault();

    const inputNode = getTaskInputNode();
    const taskContent = inputNode.value.trim();
    if (!taskContent) return;

    appendNewTask(taskContent);

    event.target.reset();
    inputNode.focus();
}

export function setUpTaskForm() {
    getTaskFormNode().addEventListener("submit", handleTaskSubmit);
}
