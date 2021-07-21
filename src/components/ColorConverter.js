import {useRef, useState} from 'react';
import Navbar from "./Navbar";
import {hexToRgb, rgbToHex} from './color';

const ColorConverter = () => {
  const [red, setRed] = useState('45');
  const [green, setGreen] = useState('195');
  const [blue, setBlue] = useState('106');
  const [opacity, setOpacity] = useState('0.5');

  const hexInput = useRef();
  const rgb = useRef();
  const rgba = useRef();
  const hex = useRef();

  const handleRedChange = event => {
    setRed(event.target.value);
    hexInput.current.value = rgbToHex(parseInt(event.target.value), parseInt(green), parseInt(blue));
  }

  const handleGreenChange = event => {
    setGreen(event.target.value);
    hexInput.current.value = rgbToHex(parseInt(red), parseInt(event.target.value), parseInt(blue));
  }

  const handleBlueChange = event => {
    setBlue(event.target.value);
    hexInput.current.value = rgbToHex(parseInt(red), parseInt(green), parseInt(event.target.value));
  }

  const handleOpacityChange = event => {
    setOpacity(event.target.value);
  }

  const handleHexChange = event => {
    const hex = event.target.value;
    if (hex.length === 7 && hex[0] === '#') {
      const rgb = hexToRgb(hex);
      setRed(rgb.r);
      setGreen(rgb.g);
      setBlue(rgb.b);
    }
  }

  const handleCopy = (event, type) => {
    navigator.clipboard.writeText(type.current.innerText);
    event.target.innerText = 'Copied';
    setTimeout(() => {
      event.target.innerText = 'Copy';
    }, 1500);
  }

  const hexValue = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));

  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className="function-container">
        <div className="custom-container">
          <h3 className="header">RGBA or hex options</h3>
          <ul className="custom-list">
            <li className="custom-item">
              <div className="meta">
                <label>Red</label>
                <span className="value">{red}</span>
              </div>
              <input type='range' min='0' max='255' value={red} className='range-slider' onChange={handleRedChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Green</label>
                <span className='value'>{green}</span>
              </div>
              <input type='range' min='0' max='255' value={green} className='range-slider' onChange={handleGreenChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Blue</label>
                <span className='value'>{blue}</span>
              </div>
              <input type='range' min='0' max='255' value={blue} className='range-slider' onChange={handleBlueChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Opacity</label>
                <span className='value'>{opacity}</span>
              </div>
              <input type='range' min='0' max='1' step='0.01' defaultValue='0.5' className='range-slider' onChange={handleOpacityChange} />
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Color</label>
              </div>
              <input type='text' className='text-in' defaultValue='#2dc36a' ref={hexInput} onChange={handleHexChange} />
            </li>
          </ul>
        </div>
        <div className='result-container'>
          <div className='preview preview-group'>
            <div className='test-bar-1' style={{ backgroundColor: hexValue }} />
            <div className='test-bar-2' style={{ backgroundColor: `rgba(${parseInt(red)}, ${parseInt(green)}, ${parseInt(blue)}, ${opacity})` }} />
          </div>
          <div className='output output-group'>
            <div className='group'>
              <p className='text' ref={rgb}>rgb({red}, {green}, {blue})</p>
              <button className='copy' onClick={event => handleCopy(event, rgb)}>Copy</button>
            </div>
            <div className='group'>
              <p className='text' ref={rgba}>rgba({red}, {green}, {blue}, {opacity})</p>
              <button className='copy' onClick={event => handleCopy(event, rgba)}>Copy</button>
            </div>
            <div className='group'>
              <p className='text' ref={hex}>{hexValue}</p>
              <button className='copy' onClick={event => handleCopy(event, hex)}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorConverter;