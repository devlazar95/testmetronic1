/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from './components/Login'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
    >
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        <a href='#' className='mb-12'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/horizon.png')} className='h-45px' />
        </a>
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Switch>
            <Route path='/auth/login' component={Login} />
            <Redirect from='/auth' exact={true} to='/auth/login' />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </div>
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <div className="px-2">
            <img alt='Logfeijenoord' src={toAbsoluteUrl('/media/logos/feijenoord.svg')} className='h-25px' />
          </div>
          <div className="px-2">
            <img alt='ves' src={toAbsoluteUrl('/media/logos/ves.svg')} className='h-25px' />
          </div>
          <div className="px-2">
            <img alt='ppg' src={toAbsoluteUrl('/media/logos/ppg.svg')} className='h-25px' />
          </div>
          <div className="px-2">
            <img alt='iwt' src={toAbsoluteUrl('/media/logos/IWT Logo.png')} className='h-45px' />
          </div>
        </div>
      </div>
    </div>
  )
}