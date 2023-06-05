import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ item, setPopObject }) => {
  const { title, short, description } = item
  return (
      <Fragment>
        <h6 className="my-3">{title}</h6>
        <p className="leading-7">{short}</p>
      </Fragment>
  )
}

export default ServiceCard;

ServiceCard.defaultProps = {
  item: {}
};

