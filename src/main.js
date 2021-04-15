import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripTabsTemplate} from './view/trip-tabs.js';
import {createTripFiltersTemplate} from './view/trip-filters.js';
import {createTripSortTemplate} from './view/trip-sort.js';
import {createEmptyTripListTemplate} from './view/trip-list-empty.js';
import {createAddPointTemplate} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createTripEventItemTemplate} from './view/trip-event.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteTripControlsNavElement = siteTripMainElement.querySelector('.trip-controls__navigation');
const siteTripControlsFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripMainElement, createTripInfoTemplate(), 'afterbegin');
render(siteTripControlsNavElement, createTripTabsTemplate(), 'beforeend');
render(siteTripControlsFilterElement, createTripFiltersTemplate(), 'beforeend');
render(siteTripEventsElement, createTripSortTemplate(), 'beforeend');
render(siteTripEventsElement, createEmptyTripListTemplate(), 'beforeend');

const siteTripListElement = siteTripEventsElement.querySelector('.trip-events__list');

render(siteTripListElement, createEditPointTemplate(), 'beforeend');

for ( let i = 0; i < 3; i++ ) {
  render(siteTripListElement, createTripEventItemTemplate(), 'beforeend');
};
