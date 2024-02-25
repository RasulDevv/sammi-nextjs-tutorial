import Head from "next/head"
import { SeoProps } from "./seo.props"
import { siteConfig } from "src/config/site.config"

const SEO = ({children, author=siteConfig.author, metaDescription=siteConfig.metaDescription, metaTitle=siteConfig.metaTitle, metaKeywords=siteConfig.metaKeywords}: SeoProps) => {
  return (
    <>
      <Head>
        {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <title>{metaTitle}</title>
        <meta name="keyword" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <link rel="shortcut icon" href={'/vercel.svg'} type="image/x-icon" />
      </Head>
      {children}
    </>
  )
}

export default SEO
