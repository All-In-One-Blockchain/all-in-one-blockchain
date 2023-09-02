import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Awesome Blockchain Zh',
    Svg: require('@site/static/img/easter-island-svgrepo-com.svg').default,
    description: (
      <>
        📖关于可以使用Rust开发区块链的列表
      </>
    ),
  },
  // {
  //   title: 'Solana Co Learn',
  //   Svg: require('@site/static/img/my_logo.svg').default,
  //   description: (
  //     <>
  //       💾Solana 共学学习资料
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
