pragma solidity >=0.4.22 <0.6.0;

import "./safemath.sol";

contract Mapping {
    using SafeMath for uint32;

    mapping(uint32=>mapping(address=>uint32))  listenCount;
    mapping(uint32=>mapping(address=>uint32))  downloadCount;
    mapping(uint32=>uint32)  totalListenCount;
    mapping(uint32=>uint32)  totalDownloadCount;

    event userListen(uint32 musicId,address userAddress,uint32 count);
    event userDownload(uint32 musicId,address userAddress,uint32 count);


    function increaseListenCount(uint32 musicId) public returns(uint32) {
        listenCount[musicId][msg.sender]++;  //单个用户收听某一music次数加一
        totalListenCount[musicId]++;         //此music总收听次数加一
        emit userListen(musicId,msg.sender,totalListenCount[musicId]);
        return listenCount[musicId][msg.sender];
    }
     function increaseDownloadCount(uint32 musicId) public returns(uint32) {
        downloadCount[musicId][msg.sender]++;
        totalDownloadCount[musicId]++;
        emit userDownload(musicId,msg.sender,totalDownloadCount[musicId]);
        return downloadCount[musicId][msg.sender];
    }

    function getUserListenCount(uint32 musicId,address userAddress) public view returns(uint32) {
        return listenCount[musicId][userAddress];
    }

    function getUserDownloadCount(uint32 musicId,address userAddress) public view returns(uint32) {
        return downloadCount[musicId][userAddress];
    }

    function getTotalListenCount(uint32 musicId) public view returns(uint32) {
        return totalListenCount[musicId];
    }

    function getTotalDownloadCount(uint32 musicId) public view returns(uint32) {
        return totalDownloadCount[musicId];
    }
}