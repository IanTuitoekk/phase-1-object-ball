function gameObject(){
    let obj = {
    home:{
        teamName :"Brooklyn Nets",
        colors :["Black","White"],
        players :{
            "Alan Anderson":{
                number : 0,
                shoe : 16,
                points : 22,
                rebounds : 12,
                assists : 12,
                steals : 3,
                blocks : 1,
                slamDunks : 1
            },
            "Reggie Evans" :{
                number : 30,
                shoe : 14,
                points : 12,
                rebounds : 12,
                assists : 12,
                steals : 3,
                blocks : 1,
                slamDunks : 7
            },
            "Brook Lopez" :{
                number : 11,
                shoe : 17,
                points : 17,
                rebounds : 19,
                assists : 10,
                steals : 3,
                blocks : 1,
                slamDunks : 15
            },
            "Mason Plumlee" :{
                number : 1,
                shoe : 19,
                points : 26,
                rebounds : 12,
                assists : 6,
                steals : 3,
                blocks : 8,
                slamDunks : 5
            },
            "Jason Terry" :{
                number : 0,
                shoe : 16,
                points : 22,
                rebounds : 12,
                assists : 12,
                steals : 3,
                blocks : 1,
                slamDunks : 1
            }
        }
    },
    away :{
        teamName :"Charlotte Hornets",
        colors :["Turquoise","Purple"],
        players : {
            "Jeff Adrien" :{
                number : 4,
                shoe : 18,
                points : 10,
                rebounds : 1,
                assists : 1,
                steals : 2,
                blocks : 7,
                slamDunks : 2
            },
            "Bismak Biyombo" :{
                number : 0,
                shoe : 16,
                points : 12,
                rebounds : 4,
                assists : 7,
                steals : 7,
                blocks : 15,
                slamDunks : 10
            },
            "DeSagna Diop" :{
                number : 2,
                shoe : 14,
                points : 24,
                rebounds : 12,
                assists : 12,
                steals : 4,
                blocks : 5,
                slamDunks : 5
            },
            "Ben Gordon" :{
                number : 8,
                shoe : 15,
                points : 33,
                rebounds : 3,
                assists : 2,
                steals : 1,
                blocks : 1,
                slamDunks : 0
            },
            "Brendan Haywood" :{
                number : 33,
                shoe : 15,
                points : 6,
                rebounds : 12,
                assists : 12,
                steals : 22,
                blocks : 5,
                slamDunks : 12
            },
        },
    },
}
    return obj
}

console.log(gameObject())

function numPointsScored(name){
    
    if(gameObject.home.players[name]){
        return gameObject().home.players[name].points
    }
    else if(gameObject().away.players[name]){
        return gameObject().away.players[name].points
    }
    else{
        return false
    }
}


function shoeSize(name){
    if(gameObject().home.players[name]){
        return gameObject().home.players[name].shoeSize
    }
    else if(gameObject().away.players[name]){
        return gameObject().away.players[name].shoeSize
    }
    else{
        return false
    }
}

function teamColors(teamName){
    if(gameObject().home.teamName === teamName){
        return gameObject().home.colors
    }
    else if(gameObject().away.teamName === teamName){
        return gameObject().away.colors
    }
    else{
        return false
    }
}

function teamNames(){
    let teams = [gameObject().home.teamName,gameObject().away.teamName]

    return teams
}


function playerNumbers(teamName){
    let jerseyNumbers = []

    if(gameObject().home.teamName === teamName){
        for(let player in gameObject().home.players){
            console.log(player)
            jerseyNumbers.push(gameObject().home.players[player].number)
        }
    }else{
        for(let player in gameObject().away.players){
            jerseyNumbers.push(gameObject().away.players[player].number)
        }
    }
    return jerseyNumbers
}

function playerStats(playerName){
    let object = gameObject();
        for(let team in object){
            let players = object[team].players
            if(players[playerName]){
                return players[playerName]
            }
        }
        return "Player not found"
}

console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
  let object = gameObject();
  let shoeSize = 0;

  let playerWithLargestShoeSize = {};
  let playerName = "";

  for (let player in object.home.players) {
    if (object.home.players[player].shoe > shoeSize) {
      shoeSize = object.home.players[player].shoe;
      playerWithLargestShoeSize = object.home.players[player];
      playerName = player;
    }
    
  }

  for (let player in object.away.players) {
    if (object.away.players[player].shoe > shoeSize) {
      shoeSize = object.away.players[player].shoe;
      playerWithLargestShoeSize = object.away.players[player];
      playerName = player;
    }
    
  }

  return {
    [playerName]: playerWithLargestShoeSize,
  };
};
