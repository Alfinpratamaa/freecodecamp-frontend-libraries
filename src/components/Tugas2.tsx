import { useState } from 'react';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline Code\`
\`\`\`
// Code Block
function greet() {
  console.log("Hello, world!");
}
\`\`\`
- List Item 1
- List Item 2

> Blockquote

![Image](https://via.placeholder.com/150)
**Bold Text**`);

    const markdownToHtml = (markdownText: any) => {
        // Function to convert Markdown to HTML
        return markdownText
            .split('\n')
            .map((line: any, index: number) => {
                // Handling different markdown elements
                if (line.startsWith('# ')) {
                    return <h1 key={index}>{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                    return <h2 key={index}>{line.substring(3)}</h2>;
                } else if (line.startsWith('[')) {
                    const linkText = line.substring(line.indexOf('[') + 1, line.indexOf(']'));
                    const linkUrl = line.substring(line.indexOf('(') + 1, line.indexOf(')'));
                    return <a key={index} href={linkUrl}>{linkText}</a>;
                } else if (line.startsWith('`')) {
                    return <code key={index}>{line.substring(1, line.length - 1)}</code>;
                } else if (line.startsWith('```')) {
                    return <pre key={index}>{line.substring(3)}</pre>;
                } else if (line.startsWith('- ')) {
                    return <li key={index}>{line.substring(2)}</li>;
                } else if (line.startsWith('> ')) {
                    return <blockquote key={index}>{line.substring(2)}</blockquote>;
                } else if (line.startsWith('![Image]')) {
                    const imageUrl = line.substring(line.indexOf('(') + 1, line.indexOf(')'));
                    return <img key={index} src={imageUrl} alt="Markdown Preview" />;
                } else if (line.startsWith('**')) {
                    return <strong key={index}>{line.substring(2, line.length - 2)}</strong>;
                } else {
                    return <p key={index}>{line}</p>;
                }
            });
    };

    const handleMarkdownChange = (event: any) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <textarea id="editor" className="form-control" value={markdown} onChange={handleMarkdownChange}></textarea>
                </div>
                <div className="col">
                    <div id="preview">{markdownToHtml(markdown)}</div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreviewer;
