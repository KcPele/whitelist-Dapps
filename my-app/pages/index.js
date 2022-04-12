import IpfsFileUpload from "../components/IpfsFileUpload";
import IpfsUploadContext from "../context/IpfsUploadContext";
export default function Home() {

 
  return (
  <IpfsUploadContext>
    <IpfsFileUpload />
  </IpfsUploadContext>

  );
}