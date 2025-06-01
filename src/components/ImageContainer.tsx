import classNames from 'classnames';
import { useEffect, useState } from 'react';

const ImageContainer = ({ track }: { track: any }) => {
  const [showEmbed, setShowEmbed] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (!track) {
      return;
    }
    // Start fade-out
    setVisible(false);

    // Wait for fade-out, then update track and fade-in
    setTimeout(() => {
      setVisible(true);
    }, 500); 

  }, [track]);

  if (!track) return <div className="image-container empty">No Track Selected</div>;

  const embedUrl = `https://www.mixcloud.com/widget/iframe/?feed=${track.url}&hide_cover=1&light=1`;

  return (
    <div className={classNames('image-container', { 'fade-in': visible, 'fade-out': !visible })} onClick={() => setShowEmbed(!showEmbed)}>
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
