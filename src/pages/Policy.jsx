import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import policyImg from '../assets/images/aipolicy.jpeg';

const Policy = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, #2196F3, #03A9F4)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ margin: 0 }}>Policy Recommendations</h2>
      </motion.div>

      {/* Intro Text */}
      <div style={{ margin: '2rem auto', maxWidth: '800px', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.6' }}>
        <p>
          Stronger regulatory frameworks are essential for addressing AI's ethical challenges, particularly in data privacy, algorithmic bias, and transparency.
          U.S. policies need to align with global standards, such as the <b>GDPR</b> and the <b>AI Act</b> in Europe, to ensure consistency and fairness.
        </p>
      </div>

      {/* Key Policy Points */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          margin: '2rem auto',
          maxWidth: '1000px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#2196F3' }}>Global Alignment</h3>
          <p>
            Align U.S. AI policies with GDPR and AI Acts in Europe to ensure <b>consistent protection of privacy</b> and fairness globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#03A9F4' }}>Stricter Regulations</h3>
          <p>
            Move beyond voluntary guidelines and enforce stricter <b>mandatory regulations</b> to hold companies accountable for ethical AI development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#2196F3' }}>Clear Documentation</h3>
          <p>
            AI companies, including OpenAI, must provide clearer <b>disclosures</b> and comprehensive documentation on data usage and model training processes.
          </p>
        </motion.div>
      </div>

      {/* Vertical Timeline */}
      <div style={{ margin: '2rem auto', maxWidth: '800px', textAlign: 'left' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2196F3' }}>Policy Development Timeline</h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="2016"
            iconStyle={{ background: '#2196F3', color: '#fff' }}
          >
            <h4>GDPR Implementation</h4>
            <p>The EU adopts GDPR to protect data privacy globally.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2022"
            iconStyle={{ background: '#FF9800', color: '#fff' }}
          >
            <h4>Blueprint for AI Bill of Rights</h4>
            <p>The U.S. drafts voluntary AI ethics guidelines.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2024"
            iconStyle={{ background: '#4CAF50', color: '#fff' }}
          >
            <h4>AI Act Enforced</h4>
            <p>The European Artificial Intelligence Act (AI Act) enters into force.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Visual Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          margin: '3rem auto 0',
          maxWidth: '600px',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <img
          src={policyImg}
          alt="AI Policy Visual"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
};

export default Policy;
