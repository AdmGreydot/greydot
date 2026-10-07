import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SEOProps = {
    title: string;
    description: string;
    image?: string;
};

const SITE_NAME = 'Greydot';
const SITE_URL = 'https://greydot.dk';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
    title,
    description,
    image = DEFAULT_IMAGE,
}: SEOProps) {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const { pathname } = useLocation();

    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta
                name="description"
                content={description}
            />

            <link
                rel="canonical"
                href={`${SITE_URL}${pathname}`}
            />

            <meta
                property="og:title"
                content={fullTitle}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:url"
                content={`${SITE_URL}${pathname}`}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:site_name"
                content={SITE_NAME}
            />

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={fullTitle}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />
        </Helmet>
    );
}