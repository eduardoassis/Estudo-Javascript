(function(){

  window.Game = window.Game || {};  

  Number.isEven = function( number ) {
    return number % 2 === 0
  };

  Number.isOdd = function( number ) {
    return number % 2 !== 0
  }; 




  Game.BoardPosition = function( x, y ) {
    this._row = x;
    this._column = y;
    this._element = document.getElementById( 'pos' + this._row +'-' + this._column );    
  };


  var BoardPosition = Game.BoardPosition;

  BoardPosition.prototype.getRow = function(){
    return this._row;
  };

  BoardPosition.prototype.getColumn = function() {
    return this._column;
  };

  BoardPosition.prototype.getElement = function() {
    return this._element;
  };   

  BoardPosition.prototype.isBlack = function() {
    return ( Number.isEven( this._row ) && Number.isOdd( this._column ) || Number.isOdd( this._row ) && Number.isEven( this._column ) );
  };    

  Game.Board = function( row, column ) {

    this._positions = [];
 
    for (var i = 0; i < row ; i++) {        
      this._positions[i] = [];
      for (var j = 0; j < column; j++) {
        if ( document.getElementById( 'pos' + i +'-' + j ) )
          this._positions[i].push( new window.Game.BoardPosition( i, j ) );                  
        else
          throw { name: 'elementNonexistent', message: 'Elemento não encontrado.' };            
      };
    }
    
  };  

  var Board = Game.Board;

  Board.prototype.getPosition = function( row, column ) {

    var position = this._positions[row][column];

    if ( position ) {
      return position;
    } else {
      throw { name: 'elementNonexistent', message: 'Elemento não encontrado.'};
    };
  };

})();

