import './App.css';
import { StarRating } from './StarRating';

function App() {
  return (
    <div className="App">
      <StarRating />
      <StarRating title="Star rating (with title)" />
      <StarRating title="Star rating (with title, initial value)" value={4} />
      <StarRating title="Star rating (with title, initial value, disabled)" value={4} disabled />
    </div>
  );
}

export default App;
