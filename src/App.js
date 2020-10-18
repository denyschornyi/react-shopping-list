import React, {useState} from 'react';
import './App.css';

import { FormControl, Input, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ListItem from './ListItem';

function App() {

  const [list, setList] = useState([{id: 1, title: 'Find a job', count: 1, done: false }, 
                                    {id: 2, title: 'Bananas', count: 2, done: true }]);
  const [input, setInput] = useState('');

  const createItem = (title) => {
    return {
      id: new Date(),
      title,
      count: 1,
      done: false
    }
  }

  const addItem = (e) => {
    e.preventDefault();
    const listItem = createItem(input);
    setList([...list, listItem]);
    setInput('');
  }

  
  return (
    <div className="app">

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
                disabled={!input}
                onClick={addItem}>
            <AddCircleOutlineIcon/>
          </IconButton>
        </FormControl>
      </form>

      {/* List */}

      {
        list.map(item => {
          const {id, ...otherProps} = item;
          return <ListItem key={id} {...otherProps} />
        })
      }

      {/* Total */}
    </div>
  );
}

export default App;
