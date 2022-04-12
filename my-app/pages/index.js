import IpfsFileUpload from "../components/IpfsFileUpload";
import IpfsUploadContext from "../context/IpfsUploadContext";
import ContractFile from "../components/ContractFiles";
export default function Home() {
 
 
  return (
    
  <IpfsUploadContext>
    <ContractFile />
    <IpfsFileUpload />
  </IpfsUploadContext>

  );
}