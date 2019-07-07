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
  const shareUrl = "https://vext.netlify.com";
  const title = text;

  return (
    <div className="Share">
      <div className="share-btn">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="facebook">
          <FacebookIcon
            size={32}
            round />
        </FacebookShareButton>
      </div>

      <div className="share-btn">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="twitter">
          <TwitterIcon
            size={32}
            round />
        </TwitterShareButton>
      </div>

      <div className="share-btn">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator="\n "
          className="whatsapp">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="share-btn">
         <EmailShareButton
          url={shareUrl}
          subject="Speech to text by VEXT"
          body={text}
          className="email">
          <EmailIcon
            size={32}
            round />
        </EmailShareButton>
      </div>

      

    </div> 
  );
}

export default Share;