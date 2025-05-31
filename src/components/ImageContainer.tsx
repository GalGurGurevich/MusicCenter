import { useState } from 'react';

const ImageContainer = ({ track }: { track: any }) => {
  const [showEmbed, setShowEmbed] = useState<boolean>(false);

  if (!track) return <div className="image-container empty">Select a track</div>;

  const embedUrl = `https://www.mixcloud.com/widget/iframe/?feed=${track.url}&hide_cover=1&light=1`;

  return (
    <div className="image-container" onClick={() => setShowEmbed(!showEmbed)}>
      <img src={track.pictures?.extra_large} alt={track.name} className="selected-image" />
      {showEmbed && (
        <div className="player">
          <iframe
            title="player"
            width="100%"
            height="120"
            src={embedUrl}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
