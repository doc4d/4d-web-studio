import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import useThemeContext from '@theme/hooks/useThemeContext';

const features = [
  {
    title: "Build from your browser",
    imageUrl: "img/webapp.png",
    description: (
      <>
        <Translate>
          Build web applications directly in your browser.
        </Translate>
      </>
    ),
  },
  {
    title: "WYSIWIG environment",
    imageUrl: "img/wysiwig.png",
    description: (
      <>
        Design professional and custom web applications using a visual canvas.

      </>
    ),
  },
  {
    title: "Powered by 4D and ORDA",
    imageUrl: "img/orda.png",
    description: (
      <>
        Tap into datasources and simplify the flow of data in your web applications.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link to={useBaseUrl(
        "docs/overview"
      )} style={{ textDecoration: 'none', color: isDarkTheme ? "#fff" : "#000" }}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="preview">
        <div className="text--center">
          4D Web Studio is still in development. This is unreleased documentation for the preview version.
        </div>
      </div>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg get-started",
                styles.getStarted
              )}
              to={useBaseUrl(
                "docs/overview"
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>


      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}
