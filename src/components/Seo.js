import React from "react"
import { useSiteMetadata } from "../hooks/UseSiteMetadata"

export default function Seo({ title, description }) {
    const { title: defaultTitle, description: defaultDescription, author, siteUrl, keywords } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author,
        siteUrl: siteUrl,
        image: `${siteUrl}/og-image.png`,
        keywords: keywords
    }

    // console.log(seo)

    return (
        <>
            <title>{seo.title}</title>

            <meta name="description" content={seo.description}/>
            <meta name="author" content={seo.author}/>
            <meta name="keywords"
                  content={seo.keywords}/>

            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.image}/>
            <meta property="og:url" content={seo.siteUrl}/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="fr_CA"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>

            <link rel="apple-touch-icon" sizes="180x180" href={`${seo.siteUrl}/apple-touch-icon.png`}/>
            <link rel="icon" type="image/png" sizes="96x96" href={`${seo.siteUrl}/favicon-96x96.png`}/>
            <link rel="icon" type="image/png" sizes="32x32" href={`${seo.siteUrl}/favicon-32x32.png`}/>
            <link rel="icon" type="image/png" sizes="16x16" href={`${seo.siteUrl}/favicon-16x16.png`}/>
            <link rel="icon" type="image/svg+xml" href={`${seo.siteUrl}/favicon.svg`} />
            <link rel="shortcut icon" href={`${seo.siteUrl}/favicon.ico`} />
            <link rel="manifest" href={`${seo.siteUrl}/site.webmanifest`}/>
            <meta name="apple-mobile-web-app-title" content="Portfolio" />
        </>
    )
}