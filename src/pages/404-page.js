import * as React from "react"
import { SEO, Layout } from "components";

const NotFoundPage = () => {
  return (
      <Layout>
        <SEO title="404: Not Found" />
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
        </p>
      </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
