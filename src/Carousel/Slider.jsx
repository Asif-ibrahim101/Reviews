import Reactm, { useState } from 'react'
import datas from '../Data/Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Slider() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = datas[index];

  const checkNumber = (number) => {
    if (number > datas.length - 1) {
      return 0;
    }
    if (number < 0) {
      return datas.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex(checkNumber(index + 1));
  };

  const prev = () => {
    setIndex(checkNumber(index - 1));
  };

  const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * datas.length)

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className='carousel_body'>
      <div className="carousel_image">
        <img src={image} alt="" />
        <div className='quote_back'>
          <FaQuoteRight className='quote'/>
        </div>
      </div>

      <div className="identification">
        <h1 className='name'>{name}</h1>
        <p className='job'>{job}</p>
      </div>

      <div className="text">
        <p>{text}</p>
      </div>

      <div className="handle">
        <button onClick={prev}>
          <FaChevronLeft />
        </button>
        <button onClick={next}>
          <FaChevronRight />
        </button>
      </div>

      <div className="suprise">
        <button onClick={randomNumber}>
          Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Slider
