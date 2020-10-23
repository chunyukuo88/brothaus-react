import React, { Component } from 'react';
import { connect } from 'react-redux';
import staticStrings from '../../StaticStrings';

class Code extends Component {
  render(){
    return codeString(this.props);
  };
}

const codeString = props => <a href={process.env.REACT_APP_GITHUB_REPO}
                               target='_blank'
                               data-test='code'
                               rel='noopener noreferrer'
                               id='repo'>{getCodeDisplay(props)}</a>;

const getCodeDisplay = props => {
  switch (props.language){
    case 'chinese': return <div className='chinese'>{staticStrings.code.ZH}</div>;
    case 'russian': return <div className='russian'>{staticStrings.code.RU}</div>;
    default:        return <div className='english'>{staticStrings.code.EN}</div>;
  }
}

function mapStateToProps(state){
  return { language: state.language };
}

export default connect(mapStateToProps)(Code);
