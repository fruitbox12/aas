import React from 'react';
import { SvgIcon } from '@material-ui/core';

const OracleMarketIconPath = () => {
  return (
    <>
      <svg /* width="391" height="279" viewBox="0 0 391 279" */ fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.02002 266.43L134.38 152.43C141.674 145.787 151.085 141.941 160.944 141.575C170.803 141.209 180.473 144.346 188.24 150.43V150.43C195.306 155.974 204.155 158.744 213.122 158.217C222.088 157.69 230.552 153.903 236.92 147.57L373.7 11.5699" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" />
        <path d="M5 5V273.51H385.39" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" />
      </svg>

    </>
  )
}

export default function OracleMarketIcon({ className }) {
  return (
    <SvgIcon className={className} viewBox='0 0 385 385' >
      <OracleMarketIconPath />
    </SvgIcon >
  )
}

