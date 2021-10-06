import Button from './Button'
const Header = ({ onAdd, showAdd }) => {


    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? '#e60000' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}> Add</Button>
        </header >
    )
}

export default Header
