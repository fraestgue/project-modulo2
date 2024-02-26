import React, { useState, useEffect } from "react";
import SearchSale from "../componets/SearchSale";

import SalesForm from "../componets/SalesForm";

function NewSalesPage() {
  const [gameOnSale, setGameOnSale] = useState(null);
  const [searchGames, setSearchGames] = useState(null);
  const [isAddFormShowing, setIsAddFormShowing] = useState(false)

 

  return (
    <div>
      <SearchSale setSearchGames={setSearchGames} />
      {searchGames === null ? (
        <h2>Busca el juego a vender</h2>
      ) : (
        <div>
          {searchGames.map((eachGame) => {
            return (
              <div key={eachGame.id} onClick={() => {
                setIsAddFormShowing(true)
                setGameOnSale(eachGame)
                setSearchGames([])
              }}>
                <img
                  src={eachGame.background_image}
                  alt="juego"
                  width={"120px"}
                />
                <h2>{eachGame.name}</h2>
              </div>
            );
          })}
        </div>
      )}
      {isAddFormShowing === true && <SalesForm gameOnSale={gameOnSale} />} 
    </div>
  );
}

export default NewSalesPage;
