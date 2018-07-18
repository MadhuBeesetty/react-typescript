import * as React from 'react';

export interface Child1Props { name: string; whenIsNextSeason: string;}

class Child1 extends React.Component<Child1Props> {
  public render() {
    return (
      <div>
       <h1>{this.props.name}</h1>
       <p>When is the next season :{this.props.whenIsNextSeason}</p>
      </div>
    );
  }
}

export default Child1;
