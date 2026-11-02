const NODE_IDS = {
    app: "app",
    taskList: "to-do-list-container",
    taskForm: "task-form",
    taskInput: "task-input"
};

function getRequiredNode(id) {
    const node = document.getElementById(id);
    if (!node) throw Error(`Node #${id} not found`);

    return node;
}

export function getAppNode() {
    return getRequiredNode(NODE_IDS.app);
}

export function getToDoListNode() {
    return getRequiredNode(NODE_IDS.taskList);
}

export function getTaskFormNode() {
    return getRequiredNode(NODE_IDS.taskForm);
}

export function getTaskInputNode() {
    return getRequiredNode(NODE_IDS.taskInput);
}
