import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/Projects.module.css'; // new CSS module for styling

const samples = [
  {
    title: 'Wireshark How To',
    url: '/samples/wireshark-how-to.pdf',
    description:
      'This is an incomplete document showcasing my drafting skills while working with an SME. This doc is a "how to" troubleshooting user manual that shows users how to troubleshoot network-related issues within Ignition.',
  },
  {
    title: 'Helpful Troubleshooting Tools',
    url: '/samples/tools-guide.pdf',
    description:
      'This page serves as a reference guide for using tools to diagnose common Ignition issues.',
  },
  {
    title: 'Understanding Thread Dumps',
    url: '/samples/thread-dumps.pdf',
    description:
      'This page provides practical guidance on capturing and analyzing thread dumps in Ignition.',
  },
  {
    title: 'Basic Logs Troubleshooting',
    url: '/samples/basic-logs.pdf',
    description:
      'This page outlines the different types of logs available in Ignition, how to access them, and how they fit into the troubleshooting process.',
  },
  {
    title: 'Creating a View Parameter in a Docked View',
    url: '/samples/view-parameter.pdf',
    description:
      'Adding an example to the existing document to help better illustrate the topic. You can find the example link here.',
  },
  {
    title: 'Introducing Ignition Redundancy',
    url: '/samples/ignition-redundancy.pdf',
    description:
      'Ignition Redundancy provides a solution for minimizing downtime and data loss by allowing a pair of Ignition Gateways to work together.',
  },
  {
    title: 'Troubleshooting the Perspective Mobile App',
    url: '/samples/mobile-troubleshooting.pdf',
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