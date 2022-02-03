import type { NextPage } from "next"

const MetricLabel: NextPage = (props) => {
    return (
        <h2 className='metric-label'>{props.children}</h2>
    )
}

export default MetricLabel