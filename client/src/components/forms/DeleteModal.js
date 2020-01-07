import React from "react";
import axios from "axios";

const DeleteModal = ({ myRecipe }) => {
  let DB = process.env.REACT_APP_DB || "http://localhost:8000";
  let id = Number(window.location.pathname.split("/")[2]);
  const closeButton = document.querySelector(".closeDelete");

  const deleteRecipe = e => {
    e.preventDefault();
    console.log("id is: ", id);
    axios.delete(`${DB}/recipes/delete/${myRecipe.id}`).then(response => {});
    window.location.href = "/my-recipes";
  };

  return (
    <div
      class="delete-modal modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          {/* <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">
              Delete Recipe
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> */}
          <div class="modal-body">Are you sure you want to delete this?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary closeDelete" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-danger" onClick={deleteRecipe}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
