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

const getDateTime = ( date, time ) => {
  if ( time ) {
    return `${date.getFullYear()}-${date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth()}-${date.getDate() > 10 ? date.getDate() : '0' + date.getDate()}T${date.getHours() > 10 ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()}`;
  } else {
    return `${date.getFullYear()}-${date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth()}-${date.getDate() > 10 ? date.getDate() : '0' + date.getDate()}`;
  }
};

const getTime = ( date ) => {
  return `${date.getHours() > 10 ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()}`;
};

const createOfferMarkup = ( point ) => {
  let markup = '';
  for ( let i = 0; i < point.offers.length; i++ ) {
    markup += `
      <li class="event__offer">
        <span class="event__offer-title">${point.offers[i].title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${point.offers[i].price}</span>
      </li>
    `;
  }

  return markup;
};

const capitalize = (str) => { return str[0].toUpperCase() + str.slice(1); };

export const createTripEventTemplate = ( point ) => {
  return `
    <div class="event">
      <time class="event__date" datetime="${getDateTime(point.date_from)}">${formatDate(point.date_from)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${capitalize(point.type)} ${point.destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${getDateTime(point.date_from, true)}">${getTime(point.date_from)}</time>
          &mdash;
          <time class="event__end-time" datetime="${getDateTime(point.date_to, true)}">${getTime(point.date_to)}</time>
        </p>
        <p class="event__duration">${new Date(point.date_to - point.date_from).getMinutes()}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${point.base_price}</span>
      </p>
      ${ point.offers.length ? `
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOfferMarkup( point )}
      </ul>
      ` : ''}
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  `;
};
