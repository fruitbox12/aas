import React from 'react';
import { SvgIcon } from '@material-ui/core';

const TokenMarketIconPath = () => {
  return (
    <>
      <svg /* width="391" height="279" viewBox="0 0 391 279" */ fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M245.98 162.14C245.983 163.582 245.76 165.016 245.32 166.39V166.39L244.38 168.51L178 318.3C176.65 321.3 174.18 323.38 171.36 323.38C167.09 323.38 163.63 318.71 163.63 312.95C163.63 312.419 163.66 311.888 163.72 311.36V311.36H163.63L172.14 212.56H131.28C127.01 212.56 123.55 207.89 123.55 202.12C123.535 200.101 123.987 198.106 124.87 196.29V196.29L185.8 63.9L186.3 62.81C186.295 62.7836 186.295 62.7564 186.3 62.73C187.7 60.1 189.99 58.39 192.57 58.39C196.85 58.39 200.31 63.06 200.31 68.82V69.89L197.31 151.72H238.31C242.52 151.7 245.98 156.37 245.98 162.14Z" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M151.28 371.48C160.214 374.925 169.705 376.701 179.28 376.72H123.28C121.7 376.72 120.12 376.67 118.55 376.57C55.42 372.67 5 291.01 5 190.86C5 90.71 55.42 9.05 118.55 5.15C120.12 5.05 121.7 5 123.28 5H179.28C169.704 5.01425 160.213 6.7905 151.28 10.24C99.47 30 61 103.37 61 190.86C61 278.35 99.47 351.72 151.28 371.48Z" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M297.57 190.86C297.57 293.5 244.57 376.72 179.28 376.72C169.705 376.701 160.214 374.925 151.28 371.48C99.47 351.72 61 278.34 61 190.86C61 103.38 99.47 30 151.28 10.25C160.213 6.80051 169.704 5.02426 179.28 5.01001C244.61 5.00001 297.57 88.25 297.57 190.86Z" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M35.1801 66.86H91.1801" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M12.1801 126.99H68.17" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M61 190.86H5" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M12.1801 254.72H67.42" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M33 310.92H87.4701" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M77.11 19.7H134.79" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
        <path d="M73.4301 359.44H129.42" stroke="currentColor" stroke-width="10" stroke-miterlimit="10" />
      </svg>
    </>
  )
}

export default function TokenMarketIcon({ className }) {
  return (
    <SvgIcon className={className} viewBox='0 0 385 385' >
      <TokenMarketIconPath />
    </SvgIcon >
  )
}
