import type { NextPage } from "next";
import { useState } from "react";
import Metric from "../Metric";
import MetricLabel from "../MetricLabel";
import MetricValue from "../MetricValue";

import refreshbutton from './refreshbutton.module.css';

interface Props {
    responseTime?: number,
    url?: string,
    card?: boolean,
    bordered?: boolean,
}

const ServerResponseTimeMetric: NextPage<Props> = (props) => {

    const [ping, setPing] = useState(props.responseTime);

    const refreshPing = async () => {
        const response = await fetch(`/api/get-server-response-time?url=${props.url}`);
        if (response.ok) {
            const data = await response.json();
            setPing(data.responseTime);
        }
    }

    const pingValue = (ping) ? ping.toString() + 'ms' : 'N/A'

    return (
        <Metric card={props.card} bordered={props.bordered}>
            <MetricLabel>Server Response Time</MetricLabel>
            <MetricValue>{pingValue}
                { props.url &&
                    <>&nbsp;<span className={`fa fa-redo ${refreshbutton.refreshbutton}`} onClick={refreshPing}></span></>
                }
            </MetricValue>
        </Metric>
    )
}

export default ServerResponseTimeMetric