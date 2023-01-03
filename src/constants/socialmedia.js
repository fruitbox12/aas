import {
   FaDiscord,
   FaTwitter,
   FaFacebookSquare,
   FaTelegramPlane,
   FaMediumM,
   FaLinkedin,
   FaGithub
} from "react-icons/fa";
import React from "react";

export const SOCIAL = (size) => {
   return [
      {
         title: "Twitter",
         link: "https://twitter.com/ZapProtocol",
         icon: <FaTwitter size={size} />,
         external: true,
      },
      {
         title: "Facebook",
         link: "https://www.facebook.com/ZapProtocol/",
         icon: < FaFacebookSquare size={size} />,
         external: true,
      },
      {
         title: "Discord",
         link: "http://discord.gg/pvHzemX",
         icon: <FaDiscord size={size} />,
         external: true,
      },
      {
         title: "Telegram",
         link: "http://t.me/ZapOracles",
         icon: <FaTelegramPlane size={size} />,
         external: true,
      },
      {
         title: "Medium",
         link: "https://medium.com/the-zap-project",
         icon: <FaMediumM size={size} />,
         external: true,
      },
      {
         title: "LinkedIn",
         link: "https://www.linkedin.com/company/zapprotocol/",
         icon: <FaLinkedin size={size} />,
         external: true,
      },
      {
         title: "GitHub",
         link: "https://github.com/zapproject",
         icon: <FaGithub size={size} />,
         external: true,
      },
   ]
};
