import { ResearchTypeConfig } from '../../types';

const experimentalResearch: ResearchTypeConfig = {
  title: "Advanced Experimental Design",
  description: "Detailed experimental research planning",
  sections: [
    {
      title: "I. Abstract",
      prompt: "Summarize the experimental design and objectives",
      requirements: [
        "Provide a concise overview of the experiment",
        "State the main objectives and purpose",
        "Mention the key hypotheses or research questions",
        "Highlight the expected contribution to the field",
        "Summarize key developments in the field",
        "Explain the motivation for the study",
        "Keep the context concise and relevant"
      ]
    },
    {
      title: "I.B. Keywords",
      prompt: "List relevant keywords associated with the research",
      requirements: [
        "Include 5-7 pertinent keywords",
        "Ensure keywords reflect main topics",
        "Assist in indexing and search optimization",
        "Avoid overly generic terms"
      ]
    },
    {
      title: "II. Introduction",
      prompt: "Present research questions and hypotheses",
      requirements: [
        "Introduce the experimental topic and significance",
        "Clearly state the research questions",
        "Formulate the hypotheses to be tested",
        "Explain the rationale behind the hypotheses",
        "Define the specific problem the experiment addresses",
        "Articulate the problem clearly",
        "Explain its relevance to the field",
        "Discuss consequences of not addressing it",
        "Set the stage for research questions"
      ]
    },
    {
      title: "II.A. Significance of the Study",
      prompt: "Explain the importance and potential impact",
      requirements: [
        "Discuss theoretical contributions",
        "Highlight practical applications",
        "Justify relevance to stakeholders",
        "Emphasize how the study addresses a gap",
        "Include explanation of the use of AI, agentic AI processes, chain of thought, and tree of thought processes"
      ]
    },
    {
      title: "III. Methods",
      prompt: "Detail experimental procedures and materials",
      requirements: [
        "Describe the experimental setup and materials",
        "Outline the step-by-step procedures",
        "Specify control variables and conditions",
        "Detail how data will be collected and recorded"
      ]
    },
    {
      title: "III.A. Experimental Design",
      prompt: "Explain the overall design and structure",
      requirements: [
        "Specify the type of design (e.g., randomized, factorial)",
        "Define independent and dependent variables",
        "Describe control groups or conditions",
        "Justify the chosen design methodology"
      ]
    },
    {
      title: "III.B. Materials and Equipment",
      prompt: "List and describe all materials and equipment",
      requirements: [
        "Provide specifications for equipment",
        "Include any specialized tools or software",
        "Discuss sourcing of materials",
        "Explain the role of materials"
      ]
    },
    {
      title: "III.C. Design Selection",
      prompt: "Detail criteria and methods for selecting design",
      requirements: [
        "Describe inclusion and exclusion criteria",
        "Explain strategies",
        "Discuss sample size determination",
        "Address ethical considerations"
      ]
    },
    {
      title: "III.D. Data Collection Procedures",
      prompt: "Explain data gathering methods",
      requirements: [
        "Describe measurement instruments",
        "Discuss the data recording process",
        "Detail any calibration procedures",
        "Ensure methods align with objectives"
      ]
    },
    {
      title: "III.E. Variable Control",
      prompt: "Detail variable management",
      requirements: [
        "Identify control variables",
        "Explain methods to minimize confounding factors",
        "Discuss randomization techniques",
        "Describe any blinding procedures"
      ]
    },
    {
      title: "IV. Expected Results",
      prompt: "Describe anticipated outcomes",
      requirements: [
        "State expected findings or trends",
        "Explain analysis methods",
        "Highlight result significance",
        "Discuss potential challenges"
      ]
    },
    {
      title: "IV.A. Hypothetical Data Examples",
      prompt: "Provide example results",
      requirements: [
        "Include sample tables or graphs",
        "Use hypothetical data to illustrate",
        "Ensure clarity and relevance",
        "Avoid overstating certainty"
      ]
    },
    {
      title: "IV.B. Statistical Analysis Plan",
      prompt: "Detail statistical methods",
      requirements: [
        "Specify tests or models",
        "Explain test assumptions",
        "Discuss analysis software",
        "Justify statistical choices"
      ]
    },
    {
      title: "IV.C. Interpretation Framework",
      prompt: "Explain result interpretation",
      requirements: [
        "Relate to hypotheses",
        "Discuss implications",
        "Consider alternatives",
        "Acknowledge limitations"
      ]
    },
    {
      title: "V. Discussion",
      prompt: "Consider implications and limitations",
      requirements: [
        "Interpret results in context",
        "Discuss implications",
        "Identify limitations",
        "Propose mitigation strategies"
      ]
    },
    {
      title: "V.A. Comparison with Literature",
      prompt: "Compare with existing studies",
      requirements: [
        "Identify similarities and differences",
        "Discuss discrepancies",
        "Relate to theory",
        "Context in field"
      ]
    },
    {
      title: "V.B. Theoretical Implications",
      prompt: "Explore theory impact",
      requirements: [
        "Discuss theory support/challenges",
        "Consider theoretical revisions",
        "Highlight new developments",
        "Address broader questions"
      ]
    },
    {
      title: "VI. Timeline",
      prompt: "Outline schedule and milestones",
      requirements: [
        "Detail phase timeline",
        "Include milestones",
        "Highlight dependencies",
        "Indicate resource allocation"
      ]
    }
  ]
};

export default experimentalResearch;