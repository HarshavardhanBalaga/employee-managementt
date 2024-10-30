const employees = [
  {
    "id": 1,
    "firstName": "Ravi",
    "email": "ravi@r.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete project documentation",
        "taskDescription": "Document the entire project workflow for the upcoming audit",
        "taskDate": "2024-10-20",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit weekly report",
        "taskDescription": "Generate and submit the weekly report to the team lead",
        "taskDate": "2024-10-15",
        "category": "Report"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix server bugs",
        "taskDescription": "Resolve high-priority issues on the backend server",
        "taskDate": "2024-10-18",
        "category": "Bug Fix"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya@p.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design new landing page",
        "taskDescription": "Create a responsive design for the new product landing page",
        "taskDate": "2024-10-22",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize database queries",
        "taskDescription": "Improve the performance of database queries for the sales module",
        "taskDate": "2024-10-10",
        "category": "Optimization"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Migrate to cloud",
        "taskDescription": "Move the current on-premise infrastructure to AWS",
        "taskDate": "2024-10-19",
        "category": "Infrastructure"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Amit",
    "email": "amit@a.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client meeting preparation",
        "taskDescription": "Prepare a presentation for the quarterly client meeting",
        "taskDate": "2024-10-25",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review the new features' code and provide feedback",
        "taskDate": "2024-10-21",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sunita",
    "email": "sunita@s.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Test new API",
        "taskDescription": "Run tests on the newly developed API endpoints",
        "taskDate": "2024-10-14",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update user manuals",
        "taskDescription": "Update user guides for the latest software release",
        "taskDate": "2024-10-27",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare release notes",
        "taskDescription": "Write and publish release notes for the product version 4.0",
        "taskDate": "2024-10-15",
        "category": "Release"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "vikram@v.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Onboard new team members",
        "taskDescription": "Help new team members get started with the project setup",
        "taskDate": "2024-10-19",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Configure CI/CD pipeline",
        "taskDescription": "Set up the CI/CD pipeline for the devops team",
        "taskDate": "2024-10-17",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare budget analysis",
        "taskDescription": "Analyze and prepare the annual budget report for the finance team",
        "taskDate": "2024-10-11",
        "category": "Finance"
      }
    ]
  }
]

const admin = [{
     "id": 1,
    "firstName": "Admin",
    "email": "admin@me.com",
    "password": "123",
}]



export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees, admin}
    
}

export {employees, admin}