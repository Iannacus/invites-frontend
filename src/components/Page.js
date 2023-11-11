import React, { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, description, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} - Wenvel`}</title>
        <meta name="description" content={description} />
        {meta}
      </Helmet>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

export default Page;
