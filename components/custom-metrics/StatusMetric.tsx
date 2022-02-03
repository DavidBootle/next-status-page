import type { NextPage } from "next";
import Metric from "../Metric";
import MetricLabel from "../MetricLabel";
import MetricValue from "../MetricValue";

interface Props {
    online: boolean,
    card?: boolean,
    bordered?: boolean,
}

const StatusMetric: NextPage<Props> = (props) => {

    const onlineText = (
        <>
            <span className="fa fa-check-circle fa-sm" style={{color: 'green'}}></span> Online
        </>
    )

    const offlineText = (
        <>
            <span className="fa fa-exclamation-circle fa-sm" style={{color: 'darkred'}}></span> Offline
        </>
    )

    let selectedText = (props.online) ? onlineText : offlineText

    return (
        <Metric card={props.card} bordered={props.bordered}>
            <MetricLabel>Status</MetricLabel>
            <MetricValue>{selectedText}</MetricValue>
        </Metric>
    )
}

export default StatusMetric