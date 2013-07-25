(function(){

  window.Game = window.Game || {};

  window.Game.Board = function( row, column ) {

    this._positions = [];
 
    for (var i = 0; i < row ; i++) {        
      this._positions[i] = [];
      for (var j = 0; j < column; j++) {
        if ( document.getElementById( 'pos' + row +'-' + column ) )
          this._positions[i].push( { element : document.getElementById( 'pos' + row +'-' + column ) } );                  
        else
          throw { name: 'elementNonexistent', message: 'Elemento não encontrado.' };            
      };
    }
    
  };

  var Board = window.Game.Board;

  Board.prototype.getPosition = function( row, column ) {

    var position = this._positions[row][column];

    if ( position ) {
      return position;
    } else {
      throw { name: 'elementNonexistent', message: 'Elemento não encontrado.'};
    };
  };


})();

