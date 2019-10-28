import React from 'react';
class TypeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){

  }
  render(){

    return <div>

     test, {this.props.name}

     </div>;
  }
}
export default TypeComponent;
