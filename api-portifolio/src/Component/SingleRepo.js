import React from "react";
import { useParams } from "react-router-dom";

function SingleRepo() {
  let { id } = useParams();

  // Fetch and display repo details based on `id`

  return (
    <div>
      {/* Render repo details */}
    </div>
  );
}

export default SingleRepo;
