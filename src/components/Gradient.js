import {useEffect, useRef, useState} from 'react';
import Navbar from './Navbar';
import '../styles/general.scss';

const Gradient = () => {
  const [orientation, setOrientation] = useState('linear');
  const [degree, setDegree] = useState('0');
  const [colors, setColors] = useState([{col: '#ff0000', per: 0}, {col: '#00ff00', per: 80}]);
  const [size, setSize] = useState('farthest-corner');
  const [position, setPosition] = useState('center center');
  const [copied, setCopied] = useState(false);

  const colorsText = useRef([]);
  const percentagesText = useRef([]);
  const outputText = useRef();

  const listOrientations = ['linear', 'radial', 'elliptical', 'repeating linear', 'repeating radial', 'repeating elliptical'];
  const listSizes = ['farthest-corner', 'farthest-side'];
  const listPositions = ['top left', 'top center', 'top right', 'left center', 'center center', 'right center', 'bottom left', 'bottom center', 'bottom right'];

  const handleOrientationChange = event => {
    setOrientation(event.target.value);
    setCopied(false);
  }

  const handleDegreeChange = event => {
    setDegree(event.target.value);
    setCopied(false);
  }

  const handleSizeChange = event => {
    setSize(event.target.value);
    setCopied(false);
  }

  const handlePositionChange = event => {
    setPosition(event.target.value);
    setCopied(false);
  }

  const handleColorTextChange = (event, index) => {
    const hex = event.target.value;
    if (hex.length === 7 && hex[0] === '#') {
      const newColors = [...colors];
      newColors[index] = {col: hex, per: newColors[index].per };
      setColors(newColors);
      setCopied(false);
    }
  }

  const handleColorChooserChange = (event, index) => {
    const hex = event.target.value;
    const newColors = [...colors];
    newColors[index] = {col: hex, per: colors[index].per};
    setColors(newColors);
    colorsText.current[index].value = hex;
    setCopied(false);
  }

  const handleColorPercentageChange = (event, index) => {
    const newColors = [...colors];
    newColors[index] = {col: newColors[index].col, per: event.target.value};
    setColors(newColors);
    setCopied(false);
  }

  const handleRemoveColorClick = index => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
    setCopied(false);
  }

  const handleAddColorClick = () => {
    const newColors = [...colors];
    newColors.splice(colors.length - 1, 0, {col: '#ffff00', per: 40});
    setColors(newColors);
    setCopied(false);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  useEffect(() => {
    const color = colors[colors.length - 2];
    colorsText.current[colors.length - 2].value = color.col;
    percentagesText.current[colors.length - 2].value = color.per;
  }, [colors])

  const createValue = () => {
    let value = ''
    if (orientation.includes('linear'))
      value = `${orientation.replace(' ', '-')}-gradient(${degree}deg`;
    else {
      value = `${orientation.replace(' ', '-').replace('elliptical', 'radial')}-gradient(`;
      value += (orientation === 'radial') ? 'circle' : 'ellipse';
      value += ` ${size} at ${position}`;
    }
    colors.forEach((color) => {
      value += `, ${color.col} ${color.per}%`;
    });
    value += ')';
    return value;
  }

  const value = createValue();
  
  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className='function-container'>
        <div className='custom-container'>
          <h3 className='header'>Text shadow options</h3>
          <ul className='custom-list'>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Orientation</label>
              </div>
              <select className='combobox' onChange={handleOrientationChange}>
                {listOrientations.map(orientation => <option>{orientation}</option>)}
              </select>
            </li>
            {(orientation.includes('linear')) ?
              <li className='custom-item'>
                <div className='meta'>
                  <label>Degree</label>
                  <span className='value'>{degree}&deg;</span>
                </div>
                <input type='range' min='0' max='360' defaultValue='0' className='range-slider' onChange={handleDegreeChange} />
              </li>
              :
              <>
                <li className='custom-item item-inline'>
                  <div className='meta'>
                    <label>Size</label>
                  </div>
                  <select className='combobox' onChange={handleSizeChange}>
                    {listSizes.map(currentSize => <option>{currentSize}</option>)}
                  </select>
                </li>
                <li className='custom-item item-inline'>
                  <div className='meta'>
                    <label>Position</label>
                  </div>
                  <select className='combobox' defaultValue='center center' onChange={handlePositionChange}>
                    {listPositions.map(position => <option>{position}</option>)}
                  </select>
                </li>
              </>}
            {colors.map((color, index) =>
                <li className='custom-item item-inline'>
                  <div className='meta'>
                    <label>{(index === 0) ? 'Start color' : (index === colors.length - 1) ? 'End color' : 'Stop color'}</label>
                    {(index !== 0 && index !== colors.length - 1) ? <span className='remove' onClick={() => handleRemoveColorClick(index)}>&#10006;</span> : ''}
                  </div>
                  <div className='color-value'>
                    <div className='color-picker'>
                      <input type='text' className='color-text' ref={element => colorsText.current[index] = element}
                             defaultValue={color.col} onChange={event => handleColorTextChange(event, index)} />
                      <input type='color' className='color-chooser' value={color.col}
                             onChange={event => handleColorChooserChange(event, index)} />
                    </div>
                    <input type='text' className='color-percentage' ref={element => percentagesText.current[index] = element}
                           defaultValue={color.per} onChange={event => handleColorPercentageChange(event, index)} />
                  </div>
                </li>
            )}
            <li className='custom-item item-inline'>
              <button type='button' onClick={handleAddColorClick}>Add stop color</button>
            </li>
          </ul>
        </div>
        <div className='result-container'>
          <div className='preview'>
            <div className='test-box-1' style={{ background: value }} />
          </div>
          <div className='output'>
            <p className='text' ref={outputText}>
              background: {colors[0].col};<br />
              background: {value};<br />
              background: -webkit-{value};<br />
              background: -moz-{value};<br />
            </p>
            <button className='copy' onClick={handleCopyClick}>{(copied) ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gradient;