import React from "react"
import { useSiteMetadata } from "../hooks/UseSiteMetadata"

export default function Seo({ title, description }) {
    const { title: defaultTitle, description: defaultDescription, author, siteUrl } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author,
        siteUrl: siteUrl,
        image: `${siteUrl}/og-image.png`
    }

    // console.log(seo)

    return (
        <>
            <title>{seo.title}</title>

            <meta name="description" content={seo.description} />
            <meta name="author" content={seo.author} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr_CA" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </>
    )
}