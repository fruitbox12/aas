import React from 'react';
import { SvgIcon } from '@material-ui/core';

const BlockExplorerIconPath = () => {
  return (
    <>
      <svg /* width="391" height="279" viewBox="0 0 391 279" */ fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M137 268C209.349 268 268 209.349 268 137C268 64.6507 209.349 6 137 6C64.6507 6 6 64.6507 6 137C6 209.349 64.6507 268 137 268Z" stroke="currentColor" stroke-width="10.01" stroke-miterlimit="10" />
        <path d="M257.384 236.146L233.802 259.728C229.116 264.414 229.116 272.012 233.802 276.698L331.022 373.918C335.709 378.605 343.307 378.605 347.993 373.918L371.575 350.336C376.261 345.65 376.261 338.052 371.575 333.366L274.355 236.146C269.669 231.459 262.071 231.459 257.384 236.146Z" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M229.05 229.68L245.88 247.65" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M137.18 60.74L206 102.09V179.56L137.18 219L66 179.56V102.09L137.18 60.74Z" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M68.12 102.07L136.73 142.18L205.59 102.07" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M137 220L136.88 142" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
      </svg>
    </>
  )
}

export default function BlockExplorerIcon({ className }) {
  return (
    <SvgIcon className={className} viewBox='0 0 385 385' >
      <BlockExplorerIconPath />
    </SvgIcon >
  )
}
