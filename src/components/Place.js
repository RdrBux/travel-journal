import React from 'react';

export default function Place(props) {
  console.log(props);
  return (
    <div className="place--container">
      <div className="place--columns">
        <img className="place--img" src={props.imageUrl} alt={props.title} />
        <div className="place--content">
          <div className="place--location">
            <img
              className="place--icon"
              src="../img/location.svg"
              alt="location"
            />
            <h3 className="place--country">{props.location}</h3>
            <a className="place--maps-link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className="place--name">{props.title}</h1>
          <h4 className="place--date">{`${props.startDate} - ${props.endDate}`}</h4>
          <p className="place--description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
