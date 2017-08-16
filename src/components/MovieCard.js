import React from 'react';
var PropTypes = require('prop-types');

const MovieCard = (props) => (
  <div className="card project-card hoverable">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.imageSrc} alt="project thumbnail"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.cardTitle}<i className="material-icons right">more_vert</i></span>
    </div>

    <div className="card-action">
      <a target="blank_target" href={props.refLink}>
         { props.linkText }
  		</a>
    </div>

    <CardReveal
      id={props.id}
      cardRevealTitle={props.cardTitle}
      cardRevealText={props.cardText}
      cardRevealDemo={props.cardDemo}
      cardRevealDemoLink={props.cardDemoLink}
      cardRevealSkills={props.skills}
      cardRevealBadge={props.badge}
      cardRevealBadgeAltName={props.badgeAltName}
      cardRevealBadgeImageSrc={props.badgeImageSrc}
      cardRevealBadgeLinkRef={props.badgeRefLink}
    />
  </div>
);

MovieCard.PropTypes = {
  imageSrc: PropTypes.string.isrequired,
  cardTitle: PropTypes.string.isrequired,
  cardText: PropTypes.string.isrequired,
  skills: PropTypes.array.isrequired,
  cardDemoLink: PropTypes.bool.isrequired,
}

const CardReveal = (props) => (
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">{props.cardRevealTitle}<i className="material-icons right">close</i></span>
    <p>{props.cardRevealText}</p>
    {props.cardRevealDemo
      ? <p>
          Check it out <span><a target="blank_target" href={props.cardRevealDemoLink}>here</a></span>.
        </p>
      : null
    }
    <CardSkills2
      skills={props.cardRevealSkills}
      id={props.id}
    />

    {props.cardRevealBadge
      ?
        <div className="card-action text-center ">
          <a href={props.cardRevealBadgeLinkRef}>
            <img className='google-badge' src={props.cardRevealBadgeImageSrc} alt={props.cardRevealBadgeAltName}></img>
          </a>
        </div>
        : null}
  </div>
);

const CardSkills2 = (props) => (
  <div>
    <ul className="collection main-text">
      <li className="collection-header">
        <i className="fa fa-wrench btn" data-toggle="collapse" data-target={`#${props.id}`} aria-expanded="false" aria-controls={props.id} aria-hidden="true"></i>
      </li>
      <div className="collapse collapse-list" id={props.id}>
        {props.skills.map((skill) => {
          return (
            <li
              key={skill}
              className='collection-item'>
              {skill}
            </li>
          )
        })}
      </div>
    </ul>
  </div>
);

CardReveal.PropTypes = {
  cardRevealTitle: PropTypes.string.isrequired,
  cardRevealText: PropTypes.string.isrequired,
  cardRevealSkills: PropTypes.array.isrequired,
  cardRevealDemo: PropTypes.bool.isrequired,
  cardRevealDemoLink: PropTypes.bool.isrequired,
}

const CardSkills = (props) => (
  <ul className='card-skill'>
    {props.skills.map((skill) => {
      return (
        <li
          key={skill}
          className='skills-text'>
          {skill}
        </li>
      )
    })}
  </ul>
);

CardSkills.PropTypes = {
  skills: PropTypes.array.isrequired
}

const CardLink = (props) => (
  <div className="card-action">
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

          : props.linkText
        }
		</a>
  </div>
);

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

export default MovieCard;
