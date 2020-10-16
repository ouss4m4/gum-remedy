import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Share from "../components/share"
import "../styles/remedy.css"

const GumRemedy = ({ data, location }) => {
  const twitterHandle = ""
  const tags = []

  const avatar = data?.avatar?.childImageSharp?.fluid
  const video = data?.video?.childImageSharp?.fluid
  const logo = data?.logo?.childImageSharp?.fluid
  const main = data?.main?.childImageSharp?.fluid
  console.log("location?", location)

  return (
    <div className="wrap">
      <p style={{ textAlign: "center", margin: 0, padding: 0 }}>Advertorial</p>
      <div className="header">
        <Image fluid={avatar} alt={"scientist"} className="avatar" />
        <div className="intro">
          <p className="category">
            <strong>Dental Research Group - Health News Live​</strong>
          </p>
          <p className="bread-crumb">Trending &gt; Health &gt; Oral Hygiene</p>
        </div>
        <Image fluid={logo} alt={"logo"} className="logo" />
      </div>

      <div className="main">
        <h1 className="title">
          <a href="https://fabining-polives.icu/click" target="_blank">
            This Banned Fruit May Improve Your Gums By 90% (Latest Research)
          </a>
        </h1>
        <div id="fruit">
          <a href="https://fabining-polives.icu/click" target="_blank">
            <Image fluid={main} alt={`main`} />
          </a>
        </div>
        <div id="share">
          <Share
            socialConfig={{
              twitterHandle,
              config: {
                url: location.href,
                title: "Gum Bleeding Remedy",
              },
            }}
            tags={tags}
          />
        </div>
        {/* <h3 className="subtitle">
          Bad Breath Means Bacteria Caused An Inflammation Of The Gums & Can Now
          Enter Your Bloodstream
        </h3> */}
        <div className="present">
          <p style={{ marginTop: "1em" }}>
            Dentists can scream this is “<b>medically impossible</b>” all they
            want…
          </p>
          <p>But they can’t deny the lab test results…</p>
          <p>
            Every single patient who ate this fruit experienced a dramatic
            improvement in their teeth and gums health within days…
          </p>
          <p>They’ve rejuvenated their gums by 90%…</p>
          <p>And relieved pesky bad breath and toothaches…</p>
          <p>While some of them even reported having stronger teeth!</p>
          <p>
            The <b>Cheap Fruit</b> That May Soon Make Dentists Almost Useless
            (They Tried to Ban It)
          </p>

          <div className="btn-wrap">
            <a
              className="myButton"
              href="https://fabining-polives.icu/click"
              target="_blank"
              rel="noreferrer"
            >
              CLICK TO WATCH
            </a>
          </div>
        </div>
      </div>

      <a href="https://fabining-polives.icu/click" target="_blank">
        <Image fluid={video} alt={`video`} />
      </a>
      <Share
        socialConfig={{
          twitterHandle,
          config: {
            url: location.href,
            title: "Gum Bleeding Remedy",
          },
        }}
        tags={tags}
      />

      <blockquote className="quote">
        <p>
          <strong>DISCLOSURE</strong>: The statements made within this website
          have not been evaluated by the U.S. Food and Drug Administration.
          These statements and the products of this company are not intended to
          diagnose, treat, cure or prevent any disease.
        </p>
      </blockquote>
    </div>
  )
}

export default GumRemedy

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fluid(maxWidth: 180) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    logo: file(absolutePath: { regex: "/sbplogo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    video: file(absolutePath: { regex: "/sbp-video.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    main: file(absolutePath: { regex: "/main2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
