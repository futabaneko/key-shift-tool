import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from 'react-bootstrap';

function App() {
  const [inputText, setInputText] = useState('');
  const [shiftAmount, setShiftAmount] = useState(0);
  const [resultText, setResultText] = useState('');

  const shiftAlphabetStrict = (str, shift) => {
    return str.split('').map(char => {
      if (char >= 'A' && char <= 'Y') {
        const code = char.charCodeAt(0);
        const shiftedCode = code + shift;
        if (shiftedCode < 'A'.charCodeAt(0) || shiftedCode > 'Y'.charCodeAt(0)) {
          return char;
        }
        return String.fromCharCode(shiftedCode);
  
      } else if (char >= 'a' && char <= 'y') {
        const code = char.charCodeAt(0);
        const shiftedCode = code + shift;
        if (shiftedCode < 'a'.charCodeAt(0) || shiftedCode > 'y'.charCodeAt(0)) {
          return char;
        }
        return String.fromCharCode(shiftedCode);
  
      } else {
        return char;
      }
    }).join('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
  }

  const handleConvert = () => {
    const converted = shiftAlphabetStrict(inputText.toUpperCase(), parseInt(shiftAmount, 10));
    setResultText(converted);
  };

  return (
    <div className="App">
      <Container className="mt-4">
        <h2 className="mb-4 text-center">Key Shift Tool</h2>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>文字列を入力してください</Form.Label>
            <Form.Control
              type="text"
              placeholder="例: HELLO WORLD"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>キーをシフトする幅を指定してください</Form.Label>
            <Form.Control
              type="number"
              placeholder="例: 2"
              value={shiftAmount}
              onChange={(e) => setShiftAmount(e.target.value)}
            />
          </Form.Group>

        <div class="py-1 mt-3">
          <div class="alert alert-danger" role="alert">
            <i class="bi bi-exclamation-circle"></i> A ~ Y の幅を超えるシフトは行えません。
          </div>
        </div>

          <Button variant="primary" onClick={handleConvert}>
            変換する
          </Button>
        </Form>

        {resultText && (
          <div className="mt-4 p-3 bg-light rounded">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>変換後の文字列</Form.Label>
              <Form.Control
                type="text"
                value={resultText}
              />
            </Form.Group>
            <Button variant="btn btn-outline-secondary" onClick={handleCopy}>
              <i class="bi bi-clipboard"></i> コピー
            </Button>
          </Form>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;