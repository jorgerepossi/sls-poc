import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  metaDescription?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  metaDescription,
}): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`${title}`} | {`${process.env.REACT_APP_BASE_NAME}`}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content={metaDescription} />
      </Helmet>
    </>
  );
};
