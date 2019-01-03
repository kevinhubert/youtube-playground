import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;

    return (
      <div>
        <div className="ui relaxed divided list ">
          {videos.map(video => {
            return (
              <VideoItem
                video={video}
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoList;
