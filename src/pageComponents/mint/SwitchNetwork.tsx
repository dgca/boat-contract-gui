import { useCallback } from 'react';
import { useSwitchNetwork } from 'wagmi';
// TODO: use supported contracts from hook to populate selector
import { EXPECTED_CHAIN } from '../../constants';

function SwitchNetwork() {
  const { switchNetwork } = useSwitchNetwork({ chainId: EXPECTED_CHAIN.id });
  const handleClick = useCallback(() => (switchNetwork ? switchNetwork() : null), [switchNetwork]);
  return (
    <div className="flex flex-col justify-start">
      <p className="text-sm">Please switch to {EXPECTED_CHAIN.name}</p>
      <button type="button" onClick={handleClick}>
        Switch Network
      </button>
    </div>
  );
}

export default SwitchNetwork;
