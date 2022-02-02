import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const VisualSchedulePlanner: NextPage = () => {
  return (
    <Layout activeMenuItem={'planner.bootletools.com'}>
      <PageTitleBar
        title="Status of Visual Schedule Planner"
        subtitle="planner.bootletools.com"
        websiteLink='https://planner.bootletools.com'
        subtitleIsLink={true}
      />
    </Layout>
  )
}

export default VisualSchedulePlanner