import React from "react";
import Typography from "@material-ui/core/Typography";

const SQL2 = () => (
  <div>
    <Typography variant="h6" component="h2" gutterBottom>
      {
        "Write based on above, a SQL query to get all players that have games of type “SLOT” as their favorite games."
      }
    </Typography>
    <Typography variant="h6" component="h2" gutterBottom>
      {
        "Based on the described database on the previous tab, the query would be:"
      }
      <br />
      {
        "SELECT P.id FROM Game AS G INNER JOIN Player AS P ON G.FavoriteGame = P.idGame WHERE G.Type = 'SLOT'"
      }
    </Typography>
  </div>
);

export default SQL2;
