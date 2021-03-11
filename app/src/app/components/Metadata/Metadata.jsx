import React from 'react';
import { Helmet } from "react-helmet";

const Metadata = (props) => {
    const { title, description, image } = props.seoInfo;
    const getTitleCapitalize = () =>{
        const capitalizeTitle = title.charAt(0).toUpperCase() + title.slice(1)
        return capitalizeTitle;
    }
    return (
        <Helmet>
            <title>{`${getTitleCapitalize()} | Mercado Libre Colombia`}</title>
            <meta name="description" content={description}/>
            <meta charSet="utf-8" />
            {/* <!-- Twitter Card data --> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@publisher_handle" />
            <meta
                name="twitter:title"
                content={`${getTitleCapitalize()} | Mercado Libre Colombia`}
            />
            <meta
                name="twitter:description"
                content={description}
            />
            {/* <!-- Twitter Summary card images must be at least 200x200px --> */}
            <meta
                name="twitter:image"
                content={`${image || ""}`}
            />
            {/* <!-- Open Graph data --> */}
            <meta
                property="og:title"
                content={`${getTitleCapitalize()} | Mercado Libre Colombia`}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                itemProp="image"
                content={`${image || ""}`}
            />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
}

export default Metadata;