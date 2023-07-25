import './App.css'
import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `# This is a Heading
## This is a Subheading
[This is a Link You Can Click](https://www.example.com)

\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://th.bing.com/th?id=OIP.hk8jNe9eIlbwQiNmG6n8TwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2)
**A happy Dog (in bold)**`;

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
       <h1 className='Heading'>Markdown Previewer</h1>
       <h3 className='comment'>Made by Ishaan2053</h3>
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
