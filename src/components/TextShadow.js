import '../styles/general.scss';
import {hexToRgb, rgbToHex} from "./color";
import {useRef, useState} from "react";

const TextShadow = () => {
  const [horizontalLength, setHorizontalLength] = useState(4);
  const [verticalLength, setVerticalLength] = useState(4);
  const [blurRadius, setBlurRadius] = useState(2);
  const [color, setColor] = useState({r: 0, g: 0, b: 0});
  const [colorOpacity, setColorOpacity] = useState(0.6);
  const [copied, setCopied] = useState(false);

  const colorText = useRef();
  const outputText = useRef();

  const handleHorizontalLengthChange = event => {
    setHorizontalLength(event.target.value);
    setCopied(false);
  }

  const handleVerticalLengthChange = event => {
    setVerticalLength(event.target.value);
    setCopied(false);
  }

  const handleBlurRadiusChange = event => {
    setBlurRadius(event.target.value);
    setCopied(false);
  }

  const handleColorOpacityChange = event => {
    setColorOpacity(event.target.value);
    setCopied(false);
  }

  const handleColorTextChange = event => {
    const rgb = event.target.value.match(/[0-9]+/g);
    if (rgb !== null && rgb.length === 3) {
      setColor({r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2])});
      setCopied(false);
    }
  }

  const handleColorChooserChange = event => {
    const rgb = hexToRgb(event.target.value);
    setColor(rgb);
    setCopied(false);
    colorText.current.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  const value = `${horizontalLength}px ${verticalLength}px ${blurRadius}px rgba(${color.r}, ${color.g}, ${color.b}, ${colorOpacity})`;

  return (
    <div className="function-container">
      <div className="custom-container">
        <h3 className="header">Text shadow options</h3>
        <ul className="custom-list">
          <li className="custom-item">
            <div className="meta">
              <label>Horizontal shadow length</label>
              <span className="value">{horizontalLength}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='4' className='range-slider' onChange={handleHorizontalLengthChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Vertical shadow length</label>
              <span className='value'>{verticalLength}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='4' className='range-slider' onChange={handleVerticalLengthChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Blur radius</label>
              <span className='value'>{blurRadius}px</span>
            </div>
            <input type='range' min='0' max='50' defaultValue='2' className='range-slider' onChange={handleBlurRadiusChange} />
          </li>
          <li className='custom-item item-inline'>
            <div className='meta'>
              <label>Shadow color</label>
            </div>
            <div className='color-picker'>
              <input type='text' className='color-text' ref={colorText} defaultValue='rgb(0, 0, 0)' onChange={handleColorTextChange} />
              <input type='color' className='color-chooser' value={rgbToHex(color.r, color.g, color.b)} onChange={handleColorChooserChange} />
            </div>
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Shadow color opacity</label>
              <span className='value'>{colorOpacity}</span>
            </div>
            <input type='range' min='0' max='1' step='0.01' defaultValue='0.5' className='range-slider' onChange={handleColorOpacityChange} />
          </li>
        </ul>
      </div>
      <div className='result-container'>
        <div className='preview'>
          <p className='test-text' style={{ textShadow: value }}>The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className='output'>
          <p className='text' ref={outputText}>text-shadow: {value};</p>
          <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default TextShadow;