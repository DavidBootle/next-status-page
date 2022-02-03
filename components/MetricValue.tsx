import type { NextPage } from "next";

const MetricValue: NextPage = (props) => {
    return (
        <p className='h3 metric-value'>
            {props.children}
        </p>
    )
}

export default MetricValue