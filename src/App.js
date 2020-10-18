import React, {useState} from 'react';
import './App.css';

import { FormControl, Input, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ListItem from './ListItem';
import Total from './Total';

function App() {
  const [list, setList] = useState([{id: 1, title: 'Find a job', count: 1, done: false }, 
                                    {id: 2, title: 'Bananas', count: 2, done: true }]);
  const [input, setInput] = useState('');

  const totalCount = () => {
    let total = 0;
    list.map(item => {
      total += item.count;
    })
    return total;
  }

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

  const onChangeInput  = (id) => {
    const idx = list.findIndex(el => el.id === id);
    const oldItem = list[idx];
    const newItem = {...oldItem, done: !oldItem.done};
    setList([...list.slice(0, idx), newItem, ...list.slice(idx+1)])
  }

  const onCount = (id, operation) => {
    let operationNumber;
    if(operation === 'ADD'){
      operationNumber = 1;
    }else if(operation === 'REMOVE'){
      operationNumber = -1;
    }else{
      return;
    }
    const idx = list.findIndex(el => el.id === id);
    const oldItem = list[idx];
    if(oldItem.count === 1 && operation === 'REMOVE' ){
      return;
    }
    const newItem = {...oldItem, count: oldItem.count + operationNumber};
    setList([...list.slice(0, idx), newItem, ...list.slice(idx+1)])
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

      {
        list.map(item => {
          const {id, ...otherProps} = item;
          return <ListItem key={id} {...otherProps} onChange={() => onChangeInput(id)} onCount={(operation) => onCount(id, operation)}/>
        })
      }

      
      <Total total={totalCount()} />
    </div>
  );
}

export default App;
