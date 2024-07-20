import React, { useEffect } from 'react';

import './static/css/instagramEmbed.css'

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => window.instgrm.Embeds.process();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const embedHtml = `
    <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="13" style=" background:#FFF; border:0; margin:0; padding:0; width:100%;" >
      <div style="padding:16px;">
        <a href="${url}" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">
          View Post on Instagram
        </a>
      </div>
    </blockquote>
  `;

  return (
    <div className='instagram-container' dangerouslySetInnerHTML={{ __html: embedHtml }} />
  );
};

export default InstagramEmbed;
