import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share"

const Share = ({ socialConfig, tags, round }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    <FacebookShareButton url={socialConfig.config.url}>
      <FacebookIcon round={round} />
    </FacebookShareButton>
    <FacebookMessengerShareButton
      appId="641268186809160"
      url={socialConfig.config.url}
    >
      <FacebookMessengerIcon round={round} />
    </FacebookMessengerShareButton>
    <TwitterShareButton
      url={socialConfig.config.url}
      title={socialConfig.config.title}
      hashtags={tags}
    >
      <TwitterIcon round={round} />
    </TwitterShareButton>

    <RedditShareButton
      url={socialConfig.config.url}
      title={socialConfig.config.title}
    >
      <RedditIcon round={round} />
    </RedditShareButton>
    <WhatsappShareButton
      url={socialConfig.config.url}
      title={socialConfig.config.title}
    >
      <WhatsappIcon round={round} />
    </WhatsappShareButton>
  </div>
)

export default Share
