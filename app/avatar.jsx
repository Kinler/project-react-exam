import React from 'react';

var Avatar = React.createClass({
    getDefaultProps: function () {
        return {
            name: [1,2,3,4,5,6]
        }
    },
  componentDidMount: function() {
    // console.dir(React.Children.count(this.props.children));
    console.log(this)
  },
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username}/>
        <ProfileLink username={this.props.username}/>
      </div>
    );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (<img src={'http://dummyimage.com/40x40/000/fff'}/>);
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
});

React.render(<Avatar username="pwh"/>, document.getElementById('react-dom'));
