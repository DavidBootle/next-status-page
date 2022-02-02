import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageTitleBar from '../components/PageTitleBar'

const YoutubeDownloader: NextPage = () => {
  return (
    <Layout activeMenuItem={'ytdownloader.bootletools.com'}>
      <PageTitleBar
        title="Status of Youtube Downloader"
        subtitle="ytdownloader.bootletools.com"
        websiteLink='https://ytdownloader.bootletools.com'
        subtitleIsLink={true}
      />
    </Layout>
  )
}

export default YoutubeDownloader