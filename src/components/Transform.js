import '../styles/general.scss';
import {rgbToHex} from "./color";
import {useRef, useState} from "react";

const Transform = () => {
  const [rotate, setRotate] = useState('0');
  const [scale, setScale] = useState('1');
  const [skew, setSkew] = useState('0');
  const [translateX, setTranslateX] = useState('0');
  const [translateY, setTranslateY] = useState('0');
  const [copied, setCopied] = useState(false);

  const w = useRef('');
  const outputText = useRef();

  const handleRotateChange = event => {
    setRotate(event.target.value);
    setCopied(false);
  }

  const handleScaleChange = event => {
    setScale(event.target.value);
    setCopied(false);
  }

  const handleSkewChange = event => {
    setSkew(event.target.value);
    setCopied(false);
  }

  const handleTranslateXChange = event => {
    setTranslateX(event.target.value);
    setCopied(false);
  }

  const handleTranslateYChange = event => {
    setTranslateY(event.target.value);
    setCopied(false);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  const createValue = () => {
    let value = '';
    if (rotate !== '0') value += ` rotate(${rotate}deg)`;
    if (scale !== '1') value += ` scale(${scale})`;
    if (skew !== '0') value += ` skew(${skew}deg)`;
    if (translateX !== '0' || translateY !== '0') value += ` translate(${translateX}px, ${translateY}px)`;
    w.current = value;
    return value;
  }
  const value = createValue();

  return (
    <div className="function-container">
      <div className="custom-container">
        <h3 className="header">Transform options</h3>
        <ul className="custom-list">
          <li className="custom-item">
            <div className="meta">
              <label>Rotate</label>
              <span className="value">{rotate}&deg;</span>
            </div>
            <input type='range' min='0' max='360' defaultValue='0' className='range-slider' onChange={handleRotateChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Scale</label>
              <span className='value'>{scale}</span>
            </div>
            <input type='range' min='0' max='2' step='0.1' defaultValue='1' className='range-slider' onChange={handleScaleChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Skew</label>
              <span className='value'>{skew}&deg;</span>
            </div>
            <input type='range' min='-180' max='180' defaultValue='0' className='range-slider' onChange={handleSkewChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Translate X</label>
              <span className='value'>{translateX}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='0' className='range-slider' onChange={handleTranslateXChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Translate Y</label>
              <span className='value'>{translateY}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='0' className='range-slider' onChange={handleTranslateYChange} />
          </li>
        </ul>
      </div>
      <div className='result-container'>
        <div className='preview'>
          <div className='test-box test-box-2' style={{ transform: value }} />
        </div>
        <div className='output'>
          <p className='text' ref={outputText}>
              transform:{value};<br />
              -webkit-transform:{value};<br />
              -moz-transform:{value};<br />
          </p>
          <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default Transform;