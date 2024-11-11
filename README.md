# vue2-doto-list

A Todo List app built with Vue.js, and TypeScript, following a modular structure to manage tasks effectively. This project demonstrates the usage of Vue components, props, events, and conditional rendering with `v-if`.

## Features

- **Add Task**: Users can add new tasks via a form.
- **Complete Task**: Users can mark tasks as completed.
- **Delete Task**: Users can remove tasks from the active list.
- **View Completed Tasks**: Completed tasks are stored in a separate section.

## Component Structure

1. **`TodoHome`**: The main component managing `tasks` and `completedTasks` arrays. It handles adding, completing, and deleting tasks and passes data and events to child components.
   - **`TodoForm`**: A form for inputting new tasks, consisting of:
     - **`AddNewTaskInput`**: Input field for task name.
     - **`AddButton`**: Button to submit the new task.
   - **`TodoList`**: Displays the list of active tasks, using:
     - **`TodoItem`**: Individual task display, including:
       - **`CheckBoxButton`**: Marks a task as completed.
       - **`DeleteButton`**: Deletes a task.
   - **`TodoCompletedList`**: Shows completed tasks, with each item using `TodoItem`.
   - **`TodoDeleteList`**: Shows deleted tasks

## Key Concepts

- **Props**: Used to pass data from parent to child components, like tasks from `TodoHome` to `TodoList` and `TodoItem`.
- **Emit Events**: For interactions like completing or deleting tasks, the child components emit events (`delete-task` and `complete-task`), which are handled by the parent component.
- **Conditional Rendering** (`v-if`): Used to control when specific components appear, e.g., only show `DeleteButton` and `CheckBoxButton` for active tasks.

## Project Structure

```plaintext
src/
├── components/
│   ├── TodoHome.vue             # Root component managing state and data flow
│   ├── todo/
│   │   ├── TodoForm.vue         # Form component with task input and add button
│   │   ├── TodoList.vue         # List of active tasks
│   │   ├── TodoItem.vue         # Individual task item component
│   │   ├── TodoDeleteList.vue   # List of deleted tasks
│   │   ├── TodoCompliteList.vue # List of сomplite tasks
│   └── ui/
│       ├── AddNewTaskInput.vue  # Input field for task title
│       ├── AddButton.vue        # Button to add a task
│       ├── DeleteButton.vue     # Button to delete a task
│       ├── CheckBoxButton.vue   # Checkbox to mark tasks as completed
└── store/
    └── index.js                 # Vuex store for managing global state
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
