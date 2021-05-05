// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateType = () => {
  const types = [ 'taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant' ];

  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};

const generateDestination = () => {
  const destinations = ['Chamonix', 'Amsterdam', 'Geneva', 'Ottawa', 'Hong-Kong' ];

  const randomIndex = getRandomInteger(0, destinations.length - 1);

  return destinations[randomIndex];
};

const generateOffers = ( type ) => {
  let offer;

  switch ( type ) {
    case 'taxi':
      offer = [
        { title: 'Order Uber', price: 20 },
        { title: 'Upgrade to a business class', price: 120 }
      ];
      break;
    case 'bus':
      offer = [
        { title: 'Choose meal', price: 180 },
        { title: 'Upgrade to comfort class', price: 50 }
      ];
      break;
    case 'flight':
      offer = [
        { title: 'Add luggage', price: 50 },
        { title: 'Switch to comfort', price: 80 }
      ];
      break;
    case 'drive':
      offer = [
        { title: 'Rent a car', price: 200 }
      ];
      break;
    case 'check-in':
      offer = [
        { title: 'Add breakfast', price: 50 }
      ];
      break;
    case 'sightseeing':
      offer = [
        { title: 'Book tickets', price: 40 },
        { title: 'Lunch in city', price: 30 }
      ];
      break;
    default:
      offer = [];
  };

  return offer;
};

// num - коль-во предложений
const generateDescription = ( ) => {
  const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

  let sentences = str.split('.');
  let description = '';

  const num = getRandomInteger( 1, 5 );

  for ( let i = 0; i < num; i++ ) {
    if ( !description.length ) {
      description += description.concat( '', sentences.splice(getRandomInteger(0, sentences.length - 1), 1)[0]);
    } else {
      description += description.concat( '. ', sentences.splice(getRandomInteger(0, sentences.length - 1), 1)[0]);
    };
  };

  return description;
};

const formatDate = (date) => {
  let newDate = `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}T${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}.${date.getMilliseconds()}Z`;

  return newDate;
};

export const generatePoint = ( pointId ) => {
  let pointType = generateType();

  return {
    base_price: getRandomInteger( 5, 15 ) * 100,
    date_from: formatDate(new Date()),
    date_to: formatDate(new Date()),
    destination: {
      description: generateDescription(),
      name: generateDestination(),
      pictures: [
        {
          src: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
          desc: "Generic description"
        }
      ]
    },
    id: pointId,
    is_favorite: false,
    offers: generateOffers( pointType ),
    type: pointType
  };
};