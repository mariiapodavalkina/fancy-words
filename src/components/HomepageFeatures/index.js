import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A sneak peek at my writing style',
    Svg: require('@site/static/img/writing-style.svg').default,
    description: (
      <>
        Take a look at how and what I write. Treat this section as showcasing the style I write in.
        Thought most of what I actually write write is under NDA, so not much to show.
      </>
    ),
  },
  {
    title: 'Check out my blog',
    Svg: require('@site/static/img/blog-writing.svg').default,
    description: (
      <>
        Explore my blog, where I share insights on Technical Writing and other topics that catch my interest. 
        You'll also find occasional collaborative posts with fellow tech writers.
      </>
    ),
  },
 /* {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }, */
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
