import { useState } from 'react';

const BiasDemo = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const checkBias = () => {
    if (input.toLowerCase().includes('doctor')) {
      setResult('Bias Detected: "Doctor" associated with male');
    } else if (input.toLowerCase().includes('nurse')) {
      setResult('Bias Detected: "Nurse" associated with female');
    } else {
      setResult('No bias detected.');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h3>Interactive Algorithmic Bias Demo</h3>
      <input
        type="text"
        placeholder="Type a sentence (e.g., 'She is a doctor')"
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <button onClick={checkBias} style={{ padding: '0.5rem' }}>Check Bias</button>
      <p>{result}</p>
    </div>
  );
};

export default BiasDemo;
