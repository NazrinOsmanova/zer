import React from 'react'
import img1 from '../images/img1.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.JPG';
import img5 from '../images/img5.JPG';
import img6 from '../images/img6.JPG';

const Dice = () => {
  let images = [img1, img2, img3, img4, img5, img6];

  const click1 = (e) => {
    let randomImg = images[Math.floor(Math.random() * images.length)];
    e.target.src = randomImg;
  }

  const click2 = (e) => {
    let randomImg = images[Math.floor(Math.random() * images.length)];
    e.target.src = randomImg;
  }

  return (
    <div className='dices'>
      <div className="dice">
        <img onClick={click1} src={img1} alt="zer1" />
        <img onClick={click2} src={img2} alt="zer2" />
      </div>
    </div>
  )
}

export default Dice