
const RecentSearches = ({ items, onClick }: { items: string[], onClick: (term: string) => void }) => (
  <div className="recent-searches">
    <h3>Recent Searches</h3>
    <ul>
      {items.map((item, i) => (
        <li key={i} onClick={() => onClick(item)}>{item}</li>
      ))}
    </ul>
  </div>
);

export default RecentSearches;
