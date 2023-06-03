import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ item, setPopObject }) => {
  const { title, short, description } = item
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      onClick={() => {
        setPopObject({ text: description })
      }}
      class="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none aos-init aos-animate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIaSURBVHgB7ZcxLARBFIb/IDQ4uQiFRqtAJ5FohEKikCh0Qqs6DnEaNDRU9Eg0WkEjObd3LjQXuis013GJSkEjcmZyO9lnMrs7O3vHFfslv0x23hv/vZmX3QEiIiL+jTGmMlOGaRgNyCFTxdYsGpBnOAZ70GD0wzGXQwiaNOPiTGmmXc34KTK+kub2mW6YYqgRfKECnIosa+RcknjaIDvkuYXqDw9t7oksypXwyelk+rBjX6W5JWktCyEqqTKX1MibJPEnivlNac0CDEzG8XtbK/bCOpySnGmXGNlknqkZIczpVE5QJHldHnFJGFQyFtLcIMm71YiXK2nBo3FUZ053WwUJkrummaMyGdMxF6RyggzJHwiQ59k4YRqC0knySwiOa+PkpIlVmDFD1jiGGXLjZPmr7ksKaoUZc2R8ATPk//3G/4TtXEHJzuVvkQ4EJyV5yIKcQ77XdzA/h6MkL4PgbHuZE6gqqWtyneQsIhiqyrW4BXOTloHJexI/BH1kc5aXOUEcwUx2k7gizM1dI8BHg2q7V1xi50nMEczMKc+cH6rGSSnizsj8OPyRG8IyMSdQVVL+oi7bzz811ksozHl+ZvndSd6ZJlDdAkE7GY8w9drjNPxpI+OsvfY3agBvnHOmA+n5FpxqLECPPVTfNDW7NHnxAMdgPxoMvrXC3CPqhO69WAXt2DzqhPZFxSW3D9V7xwbTCyIiIv6eH9CG8DB7Z2R3AAAAAElFTkSuQmCC" alt="..." class="mx-auto" />
      <h6 class="my-3">{title}</h6>
      <p class="leading-7">{short}</p>
    </div>
  )
}

export default ServiceCard;

ServiceCard.defaultProps = {
  item: {}
};

