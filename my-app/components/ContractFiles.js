import { useContext, useEffect, useRef, useState  } from "react";
import { ipfsContext } from "../context/IpfsUploadContext";
import { providers, Contract, ethers } from "ethers";
import Web3Modal from "web3modal";
import { abi, UPLOAD_CONTRACT_ADDRESS } from "../constants";

export default function ContractFile() {
  const { fileUrl, fileName, fileType } = useContext(ipfsContext)
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
 // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();
  //total files
  const [totalFiles, setTotalFiles] = useState(0)

  //to get signer or provider
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const getTotalFileUploads = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const provider = await getProviderOrSigner();
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const uploadContract = new Contract(
        UPLOAD_CONTRACT_ADDRESS,
        abi,
        provider
      );
      // call the addAddressToWhitelist from the contract
      const _totalFiles = await uploadContract.totalFiles()
      _totalFiles = _totalFiles.toNumber()
      setTotalFiles(_totalFiles)
      console.log("totalFiles", totalFiles)
     
    } catch (err) {
      console.error(err);
    }
  };
 
const getAllUploadedFile = async () => {

    try{
        const signer = await getProviderOrSigner(true)

        const uploadContract = new Contract(
            UPLOAD_CONTRACT_ADDRESS,
            abi,
            signer
        )
        
        setLoading(true)
        const response = await uploadContract.whoCanView(1)
          
        // wait for the transaction to get mined
        setLoading(false)
        console.log(response)
        
        
    } catch(err) {
        console.error(err)
    }
}
//set access users
const setWhoCanSee = async (id, address) => {

  try{
      const signer = await getProviderOrSigner(true)

      const uploadContract = new Contract(
          UPLOAD_CONTRACT_ADDRESS,
          abi,
          signer
      )
      const tx = await uploadContract.setAccessUser(id, address)
      setLoading(true);
      // wait for the transaction to get mined
      tx.wait()
      setLoading(false)
      console.log("the address can now see your private files", tx)
      getWhoCanSee(id)
  } catch(err) {
      console.error(err)
  }
}

const getWhoCanSee = async (id) => {
  try {
    // We need a Signer here since this is a 'write' transaction.
    const signer = await getProviderOrSigner(true)
    // Create a new instance of the Contract with a Signer, which allows
    // update methods
    const uploadContract = new Contract(
      UPLOAD_CONTRACT_ADDRESS,
      abi,
      signer
    );
    // call the addAddressToWhitelist from the contract
    const response = await uploadContract.getAccessUser(id)
  console.log("the users that can see", response)
   
  } catch (err) {
    console.error(err);
  }
};

//toggling privacy
const togglePrivacy = async (id) => {
  try{
    const signer = await getProviderOrSigner(true)

    const uploadContract = new Contract(
        UPLOAD_CONTRACT_ADDRESS,
        abi,
        signer
    )
    console.log(uploadContract)
    const tx = await uploadContract.toggleFilePrivacy(id)
        setLoading(true);
        // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      console.log("success", tx)
      getWhoCanSee(id)
      
  } catch(err) {
    console.error(err)
}

}
//setting the files for uploading
const handleUploadFiles = async () => {
    if(!fileUrl){
        console.log("no files")
        return true
    }
    try{
        const signer = await getProviderOrSigner(true)

        const uploadContract = new Contract(
            UPLOAD_CONTRACT_ADDRESS,
            abi,
            signer
        )
        const tx = await uploadContract.setFileData(fileName, fileUrl, fileType);
        setLoading(true);
        // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      console.log("success", tx)
      getTotalFileUploads()

    } catch(err) {
        console.error(err)
    }

}

  /*
    connectWallet: Connects the MetaMask wallet
  */
    const connectWallet = async () => {
        try {
          // Get the provider from web3Modal, which in our case is MetaMask
          // When used for the first time, it prompts the user to connect their wallet
          await getProviderOrSigner();
          setWalletConnected(true);
    
        } catch (err) {
          console.error(err);
        }
      };
    
      /*
        renderButton: Returns a button based on the state of the dapp
      */
      const renderButton = () => {
          return (
            <button onClick={connectWallet}>
              {walletConnected ? "Connected" : "Connect your wallet"}
            </button>
          );
        
      };
    
      // useEffects are used to react to changes in state of the website
      // The array at the end of function call represents what state changes will trigger this effect
      // In this case, whenever the value of `walletConnected` changes - this effect will be called
      useEffect(() => {
        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
        if (!walletConnected) {
          // Assign the Web3Modal class to the reference object by setting it's `current` value
          // The `current` value is persisted throughout as long as this page is open
          web3ModalRef.current = new Web3Modal({
            network: "rinkeby",
            providerOptions: {},
            disableInjectedProvider: false,
          });
          connectWallet();
        }
      }, [walletConnected]);
    
  return (
    <div>
        {renderButton()}
        {loading && <p>Loading...</p>}
        <button onClick={getTotalFileUploads}>TotalFiles</button>
        <button onClick={getAllUploadedFile}>Get Uploaded Fies</button>
        { fileUrl && <button onClick={handleUploadFiles}>Uploaded Fies</button>}
 <button onClick={() => togglePrivacy(1)}> Make Private</button>
 <button onClick={() => getWhoCanSee(1)}> All who have access to that files</button>
 <button onClick={() => setWhoCanSee(1, "0x2fae2a3aC4e8770b8641659f0669cFe8bfd60eA3")}> All who have access to that files</button>
   
 
    </div>

  

  );
}