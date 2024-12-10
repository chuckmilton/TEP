import { motion } from 'framer-motion';
import principleImg from '../assets/images/principles.jpg';
import floridiImg from '../assets/images/floridi.jpeg';
import cowlsImg from '../assets/images/cowls.png';

const Framework = () => {
  const principles = [
    { title: 'Beneficence', description: 'AI should benefit society and individuals, ensuring its use contributes positively to human well-being.' },
    { title: 'Non-Maleficence', description: 'AI development should avoid harm and minimize risks to individuals and communities.' },
    { title: 'Autonomy', description: 'Users should maintain control over their data and decisions while interacting with AI systems.' },
    { title: 'Justice', description: 'AI systems must promote fairness, avoid discrimination, and ensure equity across all societal groups.' },
    { title: 'Explicability', description: 'AI processes should be transparent and explainable to users and policymakers.' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, #673AB7, #512DA8)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ margin: 0 }}>Ethical Framework</h2>
      </motion.div>

      {/* Introduction */}
      <div style={{ margin: '2rem auto', maxWidth: '800px', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.6' }}>
        <p>
          Floridi and Cowls (2019) propose a <b>five-principle framework</b> for ethical AI development. These principles—Beneficence, Non-Maleficence, Autonomy, Justice, and Explicability—provide a comprehensive foundation to guide AI technologies like OpenAI's models.
        </p>
        <p>
          Applying these principles ensures transparency, fairness, and accountability in addressing key concerns such as data privacy and algorithmic bias.
        </p>
      </div>

      {/* Dynamic Cards for Principles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          margin: '2rem auto',
          maxWidth: '1000px',
        }}
      >
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            style={{
              backgroundColor: '#f7f7f7',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: '#512DA8' }}>{principle.title}</h3>
            <p style={{ lineHeight: '1.5', color: '#333' }}>{principle.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Visual Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          margin: '2rem auto',
          maxWidth: '600px',
          height: '300px',
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img 
        src={principleImg} 
        alt="Principles Map" 
        style={{ maxWidth: '100%', borderRadius: '10px' }} 
        />
      </motion.div>

        {/* About Floridi and Cowls */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
            margin: '2rem auto',
            padding: '1.5rem',
            background: '#fafafa',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
            maxWidth: '800px',
            lineHeight: '1.6',
        }}
        >
        <h3 style={{ color: '#673AB7', textAlign: 'center', marginBottom: '1rem' }}>About the Authors</h3>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <img
            src={floridiImg}
            alt="Luciano Floridi"
            style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginRight: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            />
            <p>
            <b>Luciano Floridi</b> is a well-known philosopher specializing in the ethics of information
            and digital technologies. As a professor at the University of Oxford, his work has shaped
            modern discussions on responsible AI and digital ethics.
            </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
            src={cowlsImg}
            alt="Josh Cowls"
            style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginRight: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            />
            <p>
            <b>Josh Cowls</b>, a doctoral researcher based at the Alan Turing Institute and the Oxford
            Internet Institute, collaborates with Floridi to explore the ethical, political, and societal
            impacts of AI technologies. They co-authored foundational research addressing the principles
            necessary for ethical AI development.
            </p>
        </div>
        </motion.div>
    </div>
  );
};

export default Framework;
