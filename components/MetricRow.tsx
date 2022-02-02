import type { NextPage } from "next";

interface Props {
    flush?: boolean
}

const MetricRow: NextPage<Props> = (props) => {

    let classString = 'metric-row';
    if (props.flush) { classString += ' metric-flush' }

    return (
        <div className={classString}>
            {props.children}
        </div>
    )
}

export default MetricRow