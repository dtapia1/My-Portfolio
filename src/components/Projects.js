import React from 'react';
import { Grid, Row, Col, Clearfix }  from 'react-bootstrap';
import MovieCard from './MovieCard';

const Projects = () => (
  <div className="projects">
    <Grid className="text-cente">
      <h2 className="header">Personal Projects</h2>
      <Row>
        <Col sm={6} lg={4}>
          <MovieCard
            id="myMovies"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/my-movies.png"
            cardTitle='My Movies'
            cardText = 'A movie database application built with React, Firebase and TheMovieDb API.'
            refLink = 'https://github.com/dtapia1/My-Movies'
            linkClass='card-link'
            altLinkName='GitHub logo'
            linkText='Github'
            skills={['ReactJS', 'Firebase', 'ES6', 'Bootstrap 4', 'NodeJS', 'npm', 'Grunt']}
            cardDemo={true}
            cardDemoLink={'https://my-movies-48e3a.firebaseapp.com/'}
          />
        </Col>

        <Col sm={6} lg={4}>
          <MovieCard
            id="myWeather"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/myWeatherLogo.png"
            cardTitle='My Weather'
            cardText = 'A simple weather app built for Android using Dark Sky API. Displays current, daily, and hourly forecast details.'
            refLink = 'https://github.com/dtapia1/WeatherApp'
            altLinkName='GitHub logo'
            linkText='Github'
            skills={['Android', 'Java', 'XML', 'Dark Sky API', 'ButterKnife']}
            cardDemo={false}
            badge={true}
            badgeAltName='Google Play logo'
            badgeImageSrc='https://s3.amazonaws.com/daniel-tapia.com/images/google-play-badge.svg'
            badgeRefLink='https://play.google.com/store/apps/details?id=com.dtapia.clearskies'
          />
        </Col>
        <Clearfix visibleMdBlock></Clearfix>

      </Row>
      <hr/>
    </Grid>



    <Grid>
      <h2 className="header">Training Projects</h2>
      <Row>
        <Col sm={6} lg={4}>
          <MovieCard
            id="githubBattle"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/github-battle.png"
            cardTitle='Github Battle'
            cardText = 'A GitHub application that allows you to battle friends based on GitHub score. You can also view a list of the most popular GitHub repositories.'
            refLink = 'https://github.com/dtapia1/GitHub-Battle'
            altLinkName='GitHub logo'
            linkText='Github'
            skills={['ReactJS', 'JavaScript', 'HTML', 'NodeJS', 'npm']}
            cardDemo={true}
            cardDemoLink={'https://github-battle-4245c.firebaseapp.com/'}
          />
        </Col>

        <Col sm={6} lg={4}>
          <MovieCard
            id="swansonQuotes"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/ron_swanson_card.png"
            cardTitle='Swanson Quotes'
            cardText = {'A hilarious quote generator which displays random quotes by everyone\'s favorite hero, Ron Swanson.'}
            refLink = 'http://codepen.io/dtapia1/pen/NjLdyx'
            altLinkName='Codepen logo'
            linkText='Codepen'
            skills={['JavaScript', 'AJAX', 'HTML', 'CSS']}
            cardDemo={false}
          />
        </Col>
        <Col sm={6} lg={4}>
          <MovieCard
            id="breakout"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/breakout-logo.png"
            cardTitle='Breakout'
            cardText = 'A fun variation of the classic Breakout game for Android. A final project for my Android Game Development course.'
            refLink = 'https://github.com/dtapia1/Breakout'
            altLinkName='GitHub logo'
            linkText='Github'
            skills={['Android', 'Java', 'XML']}
            cardDemo={false}
          />
        </Col>
        <Col sm={6} lg={4}>
          <MovieCard
            id="lightsOut"
            imageSrc="https://s3.amazonaws.com/daniel-tapia.com/images/lights-out-logo.png"
            cardTitle='Lights Out!'
            cardText = 'A puzzle game based on the original "Lights Out" game. This was developed for Android as part of my Android Game Development course.'
            refLink = 'https://github.com/dtapia1/Lights-Out/tree/1.0'
            altLinkName='GitHub logo'
            linkText='Github'
            skills={['Android', 'Java', 'XML']}
            cardDemo={false}
          />
        </Col>
        <Clearfix visibleMdBlock></Clearfix>
      </Row>
    </Grid>
  </div>
);

export default Projects;
