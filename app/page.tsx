import ControlInterface from "@/components/ControlInterface";
import DisplayCard from "@/components/DisplayCard";


export default function Home() {
  return (
    <div className="text-white">
      <h1 className="text-xl">Interact with your smart contract directly from the browser</h1>
      <div className="grid grid-cols-2 mt-4 gap-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <DisplayCard 
              title="Total Funds Raised" 
              description="0 ETH" 
              descColor="text-primary"
            />
          </div>
          <DisplayCard 
            title="Number of Backers" 
            description="0"
             descColor="text-primary" 
          />
          <DisplayCard 
            title="Current ETH Price" 
            description="0" 
            descColor="text-primary"
          />
          <DisplayCard 
            title="Your Wallet Balance" 
            description="0 ETH" 
            isSpanTwo
             descColor="text-green"
            loading
          />
          <DisplayCard 
            title="Min Deposit (USD)" 
            description="0 ETH"
             descColor="text-yellow"
          />
          <DisplayCard 
            title="Min Deposit (ETH)" 
            description="0 ETH"
             descColor="text-red"
             
          />
        </div>
        <ControlInterface />
      </div>
    </div>
  );
}
