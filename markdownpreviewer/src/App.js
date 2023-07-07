import './App.css'
import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `# This is a Heading
## This is a Subheading
[This is a Link](https://www.example.com)

\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://th.bing.com/th?id=OIP.hk8jNe9eIlbwQiNmG6n8TwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2)
**Bolded text**`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer,
    breaks: true,
  });

  return (
    <div className="App">
        <div id="footer">
        <sub>Created by Ishaan2053. Uses marked library.</sub>
      </div>
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
