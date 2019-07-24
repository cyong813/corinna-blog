import React from 'react';
import PropTypes from 'prop-types';

const SHORTNAME = 'corninna';
const WEBSITE_URL = 'sad-elion-202e0c.netlify.com';

function renderDisqus() {
  if (window.DISQUS === undefined) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://${SHORTNAME}.disqus.com/embed.js`;
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    window.DISQUS.reset({ reload: true });
  }
}

class DisqusThread extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  componentDidMount() {
    renderDisqus();
  }

  shouldComponentUpdate(nextProps) {
    const { id, title, path } = this.props;
    return id !== nextProps.id
      || title !== nextProps.title
      || path !== nextProps.path;
  }

  componentDidUpdate() {
    renderDisqus();
  }

  render() {
    const {
      id, title, path, ...other
    } = this.props;

    if (process.env.BROWSER) {
      window.disqus_shortname = SHORTNAME;
      window.disqus_identifier = id;
      window.disqus_title = title;
      window.disqus_url = WEBSITE_URL + path;
    }

    return <div {...other} id="disqus_thread" />;
  }
}

export default DisqusThread;
