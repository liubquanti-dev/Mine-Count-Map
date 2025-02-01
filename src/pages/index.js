import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <iframe src="https://mine-count-map.doroleijn.workers.dev/" style={{width: '100%', height: 'calc(100vh - 60px)'}}>
  </iframe>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Мапа`}
      description="Динамічна мапа Minecraft сервера Mine Count.">
      <HomepageHeader />
    </Layout>
  );
}