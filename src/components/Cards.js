import React, { Component } from 'react';
import ReactDOM from "react-dom";
var PropTypes = require('prop-types');

function Cards (props) {
    return (
      <div className={props.class}>
        <CardTop
          imageSrc={props.imageSrc}
        />
        <CardBlock
          cardTitle={props.cardTitle}
          cardText={props.cardText}
          cardDemo={props.cardDemo}
          cardDemoLink={props.cardDemoLink}
          skills={props.skills}
        />
        <hr className='my-0'/>
        <CardLink
          refLink={props.refLink}
          linkClass={props.linkClass}
          imageLinkSrc={props.imageLinkSrc}
          altLinkName={props.altLinkName}
          isImageLogo = {props.isImageLogo}
          isFontLogo = {props.isFontLogo}
          linkText={props.linkText}
        />
			</div>
    )
}

Cards.PropTypes = {
  imageSrc: PropTypes.string.isrequired,
  cardTitle: PropTypes.string.isrequired,
  cardText: PropTypes.string.isrequired,
  skills: PropTypes.array.isrequired,
  cardDemoLink: PropTypes.bool.isrequired
}

function CardTop (props) {
  return (
    <div>
      <img className ='card-img img-responsive'
        src={props.imageSrc}
        alt={props.cardTitle}>
      </img>
    </div>
  )
}

Cards.PropTypes = {
  imageSrc: PropTypes.string.isrequired,
  cardTitle: PropTypes.string.isrequired
}

function CardBlock (props) {
  return (
    <div className="card-block">
      <h6 className='card-title'>{props.cardTitle}</h6>
      <p className="card-text">{props.cardText}</p>
      {props.cardDemo
        ? <p>
            Check it out <span><a target="blank_target" href={props.cardDemoLink}>here</a></span>.
          </p>
        : null
      }
      <CardSkills skills={props.skills} />
    </div>
  )
}

CardBlock.PropTypes = {
  cardTitle: PropTypes.string.isrequired,
  cardText: PropTypes.string.isrequired,
  skills: PropTypes.array.isrequired,
  cardDemoLink: PropTypes.bool.isrequired
}

function CardLink (props) {
  return (
    <div>
      <a
        className={props.anchorClass}
        target="blank_target"
        href={props.refLink}>
          {props.isImageLogo
            ? <img
                className={props.linkClass}
                src={props.imageLinkSrc}
                alt={props.altLinkName}>
              </img>

            : <i className={props.linkClass}> {props.linkText}</i>
          }
			</a>
    </div>
  )
}

CardLink.PropTypes = {
  anchorClass: PropTypes.string.isrequired,
  refLink: PropTypes.string.isrequired,
  imageLinkSrc: PropTypes.string,
  linkClass: PropTypes.string.isrequired,
  altLinkName: PropTypes.string.isrequired,
  isImageLogo: PropTypes.bool,
  isFontLogo: PropTypes.bool,
  linkText: PropTypes.string
}

function CardSkills (props) {
  var skills = props.skills;
  return (
    <ul className='card-skills'>
      {skills.map((skill) => {
        return (
          <li
            key={skill}
            className='skills-text'>
            {skill}
          </li>
        )
      })}
    </ul>
  )
}

CardSkills.PropTypes = {
  skills: PropTypes.array.isrequired
}

export default Cards;
