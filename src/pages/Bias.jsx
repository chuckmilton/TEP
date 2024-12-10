import { motion } from 'framer-motion';
import biasImg from '../assets/images/bias.jpeg';


const Bias = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, #FF9800, #FF5722)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Algorithmic Bias</h2>
      </motion.div>

      {/* Introduction */}
      <div style={{ textAlign: 'center', margin: '2rem auto', maxWidth: '800px' }}>
        <p style={{ lineHeight: '1.6rem', fontSize: '1.1rem' }}>
          OpenAI's language models can <b>inherit and amplify biases</b> present in their training datasets. These biases
          often reflect dominant societal viewpoints while marginalizing minority perspectives.
        </p>
      </div>

      {/* Visual Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          margin: '2rem auto',
          maxWidth: '600px',
          height: '300px',
          background: '#ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img 
        src={biasImg} 
        alt="AI Bias" 
        style={{ maxWidth: '100%', borderRadius: '10px' }} 
        />
      </motion.div>

      {/* Key Examples */}
      <div style={{ margin: '2rem auto', maxWidth: '800px', textAlign: 'left' }}>
        <h3 style={{ marginBottom: '1rem' }}>Key Examples:</h3>
        <ul style={{ lineHeight: '2rem', fontSize: '1.1rem' }}>
          <li>
            <b>Gender Bias:</b> AI models often associate professions such as <b>"nurse"</b> with women and <b>"doctor"</b>
            with men.
          </li>
          <li>
            <b>Racial Bias:</b> Models may generate content that reflects racial stereotypes embedded in online datasets.
          </li>
          <li>
            <b>Decision-Making Impact:</b> Biases in AI systems can worsen disparities in areas like <b>hiring</b> or <b>credit scoring</b>, as noted by Chin-Rothmann (2024).
          </li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: '#f7f7f7',
          padding: '1.5rem',
          borderRadius: '10px',
          textAlign: 'center',
          margin: '2rem auto',
          maxWidth: '600px',
          lineHeight: '1.6rem',
        }}
      >
        <p>
          Addressing algorithmic bias requires <b>comprehensive bias mitigation strategies</b> and careful evaluation of
          training data to ensure fairness and equity in AI systems.
        </p>
      </motion.div>
    </div>
  );
};

export default Bias;
