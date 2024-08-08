import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAccount } from 'wagmi';
import Navbar from '../components/nav.jsx';
function ConnectWallet () {
    // const naivgate = useNavigate();
    // const { address, isConnecting, isDisconnected } = useAccount();
    
    // useEffect(() => {
    //     if (address && !isConnecting) {
    //       naivgate('/reels');
    //     }
    //   }, [address, isConnecting, history]);
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center self-center pt-[140px]">
                <img className="w-[6%]" src="/Images/logo.png" alt="" />
                <a className="text-[35px] text-white font-medium" href="/">BEATBIT</a>
            </div>
            <h1 className='text-center mt-[20px] text-white text-[30px]'>JOIN BEATBIT BY CONNECTING  WALLET</h1>
            <div className='connect text-black rounded-sm  mt-[30px]'>
                <button className='text-white' type='button'>Connect Wallet</button>
            </div>
        </>
    )
}
export default ConnectWallet