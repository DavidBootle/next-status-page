import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const BootleTechAPI: NextPage = () => {
  return (
    <Layout activeMenuItem={'api.bootle.tech'}>
      <PageTitleBar
        title={'Status of Bootle Tech API'}
        subtitle={'api.bootle.tech'}
      />
    </Layout>
  )
}

export default BootleTechAPI