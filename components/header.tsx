import Button from './Button'
import ConnectionStatus from './ConnectionStatus'

const Header = () => {
  return (
    <header className=' bg-card border-b border-border w-full flex-1'>
      <div className="flex justify-end h-[60px] items-center pr-5">
          <div className='flex gap-[50px] items-center'>
              <ConnectionStatus  walletAddress='0x3a12F0b7C9E4cA8d4bA7e2F5f12D9D83B4cA91F7'/>
              <Button text="Connect Wallet" />
          </div>
      </div>
    </header>
  )
}

export default Header
