import { ResearchTypeConfig } from '../../types';

const literatureResearch: ResearchTypeConfig = {
  title: "Advanced Literature Search",
  description: "A comprehensive literature search to support advanced research",
  sections: [
    {
      title: "I. Introduction",
      prompt: "Provide an overview of the research topic and its significance",
      requirements: [
        "Introduce the advanced research topic",
        "Explain the importance and relevance of the topic",
        "Outline the objectives of the literature search",
        "State the scope and limitations of the search"
      ]
    },
    {
      title: "I.A. Background of the Topic",
      prompt: "Provide detailed background information on the research topic",
      requirements: [
        "Discuss the historical development of the topic",
        "Highlight key milestones and breakthroughs",
        "Explain foundational theories or concepts",
        "Mention previous research that laid the groundwork"
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
      title: "I.C. Rationale for the Study",
      prompt: "Explain the need for conducting the literature search",
      requirements: [
        "Identify gaps in current knowledge",
        "Discuss recent developments that necessitate the study",
        "Explain how the study contributes to the field",
        "Justify the timing and relevance of the research"
      ]
    },
    {
      title: "I.D. Research Questions",
      prompt: "List the specific research questions guiding the literature search",
      requirements: [
        "Formulate clear and focused research questions",
        "Ensure questions are aligned with the study objectives",
        "Explain the significance of each question",
        "Discuss how answering these questions will advance understanding"
      ]
    },
    {
      title: "I.E. Definitions of Key Terms",
      prompt: "Define essential terms and concepts used in the study",
      requirements: [
        "Provide clear definitions of technical terms",
        "Explain concepts that are crucial to understanding the topic",
        "Reference authoritative sources for definitions",
        "Ensure consistency in the use of terminology throughout the paper"
      ]
    },
    {
      title: "II. Literature Search Methodology",
      prompt: "Describe the methods used to conduct the literature search",
      requirements: [
        "Include explanation of the use of AI, agentic AI processes, chain of thought, and tree of thought processes",
        "Detail the databases and sources consulted",
        "Explain the search strategies and keywords used",
        "Describe inclusion and exclusion criteria",
        "Discuss any challenges or limitations encountered"
      ]
    },
    {
      title: "II.A. Selection of Databases and Sources",
      prompt: "Explain the rationale for choosing specific databases and sources",
      requirements: [
        "List the databases and sources used",
        "Discuss the relevance of each source to the research topic",
        "Explain how the sources cover the necessary scope",
        "Mention any source limitations and how they were addressed"
      ]
    },
    {
      title: "II.B. Search Strategies and Techniques",
      prompt: "Detail the specific search strategies employed",
      requirements: [
        "Describe the use of Boolean operators",
        "Explain the application of advanced search filters",
        "Discuss the use of thesauri or controlled vocabularies",
        "Provide examples of effective search strings"
      ]
    },
    {
      title: "II.C. Keyword Development",
      prompt: "Explain how keywords and phrases were identified and refined",
      requirements: [
        "List initial keywords and phrases",
        "Discuss the process of refining keywords based on results",
        "Explain how synonyms and related terms were included",
        "Mention any tools used for keyword expansion"
      ]
    },
    {
      title: "II.D. Inclusion and Exclusion Criteria",
      prompt: "Define the criteria for selecting relevant literature",
      requirements: [
        "Specify the time frame of publications considered",
        "State the types of studies included",
        "Explain criteria for excluding certain studies",
        "Discuss how the criteria ensure relevance and quality"
      ]
    },
    {
      title: "II.E. Data Extraction and Management",
      prompt: "Describe how data from the literature was extracted and managed",
      requirements: [
        "Explain the process of recording and organizing findings",
        "Mention any software or tools used for data management",
        "Discuss how duplicate records were handled",
        "Describe methods for ensuring data accuracy"
      ]
    },
    {
      title: "III. Findings",
      prompt: "Present the results of the literature search",
      requirements: [
        "Summarize the number and types of sources found",
        "Highlight key studies and their contributions",
        "Identify prevailing themes or trends",
        "Use tables or figures to organize the data"
      ]
    },
    {
      title: "III.A. Overview of Collected Literature",
      prompt: "Provide an overview of the literature collected",
      requirements: [
        "Report the total number of sources gathered",
        "Break down sources by type",
        "Discuss the geographical distribution of studies",
        "Mention the publication dates range"
      ]
    },
    {
      title: "III.B. Key Theoretical Contributions",
      prompt: "Highlight significant theoretical works identified",
      requirements: [
        "Discuss foundational theories relevant to the topic",
        "Identify influential theoretical frameworks",
        "Explain how these theories have shaped the field",
        "Cite seminal works and their authors"
      ]
    },
    {
      title: "III.C. Empirical Findings",
      prompt: "Summarize key empirical studies and their findings",
      requirements: [
        "Highlight major empirical research contributions",
        "Discuss methodologies used in these studies",
        "Summarize significant results and conclusions",
        "Explain how findings relate to research objectives"
      ]
    },
    {
      title: "III.D. Trends and Patterns",
      prompt: "Identify and discuss emerging trends and patterns",
      requirements: [
        "Analyze common themes across studies",
        "Identify shifts in research focus over time",
        "Discuss technological or methodological advancements",
        "Highlight consensus or debates in literature"
      ]
    },
    {
      title: "III.E. Gaps in the Literature",
      prompt: "Identify gaps or under-explored areas",
      requirements: [
        "Point out topics lacking sufficient research",
        "Discuss limitations in current studies",
        "Explain how gaps present opportunities",
        "Relate gaps to research objectives"
      ]
    },
    {
      title: "IV. Analysis and Synthesis",
      prompt: "Analyze and synthesize the findings",
      requirements: [
        "Discuss how findings relate to objectives",
        "Compare different viewpoints",
        "Identify inconsistencies in literature",
        "Relate findings to existing theories"
      ]
    },
    {
      title: "IV.A. Thematic Analysis",
      prompt: "Conduct a detailed thematic analysis",
      requirements: [
        "Identify major recurring themes",
        "Explain themes' contribution to understanding",
        "Discuss sub-themes and relevance",
        "Provide specific study examples"
      ]
    },
    {
      title: "IV.B. Comparative Analysis",
      prompt: "Compare differing perspectives",
      requirements: [
        "Highlight areas of agreement and disagreement",
        "Discuss reasons for differing viewpoints",
        "Analyze impact of differences",
        "Relate perspectives to research questions"
      ]
    },
    {
      title: "V. Implications for Research",
      prompt: "Discuss implications for future research",
      requirements: [
        "Explain how findings inform research",
        "Suggest investigation areas",
        "Propose research questions",
        "Discuss significance for field"
      ]
    },
    {
      title: "VI. Conclusion",
      prompt: "Summarize key insights",
      requirements: [
        "Recap main findings",
        "Emphasize search importance",
        "Provide final thoughts",
        "Suggest next steps"
      ]
    }
  ]
};

export default literatureResearch;