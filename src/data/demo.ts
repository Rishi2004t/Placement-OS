// Demo data for PlacementOS
export const demoData = {
  user: {
    name: "Alex", // Used in Hero
    firstName: "Rishi", // Requested for Product Showcase greeting
    targetRole: "Software Engineer",
    company: "Tech Startups",
  },
  readinessScore: 78,
  skills: [
    { name: "DSA", score: 86 },
    { name: "SQL", score: 91 },
    { name: "DBMS", score: 72 },
    { name: "CN", score: 64 },
    { name: "OS", score: 68 },
  ],
  todaysFocus: [
    { task: "SQL Joins", status: "completed" },
    { task: "Sliding Window", status: "in-progress" },
    { task: "DBMS Normalization", status: "pending" },
  ],
  upcoming: [
    { task: "System Design Basics" },
  ],
  skillGap: {
    strong: ["Java", "SQL", "DSA"],
    needsAttention: ["Computer Networks", "Operating Systems"],
    recommendedNext: ["Operating Systems fundamentals", "Computer Networks revision"]
  },
  practice: {
    today: [
      { label: "5 DSA problems", completed: 3, total: 5 },
      { label: "3 SQL queries", completed: 3, total: 3 },
      { label: "10 CS fundamentals MCQs", completed: 0, total: 10 }
    ]
  },
  interviews: {
    nextMock: {
      role: "Software Engineer — Technical Round",
      topics: ["Java", "SQL", "OOP", "DSA"]
    }
  },
  preparationAreas: [
    {
      id: "dsa",
      name: "DSA",
      score: 86,
      priority: "Low",
      focusTopics: ["Graphs", "Dynamic Programming"],
      recommendedAction: "15 interview questions"
    },
    {
      id: "sql",
      name: "SQL",
      score: 91,
      priority: "Low",
      focusTopics: ["Window Functions"],
      recommendedAction: "5 advanced queries"
    },
    {
      id: "dbms",
      name: "DBMS",
      score: 72,
      priority: "Medium",
      focusTopics: ["Normalization", "Transactions"],
      recommendedAction: "30 min revision"
    },
    {
      id: "cn",
      name: "Computer Networks",
      score: 64,
      priority: "High",
      focusTopics: ["TCP/IP", "HTTP/HTTPS", "DNS", "OSI Model"],
      recommendedAction: "45 min revision + 10 interview questions"
    },
    {
      id: "os",
      name: "Operating Systems",
      score: 68,
      priority: "High",
      focusTopics: ["Process Management", "Concurrency"],
      recommendedAction: "45 min revision"
    },
    {
      id: "projects",
      name: "Projects",
      score: 91,
      priority: "Low",
      focusTopics: ["System Architecture"],
      recommendedAction: "Update resume bullet points"
    },
    {
      id: "interview",
      name: "Interview",
      score: 76,
      priority: "Medium",
      focusTopics: ["Behavioral", "System Design"],
      recommendedAction: "1 mock interview session"
    }
  ]
};
