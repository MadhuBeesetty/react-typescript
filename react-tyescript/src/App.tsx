import * as React from 'react';

import Child1 from './components/child1';
import Child2 from './components/Child2';
 
class App extends React.Component {
Constructor(){
this.state={
  text:'',
  textArray:''
}
}

  public render() {
    return (
      <div>
       <h1>winter is coming</h1>
       <Child1 name={'game of thrones'} whenIsNextSeason={'everyone is waiting'} />
      <Child2 />
      </div>
    );
  }
}

export default App;