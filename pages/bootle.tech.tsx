import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const BootleTech: NextPage = () => {
  return (
    <Layout activeMenuItem={'bootle.tech'}>
      <PageTitleBar
        title="Status of Bootle Tech Website"
        subtitle="bootle.tech"
        subtitleIsLink={true}
        websiteLink='https://bootle.tech'
      />
    </Layout>
  )
}

export default BootleTech