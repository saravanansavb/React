import { FaTimes } from 'react-icons/fa'
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' >
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}  </p>
            <span onClick={() => onToggle(task.id)}>{task.remainder === false ? (<BsCheckCircle style={{ color: 'red', fontSize: '15px' }} />) : (<BsCheckCircleFill style={{ color: 'green', fontSize: '15px' }} />)}</span>
        </div>
    )
}

export default Task
