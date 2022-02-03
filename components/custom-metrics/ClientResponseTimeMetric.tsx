import type { NextPage } from "next";
import { useCallback, useEffect, useReducer, useState } from "react";
import Metric from "../Metric";
import MetricLabel from "../MetricLabel";
import MetricValue from "../MetricValue";

import refreshbutton from './refreshbutton.module.css';

interface Props {
    url: string,
    card?: boolean,
    bordered?: boolean,
}

const ClientResponseTimeMetric: NextPage<Props> = (props) => {

    const [ping, setPing] = useState(null as number|null);

    const refreshPing = useCallback(async () => {
        const responseTimeStart = new Date().getTime();
        const res = await fetch(props.url);
        const responseTime = new Date().getTime() - responseTimeStart;
        setPing(responseTime);
    }, [props.url]);

    const pingValue = (ping) ? ping.toString() + 'ms' : 'N/A'

    useEffect(() => {
        refreshPing()
    }, [refreshPing])

    return (
        <Metric card={props.card} bordered={props.bordered}>
            <MetricLabel>Client Response Time</MetricLabel>
            <MetricValue>
                {pingValue}&nbsp;<span className={`fa fa-redo ${refreshbutton.refreshbutton}`} onClick={refreshPing}></span>
            </MetricValue>
        </Metric>
    )
}

export default ClientResponseTimeMetric