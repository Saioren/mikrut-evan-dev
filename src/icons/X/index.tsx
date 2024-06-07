import React from 'react'
import classes from './index.module.scss'

const XIcon = () => {
  return (
    <svg
      className={classes.x}
      width="62"
      height="60"
      viewBox="0 0 62 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_34_2)">
        <path
          className={classes.stroke}
          d="M96.9435 -64L-31 118.722"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          className={classes.stroke}
          d="M-39 -70L88.9435 112.722"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_34_2">
          <rect width="62" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default XIcon
