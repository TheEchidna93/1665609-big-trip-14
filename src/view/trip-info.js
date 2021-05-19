import {Utils} from '../utils.js';

const formatDates = ( dateFrom, dateTo ) => {
  let newDate = '';

  if ( dateFrom.getMonth() !== dateTo.getMonth() ) {
    newDate = `${Utils.formatDate( dateFrom )}&nbsp;&mdash;&nbsp;${Utils.formatDate( dateTo )}`;
  } else {
    newDate = `${Utils.formatDate( dateFrom )}&nbsp;&mdash;&nbsp;${Utils.prefixByZero( dateTo.getDate() )}`;
  }

  return newDate;
};

const getRoute = (points) => {
  const route = [];
  let routeStr = '';
  route.push( points[0].destination.name );

  points.forEach( (point) => {
    let hasDestination = false;
    for ( let i = 0; i < route.length; i++ ) {
      if ( point.destination.name === route[i] ) {
        hasDestination = true;
        break;
      }
    }
    if (!hasDestination) {
      route.push( point.destination.name );
    }
  });

  routeStr += route[0];
  for ( let i = 1; i < route.length; i++ ) {
    routeStr += ` &mdash; ${route[i]}`;
  }

  return routeStr;
};

const getCost = (points) => {
  let cost = 0;

  points.forEach( (point) => {
    cost += point.base_price;
  });

  return cost;
};

export const createTripInfoTemplate = (points) => {
  return `
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${getRoute(points)}</h1>

      <p class="trip-info__dates">${formatDates(points[0].date_from, points[points.length-1].date_to)}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getCost(points)}</span>
    </p>
  </section>
  `;
};
