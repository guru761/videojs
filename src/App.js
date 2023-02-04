import React, { Component } from "react";
import SocialVideo from "./social-video";

var videos = [
  {
    service: "youtube",
    video: "https://vimeo.com/50016568"
  },
  {
    service: "vimeo",
    video: "https://vimeo.com/151715092"
  },
  {
    service: "dailymotion",
    video: "https://vimeo.com/152600166"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0
    };
  }

  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }
  render() {
    const { service, video } = videos[this.state.videoIndex];
    return (
      <div class="row" >
  <div class="column">hello</div>
  <div class="column"><SocialVideo service={service} video={video} width={500} height={270} />
        <p>
          <span>{service}: </span>
          <span>{video}</span>
        </p>
        <button onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}>
          Previous
        </button>
        <button onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}>
          Next
        </button></div>

</div>
      
    );
  }
}