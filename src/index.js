import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Sample extends React.Component {
constructor(props)
{
  super(props)
  // this.username = props.name
  // this.userage = props.Age
  //   console.log('Constructor Called :' + props.name);
  //   this.state = {
  //     fruit : 'apple',
  //     color : 'red'
  //   }
    this.state={value:""}
}

  // display = () => {
  //   console.log('Display Method Called')
  // }

  // Changename = () => {
  //   this.setState ({fruit: 'pomo'})
  // }

  oninputchange = (event) => {
    this.setState({
      value : event.target.value
    })
  }

  render()
  {
    return <>
      <h1>Duplicate Input Box</h1>
      <div className='prebox'>
      <input name='box1' type='text' placeholder="Enter Your Text Here" onInput={this.oninputchange} className='firstbox'></input>
      <input value={this.state.value} placeholder="Content Will Be Displayed Here" className='secondbox' type='text' readOnly></input></div>
    </>
  }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    (<Sample name='Fawwaz' Age='25'/>)  
);

