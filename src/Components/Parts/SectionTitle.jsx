import React, { Fragment } from 'react'

const SectionTitle = ({ title, subTitle }) => {
  return (
    <Fragment>
      {title ? <h2 class="title aos-init aos-animate" data-aos="fade-down">{title}</h2> : null}
      {subTitle ? <h4 class="subtitle aos-init aos-animate" data-aos="fade-down">{subTitle}</h4> : null}
      <br />
    </Fragment>
  )
}

export default SectionTitle;