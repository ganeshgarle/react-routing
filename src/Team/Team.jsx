import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classNames from "classnames";
import { CustomModal } from "../component";

const Team = (props) => {
  const navigateTo = useNavigate();
  const teamArray = [
    {
      id: 1,
      teamName: "Test Team 1",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 2,
      teamName: "Test Team 2",
      mermber: ["abc", "xyz", "pqr", "er"],
    },

    {
      id: 3,
      teamName: "Test Team 3",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 4,
      teamName: "Test Team 4",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 5,
      teamName: "Test Team 5",
      mermber: ["abc", "xyz", "pqr", "er"],
    },

    {
      id: 6,
      teamName: "Test Team 6",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
  ];
  const [teamList, setTeamList] = useState(teamArray);
  const [show, setShow] = useState(false);
  const [teamDeatils, setTeamDeatils] = useState({});

  return (
    <div>
      <CustomModal
        show={show}
        teamName={teamDeatils?.teamName}
        handleClose={() => setShow(false)}
        handleAction={(teamName) => {
          setTeamList((prevState) =>
            prevState.filter((el) => el.teamName != teamName)
          );
          setShow(false);
        }}
      />

      <div className="component">
        <h1>Team list</h1>
        <Button
          onClick={() => navigateTo(`/add-team`)}
          variant="primary"
          className="ml-2"
        >
          Add Team
        </Button>
      </div>
      <div className="teams">
        {teamList.map((team) => (
          <div key={team.id} className="mb-3">
            <span>
              <Link to={`/details/${team.id}`}>{team.teamName}</Link>
            </span>
            <Button
              variant="primary"
              className={classNames("ml-2")}
              onClick={() => {
                setTeamDeatils(team);
                setShow(!show);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
