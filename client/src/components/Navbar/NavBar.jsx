/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/order */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import { Nav, LinkCss, Logo, Menu, Item } from '../../styles/navBarStyles';
import { Route, Switch, Link } from 'react-router-dom';
// import { Nav, LinkCss, Logo, Menu, Item } from '../styles/navBarStyles';
// import GoogleButton from 'react-google-button';
import Search from '../Pages/Search.jsx';
// import FavoriteTrails from './FavoriteTrails.jsx';
import Home from '../Pages/HomeScreen.jsx';
import Map from '../Pages/Map.jsx';
import Login from '../Pages/Login.jsx';
import ActivityLog from '../Pages/ActivityLog/ActivityLog.jsx';
import Weather from '../Pages/Weather.jsx';
import SpeciesSearch from '../Pages/SpeciesSearch.jsx';
import Ratings from '../Pages/Ratings.jsx';


const Navbar = ({
  searchResults,
  loginUser,
  favorites,
  addFavorite,
  removeFavorite,
  updateSearchResults,
  position,
  updatePosition,
  logoutUser,
  user,
  events,
  register,
  unregister,
  addEvent,
  removeEvent,
  showAlert,
  setShowAlert,
  toggleSearch,
  isSearchVisible,
  updateEvents,
  showSRAlert,
  setShowSRAlert,
  showEventAlert,
  setShowEventAlert,
}) => (
  <div>
    <div>
      {/* used bootstrap to create responsive navbar, the styled
      components worked perfectly with the structure bootstrap requires
      hover over the component to see what the actual html element is */}
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <Logo as={Link} to="/" style={{ fontsize: '40px' }}>
              Trails
            </Logo>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user && (
                <>
                  <Item className="nav-item">
                    <LinkCss as={Link} to="/" className="nav-link">
                      Home
                    </LinkCss>
                  </Item>
                  <Item className="nav-item">
                    <LinkCss as={Link} to="/search" className="nav-link">
                      Search
                    </LinkCss>
                  </Item>
                  <Item className="nav-item">
                    <LinkCss as={Link} to="/favorite" className="nav-link">
                      Favorite Trails
                    </LinkCss>
                  </Item>
                  <Item className="nav-item">
                    <LinkCss
                      as={Link}
                      to="/events"
                      className="nav-link"
                      onClick={updateEvents}
                    >
                      Events
                    </LinkCss>
                  </Item>
                  {/* <Item className="nav-item">
                    <LinkCss as={Link} to="/species" className="nav-link">
                      Search Species
                    </LinkCss>
                  </Item> */}
                  <Item className="nav-item">
                  <LinkCss as={Link} to="/weather" className="nav-link">
                    Weather
                  </LinkCss>
                  </Item>

                  <Item className="nav-item">
                    <LinkCss
                      as={Link}
                      to="/activity"
                      className="nav-link"
                    >
                      Log
                    </LinkCss>
                  </Item>
                  <Item className="nav-item">
                    <LinkCss
                      as={Link}
                      to="/ratings"
                      className="nav-link"
                    >
                      Trail Ratings
                    </LinkCss>
                  </Item>
                </>
              )}
              <Item className="nav-item">
                <LinkCss as={Link} to="/" className="nav-link">
                  <Login
                    loginUser={loginUser}
                    logoutUser={logoutUser}
                    user={user}
                  />
                </LinkCss>
              </Item>
            </Menu>
          </div>
        </div>
      </Nav>
    </div>
    <div>
      <Switch>
        <Route path="/search">
          <>
            {showSRAlert && (
              <div
                className="alert alert-danger"
                role="alert"
                onClick={() => setShowSRAlert(false)}
                style={{ margin: 0 }}
              >
                No search results.
              </div>
            )}
            {showEventAlert && (
              <div
                className="alert alert-danger"
                role="alert"
                onClick={() => setShowEventAlert(false)}
                style={{ margin: 0 }}
              >
                Event time must be in the future.
              </div>
            )}
            <Search
              updateSearchResults={updateSearchResults}
              position={position}
              updatePosition={updatePosition}
              isSearchVisible={isSearchVisible}
              setShowSRAlert={setShowSRAlert}
            />
            {/* different props are passed into each map component
            conditional rendering in the map component is based
            on if that instance of map contains a particular prop
            for example, only the search map contains add favorite
            so only the search map will display an add favorite button */}
            <Map
              results={searchResults}
              addFavorite={addFavorite}
              position={position}
              addEvent={addEvent}
              removeEvent={removeEvent}
              toggleSearch={toggleSearch}
            />
          </>
        </Route>
        <Route path="/favorite">
          <>
            {showEventAlert && (
              <div
                class="alert alert-danger"
                role="alert"
                onClick={() => setShowEventAlert(false)}
                style={{ margin: 0 }}
              >
                Event time must be in the future.
              </div>
            )}
            <Map
              results={favorites}
              removeFavorite={removeFavorite}
              position={position}
              register={register}
              unregister={unregister}
              addEvent={addEvent}
              removeEvent={removeEvent}
            />
          </>
        </Route>
        <Route path="/events">
          <>
            {/* bootstrap alter that shows when user tries to register or unregister
          to an event that another user has deleted */}
            {showAlert && (
              <div
                class="alert alert-danger"
                role="alert"
                onClick={() => setShowAlert(false)}
                style={{ margin: 0 }}
              >
                This event no longer exists.
              </div>
            )}
            <Map
              results={events}
              position={position}
              register={register}
              unregister={unregister}
              addEvent={addEvent}
              removeEvent={removeEvent}
              events={events}
              user={user}
              updateEvents={updateEvents}
            />
          </>
        </Route>
        <Route path="/activity">
          <>
            <ActivityLog
              results={events}
              position={position}
              register={register}
              unregister={unregister}
              addEvent={addEvent}
              removeEvent={removeEvent}
              events={events}
              user={user}
              updateEvents={updateEvents}
            />
          </>
        </Route>
        <Route path="/weather">
          <>
            <Weather
              user={user}
            />
          </>
        </Route>
        <Route path="/species">
          <>
            <SpeciesSearch
              user={user}
            />
          </>
        </Route>
        <Route path="/ratings">
          <>
            <Ratings
              user={user}
              favorites={favorites}
            />
          </>
        </Route>
        <Route exact path="/">
          <Home loginUser={loginUser} logoutUser={logoutUser} user={user} />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Navbar;
