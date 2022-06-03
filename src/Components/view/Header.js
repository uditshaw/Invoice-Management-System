import React from 'react'
import abc from '../icons/abc.svg'
import hrc_bnw from '../icons/hrc_bnw.png'

const Header = () => {
  return (
    <div className='header' style={{height: '80px'}}>
        <div className='abc_logo'>
            <img src={abc} alt='abc' style={{height: '45px'}}/>
        </div>
        <div className='hrc_logo' style={{marginLeft: 'auto', marginRight: '40%'}}>
            <img src={hrc_bnw} alt='highradius' height={'50px'} width={'250px'}/>
        </div>
    </div>
  )
}

export default Header;