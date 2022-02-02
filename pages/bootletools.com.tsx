import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const BootleTools: NextPage = () => {
  return (
    <Layout activeMenuItem={'bootletools.com'}>
      <PageTitleBar
        title="Status of Bootle Tools Homepage"
        subtitle="bootletools.com"
        subtitleIsLink={true}
        websiteLink='https://bootletools.com'
      />
    </Layout>
  )
}

export default BootleTools