export const Welcome: React.FC = () => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <div className="flex items-center mb-4">
      <div className="text-4xl font-bold text-blue-600 mr-3">
        Open<span className="font-serif italic text-blue-800">physio</span>
      </div>
    </div>
    <h2 className="text-xl font-semibold mb-3 text-gray-700">🩺 AI-Powered Physiotherapy Research Assistant</h2>
    <p className="mb-3">
      Get evidence-based answers to your physiotherapy questions, backed by the latest research 
      from the Journal of Orthopaedic & Sports Physical Therapy (JOSPT). Ask about treatment 
      protocols, exercise prescriptions, clinical outcomes, or specific conditions.
    </p>
    <p className="text-sm text-gray-600">
      💡 All responses include direct citations from peer-reviewed research papers
    </p>
  </div>
);
