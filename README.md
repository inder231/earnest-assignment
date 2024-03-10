# Docs

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

