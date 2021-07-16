import '../styles/general.scss';
import '../styles/box-shadow.scss';
import {useState} from 'react';

const BoxShadow = () => {
  const [horizontalLength, setHorizontalLength] = useState(10);
  const [verticalLength, setVerticalLength] = useState(10);
  const [blurRadius, setBlurRadius] = useState(5);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [colorOpacity, setColorOpacity] = useState(0.5);
  const [inset, setInset] = useState('');

  const handleHorizontalLengthChange = (event) => {
    setHorizontalLength(event.target.value);
  }

  const handleVerticalLengthChange = (event) => {
    setVerticalLength(event.target.value);
  }

  const handleBlurRadiusChange = (event) => {
    setBlurRadius(event.target.value);
  }

  const handleSpreadRadiusChange = (event) => {
    setSpreadRadius(event.target.value);
  }

  const handleColorOpacityChange = (event) => {
    setColorOpacity(event.target.value);
  }

  const handleInsetChange = (event) => {
    if (event.target.checked)
      setInset(' inset');
    else
      setInset('');
  }

  const value = `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${colorOpacity})${inset}`;

  return (
    <div className='function-container'>
      <div className='custom-container'>
        <h3 className='header'>Box shadow options</h3>
        <ul className='custom-list'>
          <li className='custom-item'>
            <div className='meta'>
              <label>Horizontal shadow length</label>
              <span className='value'>{horizontalLength}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='10' className='range-slider' onChange={handleHorizontalLengthChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Vertical shadow length</label>
              <span className='value'>{verticalLength}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='10' className='range-slider' onChange={handleVerticalLengthChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Blur radius</label>
              <span className='value'>{blurRadius}px</span>
            </div>
            <input type='range' min='0' max='400' defaultValue='5' className='range-slider' onChange={handleBlurRadiusChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Spread radius</label>
              <span className='value'>{spreadRadius}px</span>
            </div>
            <input type='range' min='-200' max='200' defaultValue='0' className='range-slider' onChange={handleSpreadRadiusChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Shadow color opacity</label>
              <span className='value'>{colorOpacity}</span>
            </div>
            <input type='range' min='0' max='1' step='0.01' defaultValue='0.5' className='range-slider' onChange={handleColorOpacityChange} />
          </li>
          <li className='custom-item'>
            <div className='meta'>
              <label>Inset</label>
              <span className='value'>{colorOpacity}</span>
            </div>
            <label className='switch-slider'>
              <input type='checkbox' onChange={handleInsetChange} className='checkbox'/>
              <span className='slider' />
            </label>
          </li>
        </ul>
      </div>
      <div className='result-container'>
        <div className='preview'>
          <div
            className='test-box'
            style={{ boxShadow: value }}/>
        </div>
        <div className='output'>
          <p className='text'>box-shadow: {value};</p>
          <p className='text'>-webkit-box-shadow: {value};</p>
          <p className='text'>-moz-box-shadow: {value};</p>
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default BoxShadow;