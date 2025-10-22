

import './button.css'

const Button = ({ id, children, onClick, type = 'button', action}) => {
    const handleAction = (e) => {
        action(e);
    }

  return <button id={id} type={type} onClick={handleAction}>{children}</button>
}

export default Button