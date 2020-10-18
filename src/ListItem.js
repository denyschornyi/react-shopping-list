import React from 'react';

import './ListItem.css';

import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function ListItem(props) {
    const {title, count, done} = props;
    console.log(props);

    let className = 'listItem';
    if(done){
        className += ' done';
    }

    return (
        <div className={className}>
            <input type="checkbox" checked={done? true : false}/>
            <h2>{title}</h2>
            <div className="listItem__count">
                <IconButton>
                    <RemoveIcon />
                </IconButton>
                <strong>{count}</strong>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ListItem
