import React from 'react';

class AppleItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state != this.props.state;
}

  render() {
    const { apple, eatApple } = this.props;
    return (
      <div className="apple-item">
        <div className="apple-img">
          <div className="image"></div>
          <div className="info">
            <div className="name">red apple - {apple.id}</div>
            <div className="weight">{apple.weight} kg</div>
          </div>
        </div>
        <div className="btn-eat">
          <button onClick={eatApple.bind(this, apple.id)}>Eat</button>
        </div>
      </div>
    );
  }
}

export default AppleItem;