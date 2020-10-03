import React from "react"
import Share from "../components/share"

export default function Home({ data }) {
  const { twitterHandle, url } = data.site.siteMetadata
  const tags = []
  console.log(data)
  return (
    <div>
      <Share
        socialConfig={{
          twitterHandle,
          config: {
            url: `${url}/gumbleeding`,
            title: "Gum Bleeding Remedy",
          },
        }}
        tags={tags}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        url
        twitterHandle
      }
    }
  }
`
