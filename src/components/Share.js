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
  const shareUrl = "https://chingu-v9-geckos-04.netlify.com";
  const title = text + "\n";

  return (
    <div className="Share" name="share">
      <label htmlFor="share">Share it!</label>
      <div className="share-btns-cont">
        <div className="share-btn">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            hashtag="voicerecognition"
          className="facebook">
            <FacebookIcon
              size={48}
            round />
          </FacebookShareButton>
        </div>

        <div className="share-btn">
          <TwitterShareButton
            url={shareUrl}
            title={title + "\n"}
            hashtags={["vext", "chingucollabs", "SpeechToText", "VoiceRecognition"]}
          className="twitter">
            <TwitterIcon
              size={48}
            round />
          </TwitterShareButton>
        </div>

        <div className="share-btn">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=""
          className="whatsapp">
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
        </div>

        <div className="share-btn">
          <EmailShareButton
            // url={"\n" + "Vext - Speak your mind" + "\n" + shareUrl + "\n"}
            url={`\nVext - Speak your mind \n${shareUrl} \n`}
            subject="New Voice Message transcribed using VEXT"
            body={text + "\n"}
          className="email">
            <EmailIcon
              size={48}
            round />
          </EmailShareButton>
        </div>
        </div>



    </div>
  );
}

export default Share;
