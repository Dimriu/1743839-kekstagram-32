// Количество объектов для генерации данных;
const GENERATE_ARRAY = 25; 

// Массив описаний для картинок;
const DESCRIPTIONS_PHOTOS = [
    'интересная фотография',
    'занимательная фотография',
    'редкий снимок',
    'я думаю, что на ней изображено?',
    'давайте рассмотрим изображение внимательнее',
    'передо мной шедевр','мне нравилась эта фотография',
    'передает чувства и эмоции','создает настроение'
];

// Массив комментариев;
const MESSAGES_COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    'В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.',
    'Как можно было поймать такой неудачный момент?!'
];
  
// Массив имен;
const NAMES = [
    'Софья','Анастасия','Виктория','Ксения','Арина','Елизавета','Аделина','Ирина','Елена','Полина', 'Дарья','Наталья',
    'Светлана','Вера','Надежда','Галина', 'Любовь','Александра','Мария','Анна','Ангелина', 'Марина','Екатерина','Людмила','Татьяна',
    'Артём','Александр', 'Роман', 'Евгений','Иван','Максим', 'Денис','Алексей','Дмитрий','Даниил','Сергей', 'Николай',
    'Константин','Никита','Михаил','Борис', 'Виктор','Геннадий','Вячеслав','Владимир','Андрей', 'Анатолий','Илья','Кирилл','Олег'
];

// Количество лайков, поставленных фотографии, случайное число от 15 до 200;
const likesMin = 15;
const likesMax = 200;

// Количество комментариев, случайное число от 0 до 30;
const commentsMin = 0;
const commentsMax = 30;

// Число: случайный адрес картинки - аватарки (строка) от 1 до 6;
const imgAvatarMin = 1;
const imgAvatarMax = 6;

// Число: случайное количество сообщений от 1 до 2;
const messageMin = 0;
const messageMax = 1;


export {GENERATE_ARRAY};
export {DESCRIPTIONS_PHOTOS};
export {MESSAGES_COMMENTS};
export {NAMES};
export {likesMin};
export {likesMax};
export {commentsMin};
export {commentsMax};
export {imgAvatarMin};
export {imgAvatarMax};
export {messageMin};
export {messageMax};
