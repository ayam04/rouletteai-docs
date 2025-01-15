import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ApiDocs() {
  const endpoints = [
//     {
//       id: 'authentication',
//       title: 'Add Authentication Key',
//       endpoint: '/add-auth-key',
//       method: 'POST',
//       description: 'Generate a new authentication key for accessing the API. This endpoint creates a unique key that will be used to authenticate all your subsequent requests. The key follows the format "sk-" followed by a unique identifier.',
//       details: [
//         'The key is automatically generated and returned in the response',
//         'Each key is associated with an owner and specific permissions',
//         'Keys are required for all other API endpoints',
//         'Store your key securely and never share it publicly'
//       ],
//       request: `{
//   "owner": "string",
//   "permissions": ["read", "write"]
// }`,
//       response: `{
//   "auth_key": "sk-123456789abc"
// }`
//     },
    {
      id: 'initialize',
      title: 'Initialize Agent',
      endpoint: '/init-agent',
      method: 'POST',
      description: 'Create and configure a new AI agent with specific parameters. This endpoint allows you to define the behavior and capabilities of your AI agent.',
      details: [
        'Requires a valid authentication key',
        'The agent ID is automatically generated',
        'Models can be customized based on your needs',
        'Tools array defines the capabilities of your agent (v2 parameter)'
      ],
      request: `{
  "authKey": "sk-123456789abc",
  "name": "string",
  "description": "string",
  "model": "string",
  "input": "string",
  "output": "string",
  "tools": ["string"]
}`,
      response: `{
  "agent_id": "uuid-string"
}`
    },
    {
      id: 'use',
      title: 'Use Agent',
      endpoint: '/use-agent',
      method: 'POST',
      description: 'Execute an AI agent with specific input. This endpoint runs your configured agent and returns its response based on the provided input.',
      details: [
        'Requires both authentication key and agent ID',
        'Input should match the format specified during initialization',
        'Response format matches the output format defined for the agent',
        'Execution is asynchronous and returns when complete'
      ],
      request: `{
  "authKey": "sk-123456789abc",
  "id": "agent-uuid",
  "input": "string"
}`,
      response: `{
  "agent_output": "string"
}`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-16">
        {endpoints.map((endpoint) => (
          <div 
            key={endpoint.id} 
            id={endpoint.id}
            className="scroll-mt-20"
          >
            <div className="bg-card rounded-lg shadow-lg border border-border p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-2 py-1 text-sm font-semibold bg-primary/10 text-primary rounded">
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono bg-secondary px-2 py-1 rounded">
                  {endpoint.endpoint}
                </code>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{endpoint.title}</h3>
              <p className="text-muted-foreground mb-6">{endpoint.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Key Points</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {endpoint.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Request Body</h4>
                  <SyntaxHighlighter 
                    language="json" 
                    style={tomorrow}
                    className="rounded-lg !bg-secondary"
                  >
                    {endpoint.request}
                  </SyntaxHighlighter>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Response</h4>
                  <SyntaxHighlighter 
                    language="json" 
                    style={tomorrow}
                    className="rounded-lg !bg-secondary"
                  >
                    {endpoint.response}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}