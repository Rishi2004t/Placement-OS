// Mock candidate profile
const candidateSkills = [
  "java",
  "sql",
  "data structures",
  "algorithms",
  "oop"
]

// Skill dictionary with normalized forms
const skillDictionary: Record<string, string[]> = {
  "Java": ["java", "j2ee"],
  "JavaScript": ["javascript", "js", "es6"],
  "TypeScript": ["typescript", "ts"],
  "React": ["react", "reactjs", "react.js"],
  "Node.js": ["node", "node.js", "nodejs"],
  "SQL": ["sql", "postgresql", "mysql"],
  "Data Structures": ["data structures", "dsa"],
  "Algorithms": ["algorithms", "dsa"],
  "REST APIs": ["rest", "rest api", "rest apis", "restful", "restful apis"],
  "Git": ["git", "github", "gitlab"],
  "Docker": ["docker", "containerization"],
  "System Design": ["system design"],
  "DBMS": ["dbms", "database management"],
  "Operating Systems": ["operating systems", "os"],
  "Computer Networks": ["computer networks", "networking", "cn"],
  "OOP": ["oop", "object oriented programming", "object-oriented"]
}

export type AnalysisResult = {
  jobTitle: string;
  readinessScore: number;
  strong: string[];
  needsAttention: string[];
  recommendedNext: string[];
}

export function analyzeJobDescription(jd: string): AnalysisResult | null {
  if (!jd || jd.trim().length < 10) return null

  const lowerJd = jd.toLowerCase()
  
  // Try to extract a title from the first line
  const lines = jd.split('\n').map(l => l.trim()).filter(l => l.length > 0)
  const jobTitle = lines.length > 0 ? lines[0] : "Software Engineer"

  const foundRequiredSkills = new Set<string>()

  // Find matches in the dictionary
  for (const [standardSkill, variations] of Object.entries(skillDictionary)) {
    for (const variant of variations) {
      // Basic word boundary match
      const regex = new RegExp(`\\b${variant.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i')
      if (regex.test(lowerJd)) {
        foundRequiredSkills.add(standardSkill)
        break
      }
    }
  }

  const requiredSkills = Array.from(foundRequiredSkills)

  if (requiredSkills.length === 0) {
    return null
  }

  const strong: string[] = []
  const needsAttention: string[] = []
  
  // Categorize based on mock candidate profile
  requiredSkills.forEach(skill => {
    const isKnown = skillDictionary[skill].some(variant => 
      candidateSkills.includes(variant.toLowerCase())
    )
    if (isKnown) {
      strong.push(skill)
    } else {
      needsAttention.push(skill)
    }
  })

  // Deterministic readiness calculation
  // Base readiness assumes they have standard CS skills, plus match ratio
  const matchRatio = requiredSkills.length > 0 ? strong.length / requiredSkills.length : 0
  const score = Math.round(matchRatio * 100)
  // Ensure score is within realistic bounds, e.g. at least 10% if they have some skills
  const readinessScore = Math.max(0, Math.min(100, score))

  // Generate recommendations
  const recommendedNext = needsAttention.slice(0, 3).map(skill => {
    if (skill === "System Design") return "System Design basics"
    if (skill === "Docker") return "Docker fundamentals"
    if (skill === "REST APIs") return "REST API revision"
    return `${skill} revision`
  })

  // If no recommendations from gaps, suggest general prep
  if (recommendedNext.length === 0) {
    recommendedNext.push("Mock interview practice")
    recommendedNext.push("Advanced System Design")
  }

  return {
    jobTitle,
    readinessScore,
    strong,
    needsAttention,
    recommendedNext
  }
}
