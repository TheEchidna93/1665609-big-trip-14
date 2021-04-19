import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripTabsTemplate} from './view/trip-tabs.js';
import {createTripFiltersTemplate} from './view/trip-filters.js';
import {createTripSortTemplate} from './view/trip-sort.js';
// import {createAddPointTemplate} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createTripEventTemplate} from './view/trip-event.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripControlsNavElement = document.querySelector('.trip-controls__navigation');
const siteTripControlsFilterElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');
const siteTripEventsList = document.querySelectorAll('.trip-events__item');

render(siteTripMainElement, createTripInfoTemplate(), 'afterbegin');
render(siteTripControlsNavElement, createTripTabsTemplate(), 'beforeend');
render(siteTripControlsFilterElement, createTripFiltersTemplate(), 'beforeend');
render(siteTripEventsElement, createTripSortTemplate(), 'beforeend');

render(siteTripEventsList[0], createEditPointTemplate(), 'beforeend');
for ( let i = 1; i < siteTripEventsList.length; i++ ) {
  render(siteTripEventsList[i], createTripEventTemplate(), 'beforeend');
}
