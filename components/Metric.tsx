import { NextPage } from "next";
import Link from "next/link";
import { Url } from "url";

interface Props {
    appendClasses?: string,
    card?: boolean,
    bordered?: boolean,
    link?: string,
    internalLink?: boolean,
}

const Metric: NextPage<Props> = (props) => {

    let metricClass = 'metric';

    if (props.bordered) { metricClass += ' metric-bordered'}
    if (props.appendClasses) { metricClass += ` ${props.appendClasses}`} // should always be done last

    const metric = (!props.link) ? (
        <div className={metricClass}>
            {props.children}
        </div>
    ) : (props.internalLink) ? (
        <Link href={props.link as string}>
            <a className={metricClass}>
                {props.children}
            </a>
        </Link>
    ): (
        <a href={props.link} className={metricClass}>
            {props.children}
        </a>
    )

    if (props.card) {
        return (
            <div className="card-metric">
                {metric}
            </div>
        )
    } else {
        return (
            metric
        )
    }
}

export default Metric