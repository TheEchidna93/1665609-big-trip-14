const formatDate = ( date ) => {
  let newDate = '';
  const month = date.getMonth();
  const day = date.getDate();
  switch (month) {
    case 1:
      newDate = 'JAN';
      break;
    case 2:
      newDate = 'FEB';
      break;
    case 3:
      newDate = 'MAR';
      break;
    case 4:
      newDate = 'APR';
      break;
    case 5:
      newDate = 'MAY';
      break;
    case 6:
      newDate = 'JUN';
      break;
    case 7:
      newDate = 'JUL';
      break;
    case 8:
      newDate = 'AUG';
      break;
    case 9:
      newDate = 'SEP';
      break;
    case 10:
      newDate = 'OCT';
      break;
    case 11:
      newDate = 'NOV';
      break;
    case 12:
      newDate = 'DEC';
      break;
    default:
      newDate = 'MONTH';
  }
  newDate = newDate + ` ${day > 10 ? day : '0' + day}`;

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

      <p class="trip-info__dates">${formatDate(points[0].date_from)}&nbsp;&mdash;&nbsp;${formatDate(points[points.length-1].date_to).slice(0, 3) === formatDate(points[0].date_from).slice(0, 3) ? formatDate(points[points.length-1].date_to).slice(4, 6) : formatDate(points[points.length-1].date_to)}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getCost(points)}</span>
    </p>
  </section>
  `;
};
