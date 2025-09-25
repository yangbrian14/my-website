import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/Projects.module.css'; // new CSS module for styling

const samples = [
  {
    title: 'Wireshark How To',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_dddb23eaf7b7474fb035d1724df45e2d.pdf',
    description:
      'This is an incomplete document showcasing my drafting skills while working with an SME. This doc is a "how to" troubleshooting user manual that shows users how to troubleshoot network-related issues within Ignition.',
  },
  {
    title: 'Helpful Troubleshooting Tools',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_0b019ba2a1d84a448b3b5830e1f67f93.pdf',
    description:
      'This page serves as a reference guide for using tools to diagnose common Ignition issues.',
  },
  {
    title: 'Understanding Thread Dumps',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_6bbadf6edada4ee49914dd49793b160c.pdf',
    description:
      'This page provides practical guidance on capturing and analyzing thread dumps in Ignition.',
  },
  {
    title: 'Basic Logs Troubleshooting',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_b41b725ba1314015b54897ed2d2c0a07.pdf',
    description:
      'This page outlines the different types of logs available in Ignition, how to access them, and how they fit into the troubleshooting process.',
  },
  {
    title: 'Creating a View Parameter in a Docked View',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_4a045b2ef1264ec3a55d3623d75dd38e.pdf',
    description:
      'Adding an example to the existing document to help better illustrate the topic. You can find the example link here.',
  },
  {
    title: 'Introducing Ignition Redundancy',
    url: 'https://33d20081-168e-49cc-8d6f-474c7db549ac.filesusr.com/ugd/7d8d96_3eae3bf32ac84fc59be16d67b1efc9c2.pdf',
    description:
      'Ignition Redundancy provides a solution for minimizing downtime and data loss by allowing a pair of Ignition Gateways to work together.',
  },
  {
    title: 'Troubleshooting the Perspective Mobile App',
    url: 'https://support.inductiveautomation.com/hc/en-us/articles/36183777105933-Troubleshooting-the-Perspective-Mobile-App',
    description:
      'This knowledge base article walks you through best practices for troubleshooting the Ignition Perspective App.',
  },
];

function Projects() {
  return (
    <Layout title="Writing Samples" description="Brian Yang's technical writing portfolio">
      <main className="container margin-vert--lg">
        <h1>Writing Samples</h1>
        <div className={styles.grid}>
          {samples.map((s, i) => (
            <div className={styles.card} key={i}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className={styles.title}>
                {s.title}
              </a>
              <p className={styles.description}>{s.description}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Projects;