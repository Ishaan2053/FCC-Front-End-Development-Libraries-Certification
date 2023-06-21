import './App.css';
import React, { useState, useEffect } from "react";
import marked from "marked";

const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://example.com)
\`inline code\`

\`\`\`
// Code block
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://example.com/image.jpg)

**Bolded Text**`;

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(markdown);
  }, [markdown]);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        rows={10}
      ></textarea>
      <div id="preview"></div>
    </div>
  );
};

export default App;
