import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function Tile({ hogs }) {
  const [hogFacts, setHogFacts] = useState({});
  const [showHog, setShowHog] = useState({});

  function handleClick(hogName) {
    setHogFacts((prevHogFacts) => ({
      ...prevHogFacts,
      [hogName]: !prevHogFacts[hogName],
    }));
  }
  function handleHideHog(hogName) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to view this champion hog again!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Hide it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        setShowHog((prevShowHog) => ({
          ...prevShowHog,
          [hogName]: !prevShowHog[hogName],
        }));
      }
    });
  }
  
  return (
    <div className="ui grid container">
      {hogs.map((hog) => {
        const isShowingFacts = hogFacts[hog.name] || false;

        return (
          <div key={hog.name} className="pigTile" style={{ display: showHog[hog.name] ? "none" : "block" }}>
            <h3>{hog.name}</h3>
            <img
              className="hog-image"
              src={hog.image}
              alt="this hog"
              onClick={() => handleClick(hog.name)}
            />
            <div>
            <button className="hoggyText"onClick={()=>handleHideHog(hog.name)}>
              {showHog ? (
                <>
                  Hide Hog <FaEyeSlash />
                </>
              ) : (
                <>
                  Show Hog <FaEye />
                </>
              )}
            </button>
            </div>
            {isShowingFacts && (
              <ul className="hoggyText">
                <li>
                  <span>Specialty: </span>
                  {hog.specialty}
                </li>
                <li>
                  <span>Weight:</span> {hog.weight}
                </li>
                <li>
                  <span>Greased: </span>
                  {hog.greased ? "Yes" : "No"}
                </li>
                <li className="achievementText">
                  <span>Highest Medal Achieved:</span>{" "}
                  {hog["highest medal achieved"]}
                </li>
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Tile;
