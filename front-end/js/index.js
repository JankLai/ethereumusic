//npm install http-server -g
//http-server -c-1 -p 8080
var contract; //合约对象
var userAccount; //用户账户地址
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        alert("ethereum")
        window.web3 = new Web3(ethereum);
        
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            startApp();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        alert("web3")
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        startApp();
    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    
});


function startApp(){
    
    contract = new web3.eth.Contract(abi,address);

    bindListen();
    bindDownload();
    bindSearch();

    var accountInterval = setInterval(function() {
        // Check if account has changed
        web3.eth.getAccounts((err, res) => {                              
            if (res[0] !== userAccount) {               
                userAccount = res[0];               
            }         
        });   
    }, 1000); 
}

function bindListen(){
    $("#listen").on("click",function(){
        $("#txStatus").text("appending(listen),please wait");
        web3.eth.getAccounts((err, res) => {                           
            if (res[0] !== userAccount) {                
                userAccount = res[0];              
            }
            contract.methods.increaseListenCount($("#addValue").val())
                .send({ from: userAccount })
                .on("receipt", function(receipt) {
                    $("#txStatus").text("Success");
                    contract.methods.getUserListenCount(1,userAccount).call().then(function(count){                   
                        $("#listenCount").text(count);              
                    });        
                })
                .on("error", function(error) {
                // Do something to alert the user their transaction has failed
                $("#txStatus").text(error);          
                });
        });
    })
}

function bindDownload(){
    $("#download").on("click",function(){
        $("#txStatus").text("appending(download),please wait");
        web3.eth.getAccounts((err, res) => {                            
            if (res[0] !== userAccount) {            
                userAccount = res[0];               
            }
            contract.methods.increaseDownloadCount($("#addValue").val())
                .send({ from: userAccount })
                .on("receipt", function(receipt) {
                    $("#txStatus").text("Success");
                    contract.methods.getUserDownloadCount(1,userAccount).call().then(function(count){              
                        $("#downloadCount").text(count);              
                    });
                })
                .on("error", function(error) {
                // Do something to alert the user their transaction has failed
                $("#txStatus").text(error);              
                });
        });
    })
}

function bindSearch(){
    $("#search").on("click",function(){
        if($("#musicId").val()!=null&&$("#musicId").val()!=""){
            web3.eth.getAccounts((err, res) => {                   
                alert("searching")
                if (res[0] !== userAccount) {                 
                    userAccount = res[0];                  
                }
                alert("musicId: "+$("#musicId").val())
                var id=parseInt($("#musicId").val());
                contract.methods.getUserListenCount(id,userAccount).call().then(function(count){                   
                    $("#listenCount").text(count);              
                });
                contract.methods.getUserDownloadCount(id,userAccount).call().then(function(count){                 
                    $("#downloadCount").text(count);              
                });
            });
        }
    }) 
}