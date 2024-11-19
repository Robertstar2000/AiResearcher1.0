import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-[30%] overflow-y-auto bg-gray-50 p-6 shadow-lg">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">esearcher</h2>
          <p className="mt-2 text-sm text-gray-600">
            An advanced research assistant that helps generate comprehensive research papers literature reviews and helps design experiments using advanced AI.
          </p>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Research Types</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>General Research:</strong> Comprehensive research paper with introduction, literature review, methodology, results, and conclusion.</li>
            <li><strong>Literature Search:</strong> In-depth review and analysis of existing literature and research papers.</li>
            <li><strong>Experimental Design:</strong> Detailed experimental protocol including methodology, variables, and analysis plan.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Research Modes</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>Basic:</strong> Clear, concise explanations suitable for post-graduate level understanding. Basic costs 1 credit per report</li>
            <li><strong>Advanced:</strong> In depth analysis with technical terminology and theoretical frameworks. Advanced costs 2 credits per report</li>
            <li><strong>Free tier:</strong> 10 free credits are provided, enough for most projects</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Citation Styles</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><strong>Academic:</strong> Formal APA format citations with author, year, title, and publication details.</li>
            <li><strong>Web:</strong> Web-based citations including URLs and website information.</li>
            <li><strong>Informal:</strong> Conversational in-text citations with basic source information.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-medium text-gray-900">Features</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>Automatic content generation using chain of thought (CoT) Tree of thought (ToT) and agentic workflow</li>
            <li>Citation management and formatting</li>
            <li>Research history tracking</li>
            <li>Download results as .docx or markdown</li>
            <li>No API key or other accounts requred</li>
          </ul>
        </section>

        <section>          
            <ol className="mt-2 space-y-2 text-sm text-gray-600">
            <li>2. Select your research mode (Basic/Advanced)</li>
            <li>3. Choose a research type</li>
            <li>4. Select your preferred citation style</li>
            <li>5. Enter your research query</li>
            <li>6. Wait for the AI to generate all sections</li>
            <li>7. Download or review your research</li>
          </ol>
        </section>
      </div>
    </aside>
  );
};