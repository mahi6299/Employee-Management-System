const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    "tasks": [
      {
        "title": "Fix login bug",
        description: "Resolve the issue preventing user login.",
        date: "2025-07-08",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        "title": "Create landing page",
        description: "Design and implement the main landing page.",
        date: "2025-07-06",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update API docs",
        description: "Add new endpoints and examples to the documentation.",
        date: "2025-07-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Neha",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Optimize database",
        description: "Refactor queries for better performance.",
        date: "2025-07-07",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Set up CI/CD",
        description: "Automate build and deployment processes.",
        date: "2025-07-06",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from team members.",
        date: "2025-07-05",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare report",
        description: "Generate weekly task progress report.",
        date: "2025-07-08",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Raj",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Integrate payment gateway",
        description: "Add Razorpay integration to checkout flow.",
        date: "2025-07-07",
        category: "Payments",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug triage",
        description: "Identify and label GitHub issues.",
        date: "2025-07-06",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add dark mode",
        description: "Implement dark theme toggle.",
        date: "2025-07-06",
        category: "UI/UX",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Pooja",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create unit tests",
        description: "Write unit tests for core modules.",
        date: "2025-07-05",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Implement search feature",
        description: "Add search functionality using elastic search.",
        date: "2025-07-08",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update user guide",
        description: "Include latest features in the user manual.",
        date: "2025-07-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix navbar alignment",
        description: "Correct the alignment issue in mobile view.",
        date: "2025-07-07",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikas",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Refactor codebase",
        description: "Improve code readability and structure.",
        date: "2025-07-07",
        category: "Refactoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Build analytics dashboard",
        description: "Create dashboard to track app usage.",
        date: "2025-07-08",
        category: "Analytics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix logout bug",
        description: "Resolve logout redirect error.",
        date: "2025-07-06",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write test plan",
        description: "Prepare testing checklist for next release.",
        date: "2025-07-05",
        category: "QA",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Sync meeting notes",
        description: "Document and share client call summary.",
        date: "2025-07-06",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Kiran",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees' , JSON.stringify(employees));
  localStorage.setItem('admin' , JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return {employees , admin};
}


