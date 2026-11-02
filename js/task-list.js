import { getToDoListNode } from "./dom.js";

function createTaskNode(taskContent) {
    const itemListNode = document.createElement("li");
    const contentTaskWrapper = document.createElement("p");

    contentTaskWrapper.textContent = taskContent;
    itemListNode.appendChild(contentTaskWrapper);

    return itemListNode;
}

export function appendNewTask(taskContent) {
    getToDoListNode().appendChild(createTaskNode(taskContent));

    console.log("Task added successfully");
}
