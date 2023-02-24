
import Button from '@/components/Button';
import React, {useState, memo, useCallback} from 'react'

const Box = ({ color, onClick }) => {
   console.log('box render');
   return (
      <div style={{ 
         height: 70, 
         width: 70,
         backgroundColor: color
       }} onClick={onClick}>
      </div>
   )
}

const MemoedBox = memo(Box);


const index = () => {

   const [count, setCount] = useState(0);
   const [boxColor, setBoxColor] = useState('red');

   const onClick = useCallback(() => {}, []);

   console.log('re-render');

   return (
      <div>
         <p>{count}</p>
         <Button size="sm" onClick={() => setCount(count + 1)}> Increment </Button>

         <Button type="secondary" size="sm" onClick={() => setBoxColor(boxColor == 'red' ? 'blue' : 'red')}> Change color </Button>
         <MemoedBox color={boxColor} onClick={onClick}/>
      </div>
   )
}

export default index