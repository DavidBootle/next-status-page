import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const TimeCalculator: NextPage = () => {
  return (
    <Layout activeMenuItem={'timecalc.bootletools.com'}>
      <PageTitleBar
        title="Status of Time Calculator"
        subtitle="timecalc.bootletools.com"
        websiteLink='https://timecalc.bootletools.com'
        subtitleIsLink={true}
      />
    </Layout>
  )
}

export default TimeCalculator