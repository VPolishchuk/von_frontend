import React, { useEffect, useState } from 'react';
import * as R from 'ramda'
// images
import Img5 from '../../public/static/city-guide/1.png';
import Img6 from '../../public/static/city-guide/2.png';
import Img3 from '../../public/static/city-guide/3.png';
import Img4 from '../../public/static/city-guide/4.png';

import {
  ImageBox,
  SliderWrap,
  ActiveView,
  SliderRow,
  NavBox,
  BulletComponent
} from './ui';
/// /////////////////////////////////////////////////

const images = [Img5, Img6, Img3, Img4]

const SliderComponent = (props) => {
  // const [ imageIndex, setIndex ] = useState(props.i)
  const [imagesArr, setImagesArr] = useState(images);
  const [index, setIndex] = useState(0);
  // const handleSetNexIndex = (nextIndex) => (
  //   setIndex(R.gte(nextIndex, props.data.length) ? 0 : nextIndex)
  // )
  // const handleSetPrevIndex = (prevIndex) => {
  //   setIndex(R.lt(prevIndex, 0) ? props.data.length - 1 : prevIndex)
  // }
  const handleSetIndex = (index) => {
    setIndex(index);
  }
  useEffect(() => {
    // setInterval(function () {
    //   // if (R.gte(index, imagesArr.length)) {
    //   //   let newArr = imagesArr;
    //   //   newArr.push(imagesArr);
    //   //   newArr.splice(0, R.dec(imagesArr.length, 1));
    //   //   return setImagesArr(newArr);
    //   // }
    //   // if (R.lt(index, 0)) {
    //   //   let newArr = imagesArr;
    //   //   newArr.reverse();
    //   //   newArr.push(imagesArr);
    //   //   newArr.splice(0, imagesArr.length);
    //   //   // return setImagesArr(newArr);
    //   // }

    //   // if (R.gte(index, imagesArr.length)) {
    //   //   return setIndex(0);
    //   // }
    //   // if (R.lt(index, 0)) {
    //   //   return setIndex(R.dec(imagesArr.length, 1));
    //   // }
    //   // setIndex(R.add(index, 1));
    // }, 3000);
  }, [index]);
  return (
    <SliderWrap height={props.height}>
      <ActiveView height={props.height}/>
      <SliderRow
        transform={`translateX(-${index * Math.floor(100 / imagesArr.length)}%)`}
      >
        {
          imagesArr.map((img, i) => (
            <ImageBox height={props.height} key={i} src={img} alt='img'/>
          ))
        }
      </SliderRow>
      {/* {
        // props.isBulletBar &&
        true &&
        <NavBox>
          {
            images.map((img, i) => (
              <BulletComponent
                key={i}
                // backgroundColor={isActive && '#D72066'}
              />
            ))
          }
        </NavBox>
      } */}
      <NavBox>
        {
          imagesArr.map((img, i) => (
            <BulletComponent
              key={i}
              onClick={() => handleSetIndex(i)}
              backgroundColor={R.equals(i, index) && '#D72066'}
            />
          ))
        }
      </NavBox>
    </SliderWrap>
  );
}

export default SliderComponent;
