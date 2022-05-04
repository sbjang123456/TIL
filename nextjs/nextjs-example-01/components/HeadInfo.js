import Head from 'next/head';

const HeadInfo = ({ title, keyword, contents }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contents={contents} />
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog Powered By Nextjs',
    contents: 'practice Nextjs'
}

export default HeadInfo;