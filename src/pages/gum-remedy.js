import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Share from "../components/share"
import "../styles/remedy.css"

const GumRemedy = ({ data }) => {
  console.log(data)
  const twitterHandle = ""
  const tags = []

  const avatar = data?.avatar?.childImageSharp?.fluid
  const video = data?.video?.childImageSharp?.fluid
  const logo = data?.logo?.childImageSharp?.fluid
  const main = data?.main?.childImageSharp?.fluid
  return (
    <div className="wrap">
      <p style={{ textAlign: "center", margin: 0, padding: 0 }}>Advertorial</p>
      <div className="header">
        <Image fluid={avatar} alt={"scientist"} className="avatar" />
        <div className="intro">
          <p>
            <strong>Oral Hygiene Experts</strong>
          </p>
          <p>
            As long as you’re not stabbing at your gums when you brush, there
            shouldn’t be any bleeding
          </p>
        </div>
        <Image fluid={logo} alt={"logo"} className="logo" />
      </div>

      <div className="main">
        <h1 className="title">
          <a href="https://fabining-polives.icu/click" target="_blank">
            Do This 60 Seconds Dental Trick Before Going to Bed Tonight To
            Rebuild Your Teeth & Gums And Get Rid of Tooth Decay
          </a>
          <a href="https://fabining-polives.icu/click" target="_blank">
            <Image fluid={main} alt={`main`} />
          </a>
          <Share
            socialConfig={{
              twitterHandle,
              config: {
                url: `https://gum-remedy.com/gum-remedy`,
                title: "Gum Bleeding Remedy",
              },
            }}
            tags={tags}
          />
        </h1>
        <h3 className="subtitle">
          Bad Breath Means Bacteria Caused An Inflammation Of The Gums & Can Now
          Enter Your Bloodstream
        </h3>
        <p>
          <strong>
            It all starts with a dangerous bacteria lurking deep inside your
            gums…
          </strong>
        </p>
        <ul>
          <li>
            <p>
              3 out of 5 Americans suffer from Recessed gums and tooth decay
            </p>
          </li>
          <li>
            <p>
              Recent studies have shown that up to 65% of people will suffer
              through the pain, in order to avoid the costs of dental
              implants...
            </p>
          </li>
        </ul>

        <strong>
          <p>But now you can !</p>
        </strong>
        <ul>
          <li>
            <p>
              Eliminate the bacteria that continues to grow inside your mouth
            </p>
          </li>
          <li>
            <p>Stop Gum Bleeding When You Brush and At Night</p>
          </li>
          <li>
            <p>Restore, Protect Teeth And Stop Gum receding</p>
          </li>
        </ul>

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

      <a href="https://fabining-polives.icu/click" target="_blank">
        <Image fluid={video} alt={`video`} />
      </a>
      <Share
        socialConfig={{
          twitterHandle,
          config: {
            url: `https://gum-remedy.com/gum-remedy`,
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
    main: file(absolutePath: { regex: "/main.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
