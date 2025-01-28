import React, { useState , useEffect, useRef} from 'react';
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import './MessageComponent.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Similar to VS Code's dark theme
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup'; // For HTML, XML
import 'prismjs/themes/prism-tomorrow.css';

const LoadingDots = () => (
  <div className="loading-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const CodeBlock = ({ language, code, onCopy }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    // Highlight the code when the component mounts or updates
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code); // Copy code to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-language">{language}</span>
        <button className="copy-button" onClick={handleCopy}>
          {copied ? <FaCheck className="copy-icon" /> : <BiCopy className="copy-icon" />}
        </button>
      </div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};


const MessageComponent = ({ message, isBot, onCopy }) => {
  const detectLanguage = (code) => {
    if (code.includes('function') || code.includes('const') ) return 'javascript';
    if (code.includes('def ')) return 'python';
       if (code.includes('<?')) return 'php';
    if (code.includes('<')) return 'html';
 
    if (code.includes('public static void main')) return 'java';
    
    return 'plaintext';
  };

  const processText = (text) => {
    // Process code blocks first
    text = text.replace(/```([\s\S]*?)```/g, (match, code) => {
      return `<div class="inline-code-block">${code}</div>`;
    });
    
    // Process inline code
    text = text.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    
    // Process bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Process bullet points
    text = text.replace(/^\* (.+)$/gm, '<div class="bullet-point">$1</div>');
    
    return text;
  };

  const renderContent = () => {
    if (message.text.includes('```')) {
      const parts = message.text.split('```');
      const description = processText(parts[0].trim());
      const code = parts[1]?.trim();
      const language = detectLanguage(code || '');

      return (
        <div className="message-content">
          {description && <p className="message-description" dangerouslySetInnerHTML={{ __html: description }} />}
          {code && <CodeBlock language={language} code={code} onCopy={onCopy} />}
        </div>
      );
    }
    return <p className="message-text" dangerouslySetInnerHTML={{ __html: processText(message.text) }} />;
  };

  return (
    <div className={`message-container ${isBot ? 'bot' : 'user'}`}>
      <div className="message-wrapper">
        <div className="avatar">
          {isBot ? '🤖' : '👤'}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export { LoadingDots };
export default MessageComponent;
