import { motion } from 'framer-motion';
import openaiLogo from '../assets/images/openai.jpg';

const Privacy = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, #FF4B2B, #FF416C)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Data Privacy Concerns</h2>
      </motion.div>

      {/* Intro Text */}
      <div style={{ textAlign: 'center', margin: '2rem auto', maxWidth: '800px' }}>
        <p style={{ lineHeight: '1.6rem', fontSize: '1.1rem' }}>
          OpenAI's language models like GPT-3 and GPT-4 are trained on massive datasets scraped from the internet, often 
          <b> without explicit user consent</b>. This raises significant concerns about data privacy and individual rights.
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
        src={openaiLogo} 
        alt="OpenAI Logo" 
        style={{ maxWidth: '100%', borderRadius: '10px' }} 
        />
      </motion.div>

      {/* Key Findings */}
      <div style={{ margin: '2rem auto', maxWidth: '800px', textAlign: 'left' }}>
        <h3 style={{ marginBottom: '1rem' }}>Key Findings:</h3>
        <ul style={{ lineHeight: '2rem', fontSize: '1.1rem' }}>
          <li>
            <b>Unauthorized Data Collection:</b> Datasets scraped from public domains may include personal or sensitive 
            user information without consent.
          </li>
          <li>
            <b>Anonymization Limitations:</b> According to Heidt (2024), anonymized data can be re-identified using 
            advanced <b>predictive algorithms</b>, posing a risk to individual privacy.
          </li>
          <li>
            <b>Lack of Transparency:</b> OpenAI's practices lack full disclosure regarding how data is collected, stored, 
            and used in training models.
          </li>
        </ul>
      </div>

      {/* CTA */}
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
          To protect individual privacy, <b>data curation</b> and <b>explicit user consent</b> are essential steps toward 
          ensuring ethical AI development. Enhanced transparency and accountability are needed to build trust in these technologies.
        </p>
      </motion.div>
    </div>
  );
};

export default Privacy;
