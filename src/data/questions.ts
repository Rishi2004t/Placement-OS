export type Question = {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export const practiceQuestions: Question[] = [
  // DSA
  {
    id: "q_dsa_1",
    topicId: "dsa",
    question: "What is the time complexity of searching for an element in a balanced Binary Search Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswerIndex: 1,
    explanation: "In a balanced BST, every step eliminates half of the remaining nodes, leading to an O(log n) time complexity."
  },
  {
    id: "q_dsa_2",
    topicId: "dsa",
    question: "Which data structure is most suitable for implementing a LRU (Least Recently Used) cache?",
    options: ["Array and Stack", "Hash Map and Doubly Linked List", "Binary Search Tree", "Queue"],
    correctAnswerIndex: 1,
    explanation: "A Hash Map provides O(1) access to items, while a Doubly Linked List allows O(1) removal and insertion to maintain the recent usage order."
  },
  {
    id: "q_dsa_3",
    topicId: "dsa",
    question: "What algorithmic technique is primarily used to solve the 0/1 Knapsack problem?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correctAnswerIndex: 2,
    explanation: "Dynamic Programming is used to solve the 0/1 Knapsack problem by breaking it down into smaller subproblems and storing their results."
  },
  {
    id: "q_dsa_4",
    topicId: "dsa",
    question: "In a min-heap, where is the smallest element located?",
    options: ["Root node", "Any leaf node", "Leftmost node", "Rightmost node"],
    correctAnswerIndex: 0,
    explanation: "By definition of a min-heap, the value of the root node must be less than or equal to the values of its children."
  },
  {
    id: "q_dsa_5",
    topicId: "dsa",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correctAnswerIndex: 2,
    explanation: "Merge Sort consistently offers O(n log n) time complexity in the best, average, and worst cases."
  },
  
  // SQL
  {
    id: "q_sql_1",
    topicId: "sql",
    question: "Which clause is used to filter the results of a GROUP BY operation?",
    options: ["WHERE", "ORDER BY", "HAVING", "FILTER"],
    correctAnswerIndex: 2,
    explanation: "The HAVING clause is used specifically to filter groups created by the GROUP BY clause."
  },
  {
    id: "q_sql_2",
    topicId: "sql",
    question: "What type of JOIN returns all rows from the left table and matched rows from the right table?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctAnswerIndex: 1,
    explanation: "A LEFT JOIN (or LEFT OUTER JOIN) preserves all rows from the left table regardless of whether there is a match in the right table."
  },
  {
    id: "q_sql_3",
    topicId: "sql",
    question: "Which SQL function is used to count the number of rows in a table?",
    options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
    correctAnswerIndex: 1,
    explanation: "The COUNT() function returns the number of rows that match a specified criterion."
  },
  {
    id: "q_sql_4",
    topicId: "sql",
    question: "What does the ACID property 'Atomicity' guarantee in a database transaction?",
    options: ["Data is isolated from other transactions", "Transactions are applied completely or not at all", "Data is consistent before and after", "Data changes are permanent"],
    correctAnswerIndex: 1,
    explanation: "Atomicity ensures that a transaction is treated as a single, indivisible unit of work."
  },
  {
    id: "q_sql_5",
    topicId: "sql",
    question: "Which statement is used to remove a table's structure and all its data from the database?",
    options: ["DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE", "DROP TABLE"],
    correctAnswerIndex: 3,
    explanation: "DROP TABLE entirely removes the table definition and all its data, whereas TRUNCATE only removes the data."
  },

  // DBMS
  {
    id: "q_dbms_1",
    topicId: "dbms",
    question: "What is the primary purpose of Database Normalization?",
    options: ["Improve query performance", "Reduce data redundancy", "Enforce security", "Create backups"],
    correctAnswerIndex: 1,
    explanation: "Normalization organizes database tables to minimize redundancy and dependency."
  },
  {
    id: "q_dbms_2",
    topicId: "dbms",
    question: "Which normal form deals with removing transitive dependencies?",
    options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "BCNF"],
    correctAnswerIndex: 2,
    explanation: "3NF dictates that a table must be in 2NF and have no transitive partial dependencies."
  },
  {
    id: "q_dbms_3",
    topicId: "dbms",
    question: "What is a Foreign Key?",
    options: ["A key that uniquely identifies a record", "A key used only for encryption", "A field that links two tables together", "An index for faster searches"],
    correctAnswerIndex: 2,
    explanation: "A Foreign Key is a field (or collection of fields) in one table that refers to the Primary Key in another table."
  },
  {
    id: "q_dbms_4",
    topicId: "dbms",
    question: "Which locking protocol avoids deadlock by acquiring all locks before a transaction begins?",
    options: ["Two-Phase Locking (2PL)", "Timestamp Ordering", "Conservative 2PL", "Strict 2PL"],
    correctAnswerIndex: 2,
    explanation: "Conservative (or static) 2PL requires a transaction to lock all the items it accesses before it begins execution, thus preventing deadlocks."
  },
  {
    id: "q_dbms_5",
    topicId: "dbms",
    question: "What is the role of the Write-Ahead Log (WAL)?",
    options: ["To speed up read operations", "To ensure atomicity and durability", "To compress database size", "To index text data"],
    correctAnswerIndex: 1,
    explanation: "WAL is a standard approach to transaction logging where changes are written to the log before they are applied to the database."
  },

  // Computer Networks
  {
    id: "q_cn_1",
    topicId: "cn",
    question: "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
    correctAnswerIndex: 1,
    explanation: "The Network Layer manages logical addressing (IP addresses) and routes packets across networks."
  },
  {
    id: "q_cn_2",
    topicId: "cn",
    question: "What is the primary difference between TCP and UDP?",
    options: ["TCP is faster than UDP", "TCP is connectionless, UDP is connection-oriented", "TCP provides reliable delivery, UDP does not", "UDP is used for email, TCP for streaming"],
    correctAnswerIndex: 2,
    explanation: "TCP establishes a reliable, error-checked connection, while UDP sends packets without delivery guarantees (best-effort)."
  },
  {
    id: "q_cn_3",
    topicId: "cn",
    question: "What protocol resolves domain names to IP addresses?",
    options: ["DHCP", "ARP", "DNS", "FTP"],
    correctAnswerIndex: 2,
    explanation: "The Domain Name System (DNS) translates human-readable domain names into IP addresses."
  },
  {
    id: "q_cn_4",
    topicId: "cn",
    question: "Which port is used by default for HTTPS traffic?",
    options: ["80", "443", "22", "21"],
    correctAnswerIndex: 1,
    explanation: "Port 443 is the standard port for securing web traffic using HTTPS."
  },
  {
    id: "q_cn_5",
    topicId: "cn",
    question: "What is the purpose of the Address Resolution Protocol (ARP)?",
    options: ["Map IP addresses to MAC addresses", "Assign dynamic IP addresses", "Encrypt network traffic", "Route packets between subnets"],
    correctAnswerIndex: 0,
    explanation: "ARP is used to map a known logical (IP) address to an unknown physical (MAC) address on a local network."
  },

  // Operating Systems
  {
    id: "q_os_1",
    topicId: "os",
    question: "What is a 'thread' in the context of an Operating System?",
    options: ["A separate program execution", "The basic unit of CPU utilization", "A type of memory allocation", "A hardware interrupt"],
    correctAnswerIndex: 1,
    explanation: "A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler."
  },
  {
    id: "q_os_2",
    topicId: "os",
    question: "What is the 'dining philosophers problem' primarily an example of?",
    options: ["Memory fragmentation", "Disk scheduling algorithms", "Concurrency and synchronization issues", "Network routing protocols"],
    correctAnswerIndex: 2,
    explanation: "It is a classic synchronization problem illustrating the challenges of avoiding deadlock in concurrent algorithms."
  },
  {
    id: "q_os_3",
    topicId: "os",
    question: "Which component of the OS is responsible for managing memory?",
    options: ["File Manager", "Process Scheduler", "Memory Management Unit (MMU)", "Device Drivers"],
    correctAnswerIndex: 2,
    explanation: "The MMU is a hardware/software component responsible for handling memory access requested by the CPU."
  },
  {
    id: "q_os_4",
    topicId: "os",
    question: "What is 'thrashing'?",
    options: ["Excessive CPU heating", "High disk I/O due to excessive paging", "Rapid context switching", "Clearing cache memory"],
    correctAnswerIndex: 1,
    explanation: "Thrashing occurs when a computer's virtual memory subsystem is in a constant state of paging, rapidly exchanging data in memory for data on disk."
  },
  {
    id: "q_os_5",
    topicId: "os",
    question: "What does a Mutex do?",
    options: ["Accelerates CPU execution", "Allocates dynamic memory", "Prevents multiple threads from accessing a shared resource simultaneously", "Translates virtual addresses to physical ones"],
    correctAnswerIndex: 2,
    explanation: "A Mutex (Mutual Exclusion) object is used in concurrent programming to prevent race conditions by locking shared resources."
  }
];
