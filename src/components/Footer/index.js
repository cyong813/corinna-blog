import React from 'react';
import ExternalLink from '../ExternalLink';
import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">


            Built with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />


            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />


            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />

.
            <br />


            Original code is open sourced and available at&nbsp;
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="calpa/gatsby-starter-calpa-blog"
            />

.
          </p>
          <p className="copyright">


            Copyright&nbsp;
            <ExternalLink href="https://calpa.me/" title="&copy;Calpa" />


            &nbsp;
            Calpa 的技術博客 2019 Theme by Calpa Liu.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
