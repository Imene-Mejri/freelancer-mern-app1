import React from "react";
import { useDispatch } from "react-redux";
import {Delete } from "@material-ui/icons";
import { Card, ListGroup, Button } from "react-bootstrap";
import Editproject from "./editProject";
import { deleteHandler } from "../../../redux/action/project-action";
export default function Project({ project }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Card.Header><h3>Createur de projet:{project.creator}</h3></Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h4>Titre:{project.title}</h4>
            <h5>Date de debut:{project.dateStart}</h5>
            <h5>Date de fin:{project.dateEnd}</h5>
            <h5>Prix:{project.price}</h5>
            <h5>Description:{project.description}</h5>
            <h5>Link de project:{project.projectLink}</h5>
            <div className="editBtns">
              <Delete 
                variant="outline-secondary"
                onClick={() => dispatch(deleteHandler(project._id))}
              >
                Delete
              </Delete>
              <Editproject  project={project} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
