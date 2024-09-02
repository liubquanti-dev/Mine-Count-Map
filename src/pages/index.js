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
  <iframe src="http://89.35.49.91:25569/" style={{width: '100%', height: '100vh'}}>
  </iframe>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Сайт`}
      description="Офіційний сайт Minecraft сервера Mine Count.">
      <HomepageHeader />
    </Layout>
  );
}