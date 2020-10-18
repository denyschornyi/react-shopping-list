import React, {useState} from 'react';
import './App.css';

import { FormControl, Input, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function App() {

  const [list, setList] = useState([{id: 1, title: 'Find a job', count: 1, done: false }, 
                                    {id: 2, title: 'Bananas', count: 2, done: false }]);
  const [input, setInput] = useState('');

  return (
    <div className="app">

      {/* AddItemForm */}

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input"
                  placeholder='Enter a message...' 
                  value={input}
                  onChange={e => setInput(e.target.value)}/>
          <IconButton className="app__iconButton"
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={!input}>
            <AddCircleOutlineIcon/>
          </IconButton>
        </FormControl>
      </form>

      {/* List */}

      {/* Total */}
    </div>
  );
}

export default App;
