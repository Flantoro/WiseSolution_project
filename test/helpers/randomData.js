class randomData {

  async generateRandomEmailName(){
        let emailName = ""
        
        for(let i=0; i<8; i++){
         let charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
         
        let randomNumber = Math.round(Math.random()* (charset.length+1))
         
         let randomChar = charset.charAt(randomNumber)
        
         emailName+=randomChar
        }
       
        
        return emailName 
       }
       
  }

  export default new randomData()
