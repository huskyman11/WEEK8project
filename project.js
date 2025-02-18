/* Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements. */

//starting menu

//Football Team Roster Tool
//players array
//player class 
//Number and position

//need to build in the MENU functions (add player to list, view list, delete player)+

class Player{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
    }
    
        //building the menu and the start of the players array below//

class Menu{
    constructor(){
        this.players=[];
        }

        //adding players to the players list //

    addPlayer(){ 
    let playerName = prompt("Enter player name:");
    let playerPosition = prompt("Enter player position:");
    this.players.push(new Player( playerName , playerPosition));
    }
    
//had issues with "unexpected identifier" on the declared variables of ath1 and 2//

// let ath2= new Player( "Deion Sanders", "CB");
// let ath1= new Player("Travis Hunter", "DB/WR");
// console.log(ath2);
// console.log(ath1);


//deleting a player from the list//

    deletePlayer(){
 let playerIndex = prompt("Enter player roster spot to delete:");
 this.players.splice(playerIndex, 1);
}

//the coding for showing available players//

    showPlayers(){
    let showPlayerList = '';
    for (let i =0; i < this.players.length; i++){
       showPlayerList += `
       ${i}) ${this.players[i].name} ${this.players[i].position}`
        }

    alert(showPlayerList);

    alert(`
    Team Roster:    
    
    ${showPlayerList}
    `);
    }
    showMenu(){
        return prompt(`     
         Menu:        
        ------------------
        0) Exit
        1) Add a Player
        2) Delete a Player
        3) Show Player List
        `);
        }

        //starting the menu options on the popup//
    
        start (){
            let selection = this.showMenu();
   
            while(selection != 0){
            switch(selection){
               case "1": this.addPlayer();
               break;
   
               case "2": this.deletePlayer();
               break;
   //check showplayers vs showplayerslist//
               case "3": this.showPlayers();
               break;
   
               default: selection = 0;
             }
             selection = this.showMenu();
             }
             alert("Exiting Menu--GO COYOTES!!");
        }

    }

let menu = new Menu();

    // menu.addPlayer();
    // menu.showPlayers();
    // menu.deletePlayer();
    // menu.showPlayers();
    
    //prompts the start of the menu//
   menu.start();