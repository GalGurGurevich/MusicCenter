type ResultItemProps = {
  item: any;
  onSelect: (item: any) => void;
};

const ResultItem: React.FC<ResultItemProps> = ({ item, onSelect }) => {
  return (
    <div className="result-item" onClick={() => onSelect(item)}>
      <img src={item.pictures?.thumbnail} alt={item.name} />
      <div>{item.name}</div>
    </div>
  );
};

export default ResultItem;
