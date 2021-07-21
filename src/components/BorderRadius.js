import {useRef, useState} from 'react';
import Navbar from "./Navbar";
import {hexToRgb, rgbToHex} from './color';
import '../styles/general.scss';

const BorderRadius = () => {
  const [allCornersRadius, setAllCornersRadius] = useState('10');
  const [topLeftRadius, setTopLeftRadius] = useState('10');
  const [topRightRadius, setTopRightRadius] = useState('10');
  const [bottomRightRadius, setBottomRightRadius] = useState('10');
  const [bottomLeftRadius, setBottomLeftRadius] = useState('10');
  const [borderWidth, setBorderWidth] = useState('0');
  const [borderColor, setBorderColor] = useState({r: 125, g: 0, b: 125});
  const [borderStyle, setBorderStyle] = useState('solid');
  const [backgroundColor, setBackgroundColor] = useState({r: 45, g: 195, b: 106});
  const [includeBackground, setIncludeBackground] = useState(false);
  const [copied, setCopied] = useState(false);

  const borderColorText = useRef();
  const backgroundColorText = useRef();
  const outputText = useRef();

  const listStyles = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];

  const handleAllCornersChange = event => {
    setAllCornersRadius(event.target.value);
    setTopLeftRadius(event.target.value);
    setTopRightRadius(event.target.value);
    setBottomRightRadius(event.target.value);
    setBottomLeftRadius(event.target.value);
    setCopied(false);
  }

  const handleTopLeftRadiusChange = event => {
    setTopLeftRadius(event.target.value);
    setCopied(false);
  }

  const handleTopRightRadiusChange = event => {
    setTopRightRadius(event.target.value);
    setCopied(false);
  }

  const handleBottomRightRadiusChange = event => {
    setBottomRightRadius(event.target.value);
    setCopied(false);
  }

  const handleBottomLeftRadiusChange = event => {
    setBottomLeftRadius(event.target.value);
    setCopied(false);
  }

  const handleBorderWidthChange = event => {
    setBorderWidth(event.target.value);
    setCopied(false);
  }

  const handleBorderColorTextChange = event => {
    const rgb = event.target.value.match(/[0-9]+/g);
    if (rgb !== null && rgb.length === 3) {
      setBorderColor({r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2])});
      setCopied(false);
    }
  }

  const handleBorderColorChooserChange = event => {
    const rgb = hexToRgb(event.target.value);
    setBorderColor(rgb);
    setCopied(false);
    borderColorText.current.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  const handleBorderStyleChange = event => {
    setBorderStyle(event.target.value);
    setCopied(false);
  }

  const handleBackgroundColorTextChange = event => {
    const rgb = event.target.value.match(/[0-9]+/g);
    if (rgb !== null && rgb.length === 3) {
      setBackgroundColor({r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2])});
      setCopied(false);
    }
  }

  const handleBackgroundColorChooserChange = event => {
    const rgb = hexToRgb(event.target.value);
    setBackgroundColor(rgb);
    setCopied(false);
    backgroundColorText.current.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  const handleIncludeBackgroundChange = event => {
    setIncludeBackground(event.target.checked);
    setCopied(false);
  }

  const handleCopyClick = event => {
    navigator.clipboard.writeText(outputText.current);
    setCopied(true);
  }

  const borderRadiusValue = `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`;
  const borderValue = `${borderWidth}px ${borderStyle} ${rgbToHex(borderColor.r, borderColor.g, borderColor.b)}`;
  const backgroundValue = `${rgbToHex(backgroundColor.r, backgroundColor.g, backgroundColor.b)}`;

  const createOutputArr = () => {
    const outputArr = [];
    outputArr.push(`border-radius: ${borderRadiusValue};`, <br/>);
    outputArr.push(`-webkit-border-radius: ${borderRadiusValue};`, <br />);
    outputArr.push(`-moz-border-radius: ${borderRadiusValue};`, <br />);
    if (borderWidth > 0)
      outputArr.push(`border: ${borderValue};`, <br />);
    if (includeBackground)
      outputArr.push(`background: ${backgroundValue};`);
    return outputArr;
  }

  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className="function-container">
        <div className="custom-container">
          <h3 className="header">Border radius options</h3>
          <ul className="custom-list">
            <li className="custom-item">
              <div className="meta">
                <label>All corners radius</label>
                <span className="value">{allCornersRadius}px</span>
              </div>
              <input type='range' min='0' max='200' defaultValue='10' className='range-slider' onChange={handleAllCornersChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Top-left radius</label>
                <span className='value'>{topLeftRadius}px</span>
              </div>
              <input type='range' min='0' max='200' value={topLeftRadius} className='range-slider' onChange={handleTopLeftRadiusChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Top right radius</label>
                <span className='value'>{topRightRadius}px</span>
              </div>
              <input type='range' min='0' max='200' value={topRightRadius} className='range-slider' onChange={handleTopRightRadiusChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Bottom right radius</label>
                <span className='value'>{bottomRightRadius}px</span>
              </div>
              <input type='range' min='0' max='200' value={bottomRightRadius} className='range-slider' onChange={handleBottomRightRadiusChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Bottom left radius</label>
                <span className='value'>{bottomLeftRadius}px</span>
              </div>
              <input type='range' min='0' max='200' value={bottomLeftRadius} className='range-slider' onChange={handleBottomLeftRadiusChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Border width</label>
                <span className='value'>{borderWidth}px</span>
              </div>
              <input type='range' min='0' max='200' defaultValue='0' className='range-slider' onChange={handleBorderWidthChange} />
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Border color</label>
              </div>
              <div className='color-picker'>
                <input type='text' className='color-text' ref={borderColorText} defaultValue='rgb(125, 0, 125)' onChange={handleBorderColorTextChange} />
                <input type='color' className='color-chooser' value={rgbToHex(borderColor.r, borderColor.g, borderColor.b)} onChange={handleBorderColorChooserChange} />
              </div>
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Border style</label>
              </div>
              <select className='combobox' onChange={handleBorderStyleChange}>
                {listStyles.map(style => <option>{style}</option>)}
              </select>
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Background color</label>
              </div>
              <div className='color-picker'>
                <input type='text' className='color-text' ref={backgroundColorText} defaultValue='rgb(45, 195, 106)' onChange={handleBackgroundColorTextChange} />
                <input type='color' className='color-chooser' value={rgbToHex(backgroundColor.r, backgroundColor.g, backgroundColor.b)} onChange={handleBackgroundColorChooserChange} />
              </div>
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Include background</label>
              </div>
              <label className='switch-slider'>
                <input type='checkbox' onChange={handleIncludeBackgroundChange} className='checkbox'/>
                <span className='slider' />
              </label>
            </li>
          </ul>
        </div>
        <div className='result-container'>
          <div className='preview'>
            <div className='test-box test-box-2' style={{ borderRadius: borderRadiusValue, border: borderValue, background: backgroundValue }} />
          </div>
          <div className='output'>
            <p className='text' ref={outputText}>
              {createOutputArr().map(item => item)}
            </p>
            <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BorderRadius;