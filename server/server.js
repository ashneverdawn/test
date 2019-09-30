//Server test

ES.V1.EventListen("event", "test")
ES.V1.EventTrigger("event", 1, 2, 3)


function test(a, b, c) {
  
  var characters = ES.V1.GetUserCharacters() 
  if (characters == null) {
    console.log("Character list null")
    return
  }
  
  console.log(characters.length)
  if(characters.length == 0) {
     ES.V1.AddUserCharacter('TestName')
     console.log('creating...')
  }
  
  for (var i = 0; i < characters.length; i++) {
    console.log(characters[i].Name)
  }
  console.log(characters)
  
}
