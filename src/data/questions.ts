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
    question: "Given a singly linked list, which approach is optimal for finding the middle node in a single pass?",
    options: ["Traverse to find length, then traverse half", "Fast and slow pointers (Tortoise and Hare)", "Store nodes in an array", "Use a hash map"],
    correctAnswerIndex: 1,
    explanation: "The fast pointer moves two steps while the slow pointer moves one step. When the fast pointer reaches the end, the slow pointer is at the middle."
  },
  {
    id: "q_dsa_2",
    topicId: "dsa",
    question: "What is the time complexity of building a heap from an unsorted array of n elements?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswerIndex: 1,
    explanation: "By calling heapify from the bottom-up (starting from the last non-leaf node), a heap can be built in strictly O(n) time."
  },
  {
    id: "q_dsa_3",
    topicId: "dsa",
    question: "Which of the following is true about topological sorting?",
    options: ["It applies to any directed graph", "It requires the graph to be a Directed Acyclic Graph (DAG)", "It can only be implemented using BFS", "It finds the shortest path between nodes"],
    correctAnswerIndex: 1,
    explanation: "Topological sort is only possible for Directed Acyclic Graphs (DAGs) because any cycle would mean a task must be completed before itself."
  },
  {
    id: "q_dsa_4",
    topicId: "dsa",
    question: "In the context of dynamic programming, what does 'memoization' refer to?",
    options: ["A bottom-up tabulation approach", "A top-down approach caching results of subproblems", "Memory allocation for matrices", "Greedy selection of states"],
    correctAnswerIndex: 1,
    explanation: "Memoization is a top-down DP technique where the results of expensive function calls (subproblems) are cached to avoid redundant calculations."
  },
  {
    id: "q_dsa_5",
    topicId: "dsa",
    question: "What is the worst-case time complexity of QuickSort and how can it be mitigated?",
    options: ["O(n log n), mitigated by choosing the first element as pivot", "O(n^2), mitigated by using Randomized QuickSort", "O(n^2), mitigated by using Bubble Sort instead", "O(n), mitigated by using Merge Sort"],
    correctAnswerIndex: 1,
    explanation: "QuickSort's worst-case O(n^2) occurs when the array is already sorted and the last/first element is chosen as the pivot. Randomly picking a pivot avoids this."
  },
  
  // SQL
  {
    id: "q_sql_1",
    topicId: "sql",
    question: "What is the primary difference between a clustered and non-clustered index?",
    options: ["Clustered indexes are faster for INSERTs", "A table can have multiple clustered indexes", "Clustered indexes determine the physical order of data rows", "Non-clustered indexes do not use B-trees"],
    correctAnswerIndex: 2,
    explanation: "A clustered index physically sorts the data rows in the table based on the key, so a table can only have one clustered index."
  },
  {
    id: "q_sql_2",
    topicId: "sql",
    question: "Which window function assigns a unique sequential integer to rows within a partition, without gaps for ties?",
    options: ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
    correctAnswerIndex: 2,
    explanation: "ROW_NUMBER() assigns a distinct sequential integer to every row, ignoring ties completely, unlike RANK() or DENSE_RANK()."
  },
  {
    id: "q_sql_3",
    topicId: "sql",
    question: "What is a 'correlated subquery'?",
    options: ["A subquery that runs once for the entire outer query", "A subquery that references columns from the outer query", "A subquery that returns multiple columns", "A subquery used only in the FROM clause"],
    correctAnswerIndex: 1,
    explanation: "A correlated subquery contains a reference to a table in the outer query, meaning it must be evaluated once for each row processed by the outer query."
  },
  {
    id: "q_sql_4",
    topicId: "sql",
    question: "Which isolation level is most prone to 'phantom reads'?",
    options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    correctAnswerIndex: 1,
    explanation: "While Read Uncommitted is prone to dirty reads, Read Committed prevents dirty reads but allows non-repeatable and phantom reads."
  },
  {
    id: "q_sql_5",
    topicId: "sql",
    question: "What does the SQL command EXPLAIN do?",
    options: ["Translates SQL into English", "Executes a query ignoring indexes", "Shows the execution plan of a query", "Optimizes the database schema"],
    correctAnswerIndex: 2,
    explanation: "EXPLAIN (or EXPLAIN PLAN) shows how the database engine intends to execute a query, including index usage and join strategies."
  },

  // DBMS
  {
    id: "q_dbms_1",
    topicId: "dbms",
    question: "In the context of ACID properties, what does 'Durability' ensure?",
    options: ["Transactions execute concurrently without interference", "Once a transaction commits, its changes survive system crashes", "Transactions are indivisible units of work", "Data always conforms to schema constraints"],
    correctAnswerIndex: 1,
    explanation: "Durability guarantees that once a transaction has been committed, the data is permanently stored, usually via a Write-Ahead Log (WAL)."
  },
  {
    id: "q_dbms_2",
    topicId: "dbms",
    question: "What is the primary advantage of a B+ Tree over a standard B-Tree for database indexing?",
    options: ["B+ Trees store data at internal nodes", "B+ Trees have linked leaf nodes for faster range queries", "B+ Trees are binary trees", "B+ Trees do not require balancing"],
    correctAnswerIndex: 1,
    explanation: "In a B+ Tree, all data pointers are stored in the leaf nodes, which are linked together, making sequential access (range queries) highly efficient."
  },
  {
    id: "q_dbms_3",
    topicId: "dbms",
    question: "What happens during a 'cascading rollback'?",
    options: ["A single transaction rolls back multiple times", "Failure of one transaction causes dependent transactions to also roll back", "The database completely resets to a backup state", "Indexes are rebuilt automatically"],
    correctAnswerIndex: 1,
    explanation: "A cascading rollback occurs when an uncommitted transaction fails, and other transactions that read its dirty data must also be rolled back."
  },
  {
    id: "q_dbms_4",
    topicId: "dbms",
    question: "What is Boyce-Codd Normal Form (BCNF)?",
    options: ["A stricter version of 3NF where every determinant is a candidate key", "A form that eliminates multi-valued dependencies", "The baseline form requiring atomicity", "A physical storage optimization"],
    correctAnswerIndex: 0,
    explanation: "BCNF is a slightly stronger version of 3NF. It requires that for every non-trivial functional dependency X -> Y, X must be a superkey."
  },
  {
    id: "q_dbms_5",
    topicId: "dbms",
    question: "What is the CAP Theorem in distributed databases?",
    options: ["A system can only provide Consistency, Availability, and Partition tolerance simultaneously", "A system can only provide at most two out of Consistency, Availability, and Partition tolerance", "A system must prioritize Concurrency over Availability", "Data must be Cached, Authenticated, and Partitioned"],
    correctAnswerIndex: 1,
    explanation: "The CAP Theorem states that a distributed data store cannot simultaneously guarantee Consistency, Availability, and Partition tolerance; it must trade off one."
  },

  // Computer Networks
  {
    id: "q_cn_1",
    topicId: "cn",
    question: "What is the primary function of the TCP 3-way handshake?",
    options: ["To encrypt data packets", "To establish a reliable connection and synchronize sequence numbers", "To resolve IP addresses to MAC addresses", "To compress HTTP payloads"],
    correctAnswerIndex: 1,
    explanation: "The 3-way handshake (SYN, SYN-ACK, ACK) establishes a TCP connection, synchronizing sequence numbers to ensure reliable ordered delivery."
  },
  {
    id: "q_cn_2",
    topicId: "cn",
    question: "In the OSI model, which layer handles data encryption and compression?",
    options: ["Session Layer", "Presentation Layer", "Application Layer", "Transport Layer"],
    correctAnswerIndex: 1,
    explanation: "The Presentation Layer (Layer 6) is responsible for formatting, encrypting, and compressing data for the application layer."
  },
  {
    id: "q_cn_3",
    topicId: "cn",
    question: "What is the role of a subnet mask?",
    options: ["To hide the IP address from external networks", "To determine which part of an IP address is the network ID and which is the host ID", "To encrypt traffic on a local network", "To assign dynamic IP addresses to clients"],
    correctAnswerIndex: 1,
    explanation: "A subnet mask separates the IP address into the network address and host address, defining the boundaries of the local subnet."
  },
  {
    id: "q_cn_4",
    topicId: "cn",
    question: "Which of the following describes BGP (Border Gateway Protocol)?",
    options: ["An internal routing protocol based on link-state", "A protocol used to assign IP addresses dynamically", "The core routing protocol of the Internet (an exterior gateway protocol)", "A protocol for securing email transmission"],
    correctAnswerIndex: 2,
    explanation: "BGP is the protocol that makes the internet work, routing data between different autonomous systems (AS) globally."
  },
  {
    id: "q_cn_5",
    topicId: "cn",
    question: "What is Network Address Translation (NAT) primarily used for?",
    options: ["To translate domain names to IP addresses", "To encrypt packet headers", "To map private IP addresses to a public IP address", "To route packets between autonomous systems"],
    correctAnswerIndex: 2,
    explanation: "NAT allows multiple devices on a private network to share a single public IP address for internet access, helping preserve IPv4 addresses."
  },

  // Operating Systems
  {
    id: "q_os_1",
    topicId: "os",
    question: "What is the primary difference between a process and a thread?",
    options: ["Threads have independent memory spaces; processes share memory", "Processes have independent memory spaces; threads share memory within a process", "Threads are hardware-based; processes are software-based", "Processes can run concurrently; threads cannot"],
    correctAnswerIndex: 1,
    explanation: "A process is an independent execution environment with its own memory space. Threads exist within a process and share its memory and resources."
  },
  {
    id: "q_os_2",
    topicId: "os",
    question: "What are the four necessary conditions for a deadlock to occur?",
    options: ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait", "Concurrency, Preemption, Starvation, Isolation", "Mutual Exclusion, Preemption, Circular Wait, Aging", "Hold and Wait, Priority Inversion, Mutual Exclusion, Aging"],
    correctAnswerIndex: 0,
    explanation: "Coffman's conditions state that a deadlock can only occur if Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait hold simultaneously."
  },
  {
    id: "q_os_3",
    topicId: "os",
    question: "What is 'virtual memory'?",
    options: ["Memory used exclusively by virtual machines", "A technique that gives the illusion of a larger main memory by using disk storage", "Cache memory located inside the CPU", "Memory allocated for the OS kernel only"],
    correctAnswerIndex: 1,
    explanation: "Virtual memory uses hardware and software to allow a computer to compensate for physical memory shortages by temporarily transferring data to disk storage."
  },
  {
    id: "q_os_4",
    topicId: "os",
    question: "Which CPU scheduling algorithm can suffer from 'starvation'?",
    options: ["Round Robin", "First-Come, First-Served", "Shortest Job First (SJF)", "None of the above"],
    correctAnswerIndex: 2,
    explanation: "In Shortest Job First or Priority scheduling, a continuous stream of short/high-priority jobs can cause long/low-priority jobs to never execute (starvation)."
  },
  {
    id: "q_os_5",
    topicId: "os",
    question: "What is the purpose of a Translation Lookaside Buffer (TLB)?",
    options: ["To cache frequently used disk blocks", "To translate high-level code to machine code", "To cache virtual-to-physical address translations for faster memory access", "To buffer network packets before processing"],
    correctAnswerIndex: 2,
    explanation: "The TLB is a specialized hardware cache used by the MMU to significantly reduce the time taken to access a user memory location during address translation."
  }
];
