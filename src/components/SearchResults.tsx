import classNames from 'classnames';
import ResultItem from './ResultItem';

const SearchResults = ({ results, onSelect, view }: { results: any[], onSelect: any, view: 'list' | 'tile' }) => {
  return (
    <div className={classNames('results', view)}>
      {(results || []).map(result => (
        <ResultItem key={result.key} item={result} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default SearchResults;
