import './App.css'
import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `# Heading
## Subheading
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://www.example.com/image.jpg)
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
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
