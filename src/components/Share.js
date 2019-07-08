import React from 'react';
import './Share.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';


const Share = ({text}) => {
  const shareUrl = "https://chingu-v9-geckos-04.netlify.com/";
  const title = text;
  const btnStyle = text ? "share-btn" : "share-btn share-hidden";

  return (
    <div className="Share">
      <div className={btnStyle}>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
        className="facebook">
          <FacebookIcon
            size={48}
          round />
        </FacebookShareButton>
      </div>

      <div className={btnStyle}>
        <TwitterShareButton
          url={shareUrl}
          title={title}
        className="twitter">
          <TwitterIcon
            size={48}
          round />
        </TwitterShareButton>
      </div>

      <div className={btnStyle}>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator="'\n'"
        className="whatsapp">
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>
      </div>

      <div className={btnStyle}>
        <EmailShareButton
          url={shareUrl}
          subject="New Voice Message transcribed using VEXT"
          body={text}
        className="email">
          <EmailIcon
            size={48}
            round />
        </EmailShareButton>
      </div>



    </div>
  );
}

export default Share;
