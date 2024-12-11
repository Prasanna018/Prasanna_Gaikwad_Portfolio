import { motion } from 'framer-motion';
import React from 'react';
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-primary py-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        <h2 className="text-4xl font-bold text-textPrimary mb-8">Get In Touch</h2>
        <p className="text-textSecondary mb-12">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary/10"
        >
          Say Hello
        </motion.a>
        <div className="mt-16 flex justify-center space-x-8">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-textSecondary hover:text-secondary"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-textSecondary hover:text-secondary"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-textSecondary hover:text-secondary"
          >
            Twitter
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;