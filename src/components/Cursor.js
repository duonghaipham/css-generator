import {useRef, useState} from "react";
import Navbar from "./Navbar";
import '../styles/general.scss';

const Cursor = () => {
  const [cursor, setCursor] = useState('default');
  const [copied, setCopied] = useState(false);

  const cursorRange = useRef();
  const outputText = useRef();

  const listItems = ['alias', 'all-scroll', 'auto', 'cell', 'context-menu', 'col-resize', 'copy', 'crosshair', 'default', 'e-resize', 'ew-resize', 'grab', 'grabbing', 'help', 'move', 'n-resize', 'ne-resize', 'nesw-resize', 'ns-resize', 'nw-resize', 'nwse-resize', 'no-drop', 'none', 'not-allowed', 'pointer', 'progress', 'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text', 'vertical-text', 'w-resize', 'wait', 'zoom-in', 'zoom-out', 'initial'];

  const handleItemHover = (event, item) => {
    event.target.style.cursor = item;
    cursorRange.current.style.cursor = item;
    setCursor(item);
    setCopied(false);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className='function-container' ref={cursorRange}>
        <div className='custom-container'>
          <h3 className='header'>Cursor options (PC recommended)</h3>
          <ul className='custom-list'>
            {listItems.map((item) => <li className='custom-item cursor' onMouseEnter={event => handleItemHover(event,item)}>{item}</li>)}
          </ul>
        </div>
        <div className='result-container'>
          <div className='output'>
            <p className='text' ref={outputText}>cursor: {cursor};</p>
            <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cursor;