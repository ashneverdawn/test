//Server test

ES.V1.EventListen("event", "test")
ES.V1.EventTrigger("event", 1, 2, 3)


function test(a, b, c) {
  
  var characters = ES.V1.GetPlayerCharacters() 
  if(characters.length == 0) {
     ES.V1.AddPlayerCharacter(ES.V1.GetUsername())
     console.log('creating...')
  }
  
  console.log('selecting...')
  ES.V1.SelectPlayerCharacter(ES.V1.GetUsername())
  
}
