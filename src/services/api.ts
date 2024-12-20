import axios from 'axios';
import { ResearchTypeConfig, CitationStyle, ResearchType, ResearchMode } from '../types';
import generalResearch from './researchTypes/general';
import literatureResearch from './researchTypes/literature';
import experimentalResearch from './researchTypes/experimental';
import advancedGeneralResearch from './researchTypes/a_general';
import advancedLiteratureResearch from './researchTypes/a_literature';
import advancedExperimentalResearch from './researchTypes/a_expermental';

const formatRequirements = (requirements: string[]): string => {
  return requirements.map((req, index) => `${index + 1}. ${req}`).join('\n');
};

const constructPrompt = (title: string, section: any, citationStyle: CitationStyle, credits: number): string => {
  const citationInstructions = {
    academic: "Use APA format for citations (Author, Year). Include full references at the end.",
    web: "Include URLs and access dates for web sources. List full references with titles and URLs at the end.",
    informal: "Use in-text mentions of sources. Include a simplified reference list at the end."
  };

  return `
Research Title: "${title}"

Section: ${section.title}

Task: ${section.prompt}

Requirements:
${formatRequirements(section.requirements)}

Citation Instructions:
Academic (APA/MLA style)
Web Links (URLs with titles)
Informal (In-text mentions)

Credits: ${credits} (Displayed in 18pt font)

Research Guidelines:
1. Provide a comprehensive response addressing all requirements
2. Use academic language and proper structure
3. Support ALL claims with citations
4. Include at least 3-5 relevant citations
5. Add citations throughout the text, not just at the end
6. Conclude with a complete REFERENCES section

Format your response EXACTLY as follows:

[Content with in-text citations]

REFERENCES:
1. [First reference]
2. [Second reference]
(etc.)

Note: Do not include any other text or formatting instructions in your response.
`.trim();
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateTitle = async (query: string, apiKey: string): Promise<string> => {
  try {
    await delay(10000); // 10-second delay
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: 'Generate one professional, academic title for a research paper based on the given query, no commontary just the title. The title should be concise but descriptive.'
          },
          {
            role: 'user',
            content: `Generate a title for a scietific paper about: ${query}`
          }
        ],
        temperature: 0.6,
        max_tokens: 6000
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error?.message || 'Failed to generate title');
    }
    throw error;
  }
};

export const RESEARCH_TYPES: Record<string, ResearchTypeConfig> = {
  general: generalResearch,
  literature: literatureResearch,
  experimental: experimentalResearch,
  a_general: advancedGeneralResearch,
  a_literature: advancedLiteratureResearch,
  a_experimental: advancedExperimentalResearch
};

export const getResearchTypeConfig = (type: ResearchType, mode: ResearchMode): ResearchTypeConfig => {
  const key = mode === 'advanced' ? `a_${type}` : type;
  const config = RESEARCH_TYPES[key];
  
  if (!config) {
    console.error(`Research type configuration not found for ${key}`);
    return RESEARCH_TYPES[type]; // Fallback to basic type if advanced not found
  }
  
  return config;
};

export const conductSectionResearch = async (
  title: string,
  section: any,
  apiKey: string,
  citationStyle: CitationStyle,
  researchMode: ResearchMode,
  researchType: ResearchType
): Promise<{ content: string; citations: string[] }> => {
  try {
    const config = getResearchTypeConfig(researchType, researchMode);
    
    if (!config) {
      throw new Error(`Research type configuration not found for ${researchType} in ${researchMode} mode`);
    }

    const model = researchMode === 'advanced' ? 'mixtral-8x7b-32768' : 'mixtral-8x7b-32768';
    const credits = 10; // Default credits value
    const prompt = constructPrompt(title, section, citationStyle, credits);

    await delay(10000); // 10-second delay
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model,
        messages: [
          {
            role: 'system',
            content: `You are an expert research assistant specializing in ${config.title}. 
                     Provide detailed, well-structured content with appropriate citations in ${citationStyle} format. 
                     use academic language. Be verbose, Every paragraph must include at least one citation.
                     Ensure all claims are supported by references.
                     Always include a numbered REFERENCES section at the end.
                     Keep the original formatting exactly as requested.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const fullContent = response.data.choices[0].message.content;
    const [mainContent, referencesSection] = splitContentAndReferences(fullContent);
    const citations = extractCitations(referencesSection);
    
    return {
      content: mainContent.trim(),
      citations: citations
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error?.message || 'API request failed');
    }
    throw error;
  }
};

const splitContentAndReferences = (content: string): [string, string] => {
  const parts = content.split(/REFERENCES:?/i);
  if (parts.length > 1) {
    return [parts[0].trim(), parts[1].trim()];
  }
  return [content.trim(), ''];
};

const extractCitations = (referencesSection: string): string[] => {
  if (!referencesSection) return [];
  
  return referencesSection
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .filter(citation => citation.length > 0 && !citation.includes('[') && !citation.includes(']'));
};
