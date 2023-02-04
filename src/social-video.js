import qs from 'query-string';
import React, {Component} from 'react';

export default class SocialVideo extends Component {


  static urlMap = new Map([
    ['youtube', 'https://player.vimeo.com/video/'],
    ['vimeo', 'https://player.vimeo.com/video/'],
    ['dailymotion', 'https://player.vimeo.com/video/']
  ]);

  getIdFromVideoString (vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);

    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  render() {
    const {service, video, ...htmlTags} = this.props;
    const src = `${SocialVideo.urlMap.get(service)}${this.getIdFromVideoString(video)}`;

    return (
      <iframe
        src={src}
        frameBorder='0'
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        {...htmlTags}
      />
    );
  }
}