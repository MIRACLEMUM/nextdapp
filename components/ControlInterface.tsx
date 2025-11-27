import React from 'react'
import Button from './Button'
import ConnectionStatus from './ConnectionStatus'

const ControlInterface = () => {
  return (
    <div className='border border-border flex flex-col gap-6 rounded-md bg-card p-4'>
      <div className='flex flex-col'>
        <label htmlFor="ethAmount" className='text-lg font-bold text-gray'>ETH Amount</label>
        <input 
          type="number" 
          placeholder='0.000'
          id='ethAmount'
          className='border-4 border-border bg-[#424258] rounded-md p-2 outline-primary'
        />
      </div>
      <Button
        text='Buy Coffee'
        variant='primary'
        isFullWidth={true}
        size='lg'
      />
      <Button
        text='Refresh Contract Balance'
        variant='secondary'
        isFullWidth={true}
        size='lg'
      />
      <Button
        text='Withdraw Funds'
        variant='danger'
        isFullWidth={true}
        size='lg'
      />
      <ConnectionStatus  walletAddress='0x3a12F0b7C9E4cA8d4bA7e2F5f12D9D83B4cA91F7'/>
    </div>
  )
}

export default ControlInterface
