import './App.css';
import {Input, Button, CommentsArea} from "./component"

function App() {
  return (
    <div className="App">
      <CommentsArea />
      <div className="text-area">
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default App;
