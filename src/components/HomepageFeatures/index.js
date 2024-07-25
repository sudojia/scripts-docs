import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '简单易用',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                即使是没有编程经验的用户也能轻松上手。所有的操作都配有清晰的指示和帮助文档，确保用户能够无障碍地签到。
            </>
        ),
    },
    {
        title: '多通知✍️',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                脚本具备强大的多通知系统，能够在用户完成每日签到后，通过多种渠道发送通知，确保用户及时获得反馈。
            </>
        ),
    },
    {
        title: '多账号🔑',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                脚本允许用户通过使用特定的分隔符（<code>&</code> 或换行）来区分不同账号的信息。
                每个账号之间用 <code>&</code> 符号或换行符分隔。脚本会自动解析这些账号，并为每个账号执行签到操作。
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
