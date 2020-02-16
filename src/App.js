import React, { Component } from 'react';
import {data} from './Data';
import './App.css'

class App extends Component {
  constructor () {
    super() ;
    this.state = {
      datas :[]
    }
  }
  componentDidMount() {
    this.setState({
      datas : data
    })
  }
  render() {
    return (
      <div className='layout'>
         <div className='header'>
                  News App
         </div>
          <div className='blank'>
            <div></div>
          </div>
        {
          this.state.datas.map((param,index) =>{
            return (
              <div className='parent'>
               <img className='gambar' src={param.thumbnail} />
                <div className='konten'>
                <p>{param.title}</p>
                <p>{param.pubDate}</p>
                <p>{param.author}</p>
              </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;

