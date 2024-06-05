'use client'

import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loading = () => {
    <div className='loading'>
        <Grid
            visible={true}
            height="75"
            width="75"
            color="#fff"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        />
    </div>
}

export default Loading