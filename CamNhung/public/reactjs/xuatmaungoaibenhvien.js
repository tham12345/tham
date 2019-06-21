

class KhoaPham extends React.Component{
    render(){
      return(
          <div>
              <h1 className="mauvang">Demo Reactjs</h1>;
              <h1 className="mauvang">Demo Reactjs</h1>;

          </div>
          );  
          
    }
}

function KhoaPham2 (){
    return  <h1 className="mauvang">Demo Reactjs function </h1>;    
}
// const element = <KhoaPham2 /> 

ReactDOM.render( 
    // <div><KhoaPham /></div>  //Cách 1: Class
    <div><KhoaPham2 /></div> 
    // Cách 2: Function, không cần tạo element
    // element Cách 2: Function 
, document.getElementById("root"));

import React, { Component } from 'react';

class xuatmaungoaibenhvien extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default xuatmaungoaibenhvien;