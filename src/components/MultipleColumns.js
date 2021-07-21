import {useRef, useState} from 'react';
import Navbar from './Navbar';
import {hexToRgb, rgbToHex} from './color';
import '../styles/general.scss';

const MultipleColumns = () => {
  const [count, setCount] = useState('1');
  const [gap, setGap] = useState('15');
  const [ruleStyle, setRuleStyle] = useState('solid');
  const [ruleWidth, setRuleWidth] = useState('2');
  const [ruleColor, setRuleColor] = useState({r: 0, g: 0, b: 0});
  const [copied, setCopied] = useState(false);

  const ruleColorText = useRef();
  const outputText = useRef();

  const listStyles = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];

  const handleCountChange = event => {
    setCount(event.target.value);
    setCopied(false);
  }

  const handleGapChange = event => {
    setGap(event.target.value);
    setCopied(false);
  }

  const handleRuleStyleChange = event => {
    setRuleStyle(event.target.value);
    setCopied(false);
  }

  const handleRuleWidthChange = event => {
    setRuleWidth(event.target.value);
    setCopied(false);
  }

  const handleRuleColorTextChange = event => {
    const rgb = event.target.value.match(/[0-9]+/g);
    if (rgb !== null && rgb.length === 3) {
      setRuleColor({r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2])});
      setCopied(false);
    }
  }

  const handleRuleColorChooserChange = event => {
    const rgb = hexToRgb(event.target.value);
    setRuleColor(rgb);
    setCopied(false);
    ruleColorText.current.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText.current.innerText);
    setCopied(true);
  }

  const columnRuleValue = `${ruleWidth}px ${ruleStyle} ${rgbToHex(ruleColor.r, ruleColor.g, ruleColor.b)}`;

  const createOutputArr = () => {
    const outputArr = [];
    outputArr.push(`column-count: ${count};`, <br />);
    outputArr.push(`-webkit-column-count: ${count};`, <br />);
    outputArr.push(`-moz-column-count: ${count};`, <br />);

    if (count !== '1') {
      outputArr.push(`column-gap: ${gap}px;`, <br />);
      outputArr.push(`-webkit-column-gap: ${gap}px;`, <br />);
      outputArr.push(`-moz-column-gap: ${gap}px;`, <br />);

      outputArr.push(`column-rule: ${columnRuleValue};`, <br />);
      outputArr.push(`-webkit-column-rule: ${columnRuleValue};`, <br />);
      outputArr.push(`-moz-column-rule: ${columnRuleValue};`, <br />);
    }
    return outputArr;
  }

  return (
    <>
      <Navbar classObject={{parent: 'menu', children: 'option'}} />
      <div className='function-container'>
        <div className='custom-container'>
          <h3 className='header'>Multiple columns options</h3>
          <ul className='custom-list'>
            <li className='custom-item'>
              <div className='meta'>
                <label>Column counts</label>
                <span className='value'>{count}</span>
              </div>
              <input type='range' min='1' max='5' defaultValue='1' className='range-slider' onChange={handleCountChange} />
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Column gaps</label>
                <span className='value'>{gap}px</span>
              </div>
              <input type='range' min='0' max='50' defaultValue='15' className='range-slider' onChange={handleGapChange} />
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Column rule style</label>
              </div>
              <select className='combobox' onChange={handleRuleStyleChange}>
                {listStyles.map(style => <option>{style}</option>)}
              </select>
            </li>
            <li className='custom-item'>
              <div className='meta'>
                <label>Column rule width</label>
                <span className='value'>{ruleWidth}px</span>
              </div>
              <input type='range' min='0' max='50' defaultValue='2' className='range-slider' onChange={handleRuleWidthChange} />
            </li>
            <li className='custom-item item-inline'>
              <div className='meta'>
                <label>Column rule color</label>
              </div>
              <div className='color-picker'>
                <input type='text' className='color-text' ref={ruleColorText} defaultValue='rgb(0, 0, 0)' onChange={handleRuleColorTextChange} />
                <input type='color' className='color-chooser' value={rgbToHex(ruleColor.r, ruleColor.g, ruleColor.b)} onChange={handleRuleColorChooserChange} />
              </div>
            </li>
          </ul>
        </div>
        <div className='result-container'>
          <div className='preview'>
            <p style={{ columnCount: count, columnGap: `${gap}px`, columnRule: columnRuleValue }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis eleifend molestie. Cras libero elit, porta ut diam nec, eleifend sagittis sapien. Aliquam dapibus nibh et euismod posuere. Pellentesque lacinia lectus vitae leo pellentesque tempus. Fusce eget blandit sem. Nulla facilisi. Phasellus gravida sit amet urna eu imperdiet. Fusce auctor sapien sed aliquet aliquet. Aenean non velit sit amet lorem mollis interdum. Nulla sit amet justo et mi lacinia semper at et felis. Nam eget felis justo. Nunc quis elementum urna, sit amet tincidunt neque. Nullam hendrerit dignissim enim id bibendum. Nulla cursus tincidunt malesuada.
            </p>
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
};

export default MultipleColumns;