//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


//contract address = 0xd8C5dC7f98991f764Ec98416D546180c5668736A

contract UploadFile {
    //task: upload files, retreive, share
    //@geting the data format
    
    //total files
    uint256 public totalFiles;
      struct DataFormat {
        string name;
        string path;
        string types;
        bool isPrivate;
        address owner;
    }
    //modifiers here
    modifier isOwnerOfFile(uint _fileIndex) {
         //check if the msg.sender is the owner of the indexed
        require(msg.sender == fileFormat[_fileIndex].owner, "This file does not belong to u");
        _;
    }

    //keeping track of the users with access
    mapping(address => mapping(uint256 => address[])) accessAddress;
    DataFormat[] public fileFormat;

    //or i clould also create a mapping of address to the struct and remove the owner file
    // so that it will be userUpload[msg.sender] it will reaturn all the user data format in an array
    // mapping(address => DataFormat[]) ownerFileFormat;
    

    //function that sets the data
    function setFileData(string calldata _name, string calldata _path, string calldata _types) external returns(bool){
    //    uint file_id = fileFormat.push(DataFormat(_name, _path, false, msg.sender)) -1;
       
        DataFormat memory data;
        data.name = _name;
        data.path = _path;
        data.types = _types;
        data.isPrivate = false;
        data.owner = msg.sender;
        fileFormat.push(data);
        // increse total files
        totalFiles += 1;
        //getting the returned indexed from pushing data to an array
        uint fileIndex = fileFormat.length -1;
        setAccessUser(fileIndex, msg.sender);
        //emit event here
        return true;
        
        
    }
    
    //toggile the file privacy to rescript access 
    function toggleFilePrivacy(uint _fileIndex) public isOwnerOfFile(_fileIndex) {
         //toggle the files
        fileFormat[_fileIndex].isPrivate = !fileFormat[_fileIndex].isPrivate;
    }


        //seting the access if it is private
        function setAccessUser(uint _fileIndex, address _address) public isOwnerOfFile(_fileIndex) {
            //check if the fileIndex exist and for only msg..sender
            //check if msg.sender has a file on store
            accessAddress[msg.sender][_fileIndex].push(_address);
        }
        //to get all the users that have access to a particuler file
         function getAccessUser(uint fileIdex) public view returns(address[] memory){
            //check if the fileIndex exist and for only msg..sender
            return accessAddress[msg.sender][fileIdex];
        }

        //return who can view
        function whoCanView(uint _fileIndex) public view returns(DataFormat memory){
            //if file is private
            if(fileFormat[_fileIndex].isPrivate){
                //the address of the owner of the file
                address _address = fileFormat[_fileIndex].owner;
                //check if the user address file list has u(msg.sender) as part of accessUsers
                bool foundAccessAddress;
                //loop through accessAddress to see if msg.snder is part of them
                //set foundAccessAddress true if its in else false
                for(uint i=0; i < accessAddress[_address][_fileIndex].length; i++){
                    address accAddress = accessAddress[_address][_fileIndex][i];
                    if(accAddress != msg.sender){
                        foundAccessAddress = false;
                    } else {
                        foundAccessAddress = true;
                    }
                }
                require(foundAccessAddress, "Not allowed to view this file");
                //emit event to notify the owner who viewed his file private file
                return fileFormat[_fileIndex];
            } else {
                return fileFormat[_fileIndex];
            }
            
        }
    //data to be collected
    
}