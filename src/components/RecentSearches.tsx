
const RecentSearches = ({ items, onClick }: { items: string[], onClick: (term: string) => void }) => (
  <div className="recent-searches">
    <h3 className="title">Recent Searches</h3>
    <ul className="recent-searches-list">
      {items.map((item, i) => (
        <li className="recent-searches-item" key={i} onClick={() => onClick(item)}>{item}</li>
      ))}
    </ul>
  </div>
);

export default RecentSearches;
