const holdNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ( name_,author_,company_,price_,) {
    const NFT = {
        "name" : name_,
        "author" : author_,
        "company" : company_,
        "price" : price_,
        
    }
    holdNFTs.push(NFT);
    console.log('Minted  ' +name_);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i=0;i<holdNFTs.length;i++){
        console.log("\nbookno: \t\t"+ (i + 1))
        console.log("name: \t\t" + holdNFTs[i].name);
        console.log("author:\t\t " + holdNFTs[i].author);
        console.log("company: \t" + holdNFTs[i].company);
        console.log("price: \t\t" + holdNFTs[i].price);
       
    
    }


}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + holdNFTs.length);
}

// call your functions below this line
mintNFT("Rich Dad Poor Dad","Robert T.Kiyosaki and Sharon Lechter","Plata","900");
mintNFT( "281 and Beyond" ,"VVS Laxman with R Kaushik","Westland","2000");
mintNFT( "Sherlock Holmes" ,"Arthur Conan Doyle", "Prakash","600");
mintNFT( "The White Sky","HSD","Maple","300");
mintNFT( "Mahabharata","Vyasa", "Wonder", "900");
listNFTs();
getTotalSupply();
