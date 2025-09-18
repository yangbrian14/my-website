import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'; // or use custom.css

function Home() {
  return (
    <Layout title="Brian Yang | Technical Writer" description="Clear, impactful documentation that delivers.">
      <main className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.contentWrapper}>
          <div className={styles.avatarContainer}>
            <img src="/img/profile.jpg" alt="Brian Yang" className={styles.avatar} />
          </div>

          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Hi, I’m Brian 👋</h1>
            <p className={styles.subheading}>
              Technical Writer with 5+ years of experience creating <span className={styles.highlight}>User Manuals</span>,
              <span className={styles.highlight}> Knowledge Base Articles</span>, and <span className={styles.highlight}>clear developer documentation</span>.
            </p>

            <div className={styles.actions}>
              <a href="/projects" className={styles.buttonPrimary}>📂 View Projects</a>
              <a href="/contact" className={styles.buttonSecondary}>✉️ Contact Me</a>
              <a
                href="https://www.linkedin.com/in/yangbrian14"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label="LinkedIn"
              >
                <img src="/img/linkedin-icon.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;