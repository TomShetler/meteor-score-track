import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubTitle() {
    if (this.props.subTitle) {
      return <h2 className="title-bar__subTitle">{this.props.subTitle}</h2>;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          <img className="title-bar__logo" src="/img/Manchester_City_2016.png" />
          {this.renderSubTitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};

// TitleBar.defaultProps = {
//   title: 'Default title'
// };
