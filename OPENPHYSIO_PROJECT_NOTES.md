# OpenPhysio Project Notes

## Project Vision
AI-powered physiotherapy research assistant that provides evidence-based answers from JOSPT papers with proper citations.

## Current Architecture (Netlify Template Base)
- **Frontend**: React + Impala framework with Tailwind CSS
- **Backend**: Netlify Edge Functions (serverless)
- **Base**: Daneel chat bot template (movie critic → physio assistant)
- **APIs**: OpenAI integration already set up
- **Deployment**: Netlify (all-in-one)

## Updated Todo List
1. ✅ Set up project structure using Netlify template
2. 🔄 Customize template for OpenPhysio (branding, prompt)
3. 🔄 Create paper scraping edge function using Firecrawl API
4. 🔄 Build PDF download system using cookies and GET requests
5. 🔄 Set up vector database for document storage (Weaviate/Pinecone)
6. 🔄 Create PDF processing pipeline (extract text, chunk, embed)
7. 🔄 Build RAG system with citation tracking in edge functions
8. ✅ Chat interface ready (needs customization)
9. 🔄 Deploy and test on Netlify

## Key Components to Modify
- **Prompt**: `prompts/` - Replace movie critic with physio assistant
- **Chat Logic**: `netlify/edge-functions/chat.ts` - Add RAG system
- **UI**: `src/components/` - Add citation display
- **Config**: `config.edge.ts` - Update system prompt

## Environment Variables for Netlify
- `OPENAI_API_KEY`: OpenAI API key
- `FIRECRAWL_API_KEY`: Firecrawl API key  
- `JOSPT_COOKIES`: Browser cookies for JOSPT access
- `WEAVIATE_URL`: Vector database URL
- `WEAVIATE_API_KEY`: Vector database key

## Next Immediate Steps
1. Update branding and prompt for physiotherapy
2. Test current chat functionality
3. Create new edge functions for paper scraping
4. Integrate vector database for RAG system

## Template Structure
- Uses Impala (React framework) 
- Netlify edge functions handle OpenAI API calls
- Streaming chat interface ready
- Tailwind styling system
- TypeScript throughout