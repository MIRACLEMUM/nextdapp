
interface ConnectionStatusProps {
  walletAddress?: string;
}

const ConnectionStatus = ({ walletAddress }: ConnectionStatusProps) => {
  const isConnected = Boolean(walletAddress);

  const formattedAddress = isConnected
    ? `${walletAddress!.substring(0, 6)}...${walletAddress!.slice(-4)}`
    : "";

  return (
    <div className="bg-[#424258] px-4 py-2 flex items-center  justify-center font-bold text-gray rounded-md">
      {isConnected
        ? `Connected: ${formattedAddress}`
        : "Not connected"}
    </div>
  );
};

export default ConnectionStatus;
