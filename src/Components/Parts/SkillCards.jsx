import React, { Fragment } from 'react'
import styled from 'styled-components'
export const SkillCards = ({ items, setPopObject }) => {
  const { name, image, describeoneline, describe, id } = items
  return (
      <Fragment>
        <div>
          <img src={image} alt="..." className="w-10 group-hover:scale-125 duration-200" />
        </div>
        <div>
          <h6>{name}</h6>
          <p className="italic">{describeoneline ? describeoneline.substring(0, 25) + '...' : null}</p>
          <div className="text-xl absolute top-3 right-3">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
          </div>
        </div>
      </Fragment>
  )
};

const SkillCardsTyed = styled.div`

`