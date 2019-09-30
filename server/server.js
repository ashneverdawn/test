//Server test

ES.V1.EventListen("server.js/selectCharacter", "selectCharacter")
ES.V1.EventTrigger("server.js/selectCharacter")


function selectCharacter() {
  
  var characters = ES.V1.GetPlayerCharacters() 
  if(characters.length == 0) {
     ES.V1.AddPlayerCharacter(ES.V1.GetUsername())
     console.log('creating...')
  }
  
  console.log('selecting...')
  ES.V1.SelectPlayerCharacter(ES.V1.GetUsername())
  
}
