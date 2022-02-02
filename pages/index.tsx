import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const Home: NextPage = () => {

  // TODO: get site status text depending on actual site status
  let siteStatusText = "All sites are operational."

  return (
    <Layout activeMenuItem={'overview'}>
      <PageTitleBar
        title="Status Overview"
        subtitle={siteStatusText}
      />
    </Layout>
  )
}

export default Home
