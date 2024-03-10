# Task Manager

## Get started:
- To run the application,
- `React app`
  - Navigate to `client` folder
  - Run `npm install`
  - Run `npm run dev`

- `Node - Express - MySQL server`
  - Navigate to `server` folder
  - Run `npm install`
  - Run `npm install nodemon` ( if not a global dependency) to run the server in development mode
  - Run `npm run dev` for development mode
  - Run `npm start`

- Make sure to have MySQL workbench to run application locally.


- Create a `.env`. files and add the necessary environment variables, as shown in `.env.example` file





## UI:

#### Create a task:
- Click on `Add Task` and provide task `title` and `description` and hit enter to add a new task.

#### Update task status
- Click on `Set not completed` or `Set completed` to update the task status.

#### Delete a task
- Click on `Delete` icon to delete the task

<br>

## API endpoints

### Create a New Task

- **URL:** `/api/tasks/`
- **Method:** POST
- **Description:** Creates a new task with the provided details.
- **Request Body:** JSON object containing task details (title, description).
- **Example:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```
### Get All Tasks

- **URL:** `/api/tasks/`
- **Method:** GET
- **Description:** Retrieves a list of all tasks.

### Get All Completed Tasks

- **URL:** `/api/tasks/completed`
- **Method:** GET
- **Description:** Retrieves a list of all completed tasks.

### Get Single Task

- **URL:** `/api/tasks/:id`
- **Method:** GET
- **Description:** Retrieves details of a single task based on the provided ID parameter.

### Update Single Task

- **URL:** `/api/tasks/:id`
- **Method:** PATCH
- **Description:** Updates details of a single task based on the provided ID parameter.
- **Request Body:** JSON object containing the fields to be updated.
- **Example:**
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
  }
  
### Delete Single Task

- **URL:** `/api/tasks/:id`
- **Method:** DELETE
- **Description:** Deletes a single task based on the provided ID parameter.

