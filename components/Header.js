import React from 'react'
import NextHead from 'next/head'

const Header = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'Dashboard'}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
  </NextHead>
)

export default Header