"use client";
import Script from "next/script";

export default function FacebookPixel() {
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'EAAQTKZChUE1sBPcafMeztMhsLEsFcGtcfBWeHBPcMOZC69zJYwTtf8LZAgEZBsQMqe6IqXEUn752BaCr7rIly7sc1wWbv5F98jj7UMRVr8wePKsZCtGihNGN9EzJb77UjLkmXM4celqvXYiOZAWsjfERvGPt7DbxmvADk4CwE6DELXdBRZAOuYkd8pZCiihYgpijygZDZD');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=EAAQTKZChUE1sBPcafMeztMhsLEsFcGtcfBWeHBPcMOZC69zJYwTtf8LZAgEZBsQMqe6IqXEUn752BaCr7rIly7sc1wWbv5F98jj7UMRVr8wePKsZCtGihNGN9EzJb77UjLkmXM4celqvXYiOZAWsjfERvGPt7DbxmvADk4CwE6DELXdBRZAOuYkd8pZCiihYgpijygZDZD&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}
