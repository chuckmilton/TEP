import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, #6A82FB, #FC5C7D)',
          padding: '2rem',
          borderRadius: '10px',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Ethical Development and Deployment of AI</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Exploring critical ethical issues: <b>Data Privacy</b>, <b>Algorithmic Bias</b>, and <b>Policy Recommendations</b>.
        </p>
      </motion.div>

      {/* Introduction Section */}
      <div style={{ marginTop: '3rem', maxWidth: '800px', marginInline: 'auto', textAlign: 'left' }}>
        <h2>Introduction</h2>
        <p style={{ lineHeight: '1.6rem' }}>
          As artificial intelligence continues to advance, ethical concerns surrounding its development and deployment have
          become increasingly significant. This site focuses on three key issues:
        </p>
        <ul style={{ lineHeight: '2rem' }}>
          <li>
            <b>Data Privacy:</b> AI systems, like OpenAI’s GPT models, scrape massive datasets from the internet, raising
            privacy concerns about user consent and re-identification of anonymized data.
          </li>
          <li>
            <b>Algorithmic Bias:</b> AI models often amplify harmful stereotypes embedded in training data, disproportionately
            impacting marginalized communities in areas like hiring and credit scoring.
          </li>
          <li>
            <b>Policy Gaps:</b> While frameworks like GDPR exist in Europe, the U.S. lacks comprehensive legislation to
            regulate ethical AI development.
          </li>
        </ul>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: '#f7f7f7',
          borderRadius: '10px',
          maxWidth: '600px',
          marginInline: 'auto',
        }}
      >
        <h3>Why Should You Care?</h3>
        <p style={{ lineHeight: '1.6rem', fontSize: '1.1rem' }}>
          Ethical AI development ensures that these technologies benefit society as a whole while minimizing unintended
          harm. By addressing data privacy, reducing bias, and advocating for strong policy frameworks, we can foster trust
          in AI systems and ensure they align with human values.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
