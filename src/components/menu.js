import React from 'react';   
import hawaiian from './images/hawaiian.jpg'; 
import veggie from './images/veggie.jpeg';
import bbq from './images/bbq.jpg';
import pepperoni from './images/pepperoni.jpg';
import plain from './images/plain.jpg'; 
import meat from './images/meat.jpg';
import Slice from './slice';
import './css/menu.css';
 

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice 
        img={plain}
        title ="Plain" 
        description ="It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?" 
        price ="1.00" />  
         <Slice 
        img={pepperoni}
        title ="Pepperoni Slice" 
        description ="A classic slice with cheese, sauce , and guess what else .... thats right peperoni." 
        price ="1.00" />  

<Slice 
        img={bbq}
        title ="Bbq Slice" 
        description ="Perhaps the most popular slice we have. BBQ chicken over a dellicious slice of pizza. What more could you want." 
        price ="1.00" />  

<Slice 
        img={hawaiian}
        title ="Hawaiian Slice" 
        description ="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza" 
        price ="Price: $1.00" />    

<Slice 
        img={meat}
        title ="Meat Lover" 
        description ="Pepperoni isnt enough meat for you? Well this Slice has pepperoni, meatballs and sasusage" 
        price ="Price: $1.00" />    

<Slice 
        img={veggie}
        title ="Veggie" 
        description ="You tryna be healthy , but you still can not ressit pizza? Well then the veggie slice is for you! gulit-free pizza at its finest." 
        price ="Price: $1.00" />  
      </div>
    </div>
  );
}

export default Menu;
