import {useRef, useState} from 'react';
import Navbar from "./Navbar";
import {hexToRgb, rgbToHex} from "./color";
import landscape from '../img/landscape.jpg';
import '../styles/general.scss';

const Filter = () => {
  const [grayscale, setGrayscale] = useState('0');
  const [sepia, setSepia] = useState('0');
  const [blur, setBlur] = useState('0');
  const [brightness, setBrightness] = useState('100');
  const [hueRotate, setHueRotate] = useState('0');
  const [saturate, setSaturate] = useState('100');
  const [opacity, setOpacity] = useState('100');
  const [contrast, setContrast] = useState('100');
  const [invert, setInvert] = useState('0');
  const [dropShadow, setDropShadow] = useState(false)
  const [shadowColor, setShadowColor] = useState({r: 0, g: 0, b: 0});
  const [horizontalLength, setHorizontalLength] = useState('10');
  const [verticalLength, setVerticalLength] = useState('10');
  const [blurRadius, setBlurRadius] = useState('5');
  const [copied, setCopied] = useState(false);

  const colorText = useRef();
  const outputText = useRef();

  const handleGrayscaleChange = event => {
    setGrayscale(event.target.value);
    setCopied(false);
  }

  const handleSepiaChange = event => {
    setSepia(event.target.value);
    setCopied(false);
  }

  const handleBlurChange = event => {
    setBlur(event.target.value);
    setCopied(false);
  }

  const handleBrightnessChange = event => {
    setBrightness(event.target.value);
    setCopied(false);
  }

  const handleHueRotateChange = event => {
    setHueRotate(event.target.value);
    setCopied(false);
  }

  const handleSaturateChange = event => {
    setSaturate(event.target.value);
    setCopied(false);
  }

  const handleOpacityChange = event => {
    setOpacity(event.target.value);
    setCopied(false);
  }

  const handleContrastChange = event => {
    setContrast(event.target.value);
    setCopied(false);
  }

  const handleInvertChange = event => {
    setInvert(event.target.value);
    setCopied(false);
  }

  const handleDropShadowChange = event => {
    setDropShadow(event.target.checked);
    setCopied(false);
  }

  const handleColorTextChange = event => {
    const rgb = event.target.value.match(/[0-9]+/g);
    if (rgb !== null && rgb.length === 3) {
      setShadowColor({r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2])});
      setCopied(false);
    }
  }

  const handleColorChooserChange = event => {
    const rgb = hexToRgb(event.target.value);
    setShadowColor(rgb);
    setCopied(false);
    colorText.current.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

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

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  const createValue = () => {
    let value = '';
    if (grayscale !== '0') value += ` grayscale(${grayscale}%)`;
    if (sepia !== '0') value += ` sepia(${sepia}%)`;
    if (blur !== '0') value += ` blur(${blur}px)`;
    if (brightness !== '100') value += ` brightness(${brightness}%)`;
    if (hueRotate !== '0') value += ` hue-rotate(${hueRotate}deg)`;
    if (saturate !== '100') value += ` saturate(${saturate}%)`;
    if (opacity !== '100') value += ` opacity(${opacity}%)`;
    if (contrast !== '100') value += ` contrast(${contrast}%)`;
    if (invert !== '0') value += ` invert(${invert}%)`;
    if (dropShadow) value += ` drop-shadow(${horizontalLength}px ${verticalLength}px ${blurRadius}px rgb(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}))`;
    return value;
  }
  const value = createValue();

  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className='function-container'>
        <div className='custom-container'>
          <h3 className='header'>Filter options</h3>
          <ul className='custom-list'>
            <li className='custom-item'>
              <div className='meta'>
                <label>Grayscale</label>
                <span className='value'>{grayscale}%</span>
              </div>
              <input type='range' min='0' max='100' defaultValue='0' className='range-slider' onChange={handleGrayscaleChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Sepia</label>
                <span className='value'>{sepia}%</span>
              </div>
              <input type='range' min='0' max='100' defaultValue='0' className='range-slider' onChange={handleSepiaChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Blur</label>
                <span className='value'>{blur}px</span>
              </div>
              <input type='range' min='0' max='10' defaultValue='0' className='range-slider' onChange={handleBlurChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Brightness</label>
                <span className='value'>{brightness}%</span>
              </div>
              <input type='range' min='0' max='200' defaultValue='100' className='range-slider' onChange={handleBrightnessChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Hue rotate</label>
                <span className='value'>{hueRotate}&deg;</span>
              </div>
              <input type='range' min='0' max='360' defaultValue='0' className='range-slider' onChange={handleHueRotateChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Saturate</label>
                <span className='value'>{saturate}%</span>
              </div>
              <input type='range' min='0' max='1000' defaultValue='100' className='range-slider' onChange={handleSaturateChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Opacity</label>
                <span className='value'>{opacity}%</span>
              </div>
              <input type='range' min='0' max='100' defaultValue='100' className='range-slider' onChange={handleOpacityChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Contrast</label>
                <span className='value'>{contrast}%</span>
              </div>
              <input type='range' min='0' max='1000' defaultValue='100' className='range-slider' onChange={handleContrastChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Invert</label>
                <span className='value'>{invert}%</span>
              </div>
              <input type='range' min='0' max='100' defaultValue='0' className='range-slider' onChange={handleInvertChange} />
            </li>
            <li className='custom-item'>
              <h4 className='special-header'>Drop shadow</h4>
              <ul className='special-container'>
                <li className='special-item item-inline'>
                  <div className='meta'>
                    <label>Include drop shadow</label>
                  </div>
                  <label className='switch-slider'>
                    <input type='checkbox' onChange={handleDropShadowChange} className='checkbox'/>
                    <span className='slider' />
                  </label>
                </li>
                <li className='special-item item-inline'>
                  <div className='meta'>
                    <label>Shadow color</label>
                  </div>
                  <div className='color-picker'>
                    <input type='text' className='color-text' ref={colorText} defaultValue='rgb(0, 0, 0)' onChange={handleColorTextChange} />
                    <input type='color' className='color-chooser' value={rgbToHex(shadowColor.r, shadowColor.g, shadowColor.b)} onChange={handleColorChooserChange} />
                  </div>
                </li>
                <li className='special-item'>
                  <div className='meta'>
                    <label>Horizontal shadow length</label>
                    <span className='value'>{horizontalLength}px</span>
                  </div>
                  <input type='range' min='-200' max='200' defaultValue='10' className='range-slider' onChange={handleHorizontalLengthChange} />
                </li>
                <li className='special-item'>
                  <div className='meta'>
                    <label>Vertical shadow length</label>
                    <span className='value'>{verticalLength}px</span>
                  </div>
                  <input type='range' min='-200' max='200' defaultValue='10' className='range-slider' onChange={handleVerticalLengthChange} />
                </li>
                <li className='special-item'>
                  <div className='meta'>
                    <label>Blur radius</label>
                    <span className='value'>{blurRadius}px</span>
                  </div>
                  <input type='range' min='0' max='400' defaultValue='5' className='range-slider' onChange={handleBlurRadiusChange} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='result-container'>
          <div className='preview'>
            <img src={landscape} width='400' alt='Landscape' style={{ filter: value }} />
          </div>
          <div className='output'>
            <p className='text' ref={outputText}>
              filter:{value};<br />
              -webkit-filter:{value};<br />
              -moz-filter:{value};<br />
            </p>
            <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Filter;