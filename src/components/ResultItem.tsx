import { useRef } from "react";

type ResultItemProps = {
  item: any;
  onSelect: (item: any) => void;
};

const ResultItem: React.FC<ResultItemProps> = ({ item, onSelect }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // Get the position of the clicked item
    const itemRect = itemRef.current?.getBoundingClientRect();
    const musicCenter = document.querySelector('.music_center');
    const centerRect = musicCenter?.getBoundingClientRect();
    if (!centerRect || !itemRect) return;
    
    // Calculate the movement distance
    const deltaX = centerRect?.left + centerRect?.width / 2 - (itemRect.left + itemRect.width / 2);
    const deltaY = centerRect?.top + centerRect.height / 2 - (itemRect.top + itemRect.height / 2);
    
    // Create a clone for animation
    const clone = itemRef?.current?.cloneNode(true) as HTMLDivElement;
    clone.style.position = 'fixed';
    clone.style.top = itemRect.top + 'px';
    clone.style.left = itemRect.left + 'px';
    clone.style.width = itemRect.width + 'px';
    clone.style.height = itemRect.height + 'px';
    clone.style.zIndex = '1000';
    clone.style.pointerEvents = 'none';
    clone.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    document.body.appendChild(clone);
    
    // Trigger animation
    setTimeout(() => {
      clone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.2)`;
      clone.style.opacity = '0.8';
    }, 10);
    
    // Fade out and remove
    setTimeout(() => {
      clone.style.opacity = '0';
      clone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.8)`;
    }, 600);
    
    setTimeout(() => {
      document.body.removeChild(clone);
      onSelect(item);
    }, 1000);
  };

  return (
    <div className="result-item" onClick={handleClick} ref={itemRef}>
      <img className="result-item-icon" src={item.pictures?.thumbnail} alt={item.name} />
      <div className="result-item-name">{item.name}</div>
    </div>
  );
};

export default ResultItem;
