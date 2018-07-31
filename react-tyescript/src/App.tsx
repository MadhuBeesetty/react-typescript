import * as React from 'react';

import Child1 from './components/child1';
import Child2 from './components/Child2';
 
class App extends React.Component {
public Constructor(text:string, textArray:string[], yes:number, no:number){
this.state={
  text:'',
  textArray:'',
  yes:0,
  no:0
}
}

  public render() {
    return (
      <div>
       <h1>winter is coming</h1>
       <Child1 yes={this.state.yes} no={this.state.no}  whenIsNextSeason={'everyone is waiting'} />
      <Child2 />
      </div>
    );
  }
}

export default App;