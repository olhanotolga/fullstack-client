import React from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

const Todo = ({data}) => {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/dashboard/todos/${data.id}`)
	}

	return (
		<div className="todo" onClick={handleClick}>
			<p>{data.text}</p>
			<div className='actions'>
        		<FontAwesomeIcon icon={faEdit} />
        		<FontAwesomeIcon icon={faTrash} />
      		</div>
		</div>
	)
}

export default Todo;
