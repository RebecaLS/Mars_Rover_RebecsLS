// Rover Object Goes Here
// ======================
// POR DEFECTO TIENE DIRECCIÓN NORTE
 var rover = {posicionX:0, posicionY:0, direccion:'N', movimientos: [0,0]}
// ======================
//DECLARO FUNCIÓN GIRAR A LA IZQUIERDA
function turnLeft(rover){
  switch(rover.direccion){
    case 'N': 
      rover.direccion = 'W';
    break;
    case 'W': 
      rover.direccion = 'S';
    break;  
    case 'S': 
      rover.direccion = 'E';
    break;
    case 'E': 
      rover.direccion = 'N';
    break;  
  }
  console.log("turnLeft was called!");
}

//DECLARO FUNCIÓN GIRAR A LA DERECHA
function turnRight(rover){
  switch(rover.direccion){
    case 'N': 
      rover.direccion = 'E';
    break;
    case 'E': 
      rover.direccion = 'S';
    break;  
    case 'S': 
      rover.direccion = 'W';
    break;
    case 'W': 
      rover.direccion = 'N';
    break;  
  }
  console.log("turnRight was called!");
}

//DECLARO FUNCIÓN PARA MOVER A ROVER, CONSIDERANDO UNA GRI DE 10 X10
function moveForward(rover){
  switch(rover.direccion){
    case "N": {
      if(rover.posicionY==0){
        console.log("ALTO TE CHOCAS!!!");
      }else{
        rover.posicionY -= 1;
      }
    } 
    break;
    case "W": {
      if(rover.posicionX==0){B
        console.log("ALTO TE CHOCAS!!!");
      }else{
        rover.posicionX -= 1;
      }
    }
    break;
    case "S": {
      if(rover.posicionY == 9){
        console.log("ALTO TE CHOCAS!!!")
      }else{
        rover.posicionY += 1;
      }
    }
    break;
    case "E": {
      if(rover.posicionX ==9){
        console.log("ALTO TE CHOCAS!!!")
      }else{
        rover.posicionX += 1;
      }
    }
    break;
  }

  console.log (rover.posicionX); 
  console.log("moveForward was called")
}

//DECLARO FUNCIÓN CON POSIBLES ÓRDENES
function commands(ordenes){
  //RECORREMOS CON UN FOR CUANTAS LETRAS PUEDE HABER
  for(var i = 0; i < commands.length; i++){
    if(commands[i] == 'l' || commands[i] == 'r' || commands[i] == 'f'){
      switch(ordenes[i]){
        case 'r': 
          turnRight(rover);
        break;
        case 'l': 
          turnLeft(rover);
        break;
        case 'f': 
          moveForward(rover);
        break;
      }
    }else{
      console.log ("ese comando no existe");
    }
  }
  console.log("Final position: x=" + posicionX + " y=" + posicionY + ". Movimientos:" + rover.movimientos);
}
