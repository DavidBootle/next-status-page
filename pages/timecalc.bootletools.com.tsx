import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Column from '../components/Column'
import ClientResponseTimeMetric from '../components/custom-metrics/ClientResponseTimeMetric'
import ServerResponseTimeMetric from '../components/custom-metrics/ServerResponseTimeMetric'
import StatusMetric from '../components/custom-metrics/StatusMetric'
import Layout from '../components/Layout'
import MetricRow from '../components/MetricRow'
import PageSection from '../components/PageSection'
import PageTitleBar from '../components/PageTitleBar'
import SectionBlock from '../components/SectionBlock'

type Data = {
  online: boolean,
  ping?: number,
}

const pingURL = 'https://timecalc.bootletools.com'

const TimeCalculator: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout activeMenuItem={'timecalc.bootletools.com'}>
      <PageTitleBar
        title="Status of Time Calculator"
        subtitle="timecalc.bootletools.com"
        websiteLink='https://timecalc.bootletools.com'
        subtitleIsLink={true}
      />
      <PageSection>
        <SectionBlock>
          <MetricRow flush={true}>
            <Column>
              <StatusMetric online={props.data.online} bordered={true}/>
            </Column>
            <Column>
              <ServerResponseTimeMetric responseTime={props.data.ping} url={pingURL} bordered={true}/>
            </Column>
            <Column>
              <ClientResponseTimeMetric url={pingURL} bordered={true}/>
            </Column>
          </MetricRow>
        </SectionBlock>
      </PageSection>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  let data: Data = {
    online: false
  }

  // fetch server status by using /ping path
  try {
    const responseTimeStart = new Date().getTime();
    const res = await fetch(pingURL);
    const responseTime = new Date().getTime() - responseTimeStart;
    if (res.ok) {
      data.online = true;
      data.ping = responseTime;
    }
  } catch (e) {

  }

  return {
    props: {
      data
    }
  }
}

export default TimeCalculator