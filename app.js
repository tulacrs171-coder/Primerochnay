// Данные товаров
const products = [
  {
    id: 1,
    name: "Винтажная блузка с вышивкой",
    brand: "Польша, винтаж",
    category: "Блузки",
    size: "XXL",
    measurements: {
      sleeve: 61,
      chest: 134,
      waist: 130,
      length: 74
    },
    material: "Полиэстер",
    color: "Бежевый с вышивкой",
    features: [
      "Пуговицы скрыты под планку",
      "Разрезы по бокам 10см",
      "Есть подплечники",
      "Ажурный воротник с грибочками",
      "Изумительная вышитая история про белочку"
    ],
    condition: "Идеальная сохранность",
    price: 3000,
    status: "sold",
    description: "🥰 *Польша, винтаж, идеальная сохранность* Ажурный воротник с грибочками на уголках и изумительная вышитая история про белочку делают эту блузку уникальной находкой!"
  },
  {
    id: 2,
    name: "Дизайнерское платье микс",
    brand: "Италия (бренд неизвестен)",
    category: "Платья",
    size: "M",
    measurements: {
      chest: 88,
      waist: 90,
      hips: 98,
      length: 82
    },
    material: "Шёлк, шерсть, хлопок, полиэстер",
    color: "Микс оттенков",
    features: [
      "Италия",
      "Очень интересный дизайн",
      "Уникальный состав"
    ],
    condition: "Отличное",
    price: 2000,
    status: "sold",
    description: "💗 *Нет этикетки, но это какой-то интересный бренд* Италия! Состав интересный: и шёлк, и шерсть, и хлопок, и полиэстер… Очень интересный дизайн!"
  },
  {
    id: 3,
    name: "Летняя рубашка в полоску",
    brand: "Camp",
    category: "Рубашки",
    size: "L",
    measurements: {
      chest: 102,
      waist: 106,
      hips: 106,
      length: 66
    },
    material: "Хлопок",
    color: "Цветные блики 90-х",
    features: [
      "Винтажный принт",
      "Идеальна для летних образов",
      "Как цветные блики на экране старого телевизора"
    ],
    condition: "Отличное",
    price: 1600,
    status: "available",
    description: "*Camp* Великолепный цвет, которым можно заиграться, создавая летние образы! Полосы с этой рубашки - как цветные блики на экране старого телевизора 📺"
  },
  {
    id: 4,
    name: "Романтичное платье с кружевом",
    brand: "Европейский бренд",
    category: "Платья",
    size: "S-M",
    measurements: {
      chest: 86,
      waist: 84,
      hips: 94,
      length: 95
    },
    material: "Хлопок с кружевом",
    color: "Цвет пыльный лён",
    features: [
      "Кружева, рюши, пуговицы, манжеты",
      "Могла бы сыграть главную роль в классическом романе",
      "Две незаметные пуговки с цветочком у шеи",
      "Под романтичные образы для прогулки по набережным"
    ],
    condition: "Отличное",
    price: 2500,
    status: "available",
    description: "✨ *Европейский бренд* Цвет - пыльный лён. Кружева, рюши, пуговицы, манжеты… она точно могла бы сыграть главную роль в каком-нибудь классическом романе!"
  },
  {
    id: 5,
    name: "Яркая футболка с принтом",
    brand: "Европейский бренд",
    category: "Футболки",
    size: "M",
    measurements: {
      chest: 92,
      waist: 90,
      length: 68
    },
    material: "Хлопок",
    color: "Яркие позитивные цвета",
    features: [
      "Европейский бренд",
      "Любит яркие позитивные цвета и принты",
      "Цветочный принт"
    ],
    condition: "Отличное",
    price: 1200,
    status: "available",
    description: "🌸 *Европейский бренд, который очень любит яркие позитивные цвета и принты* Мне очень напоминает хрустящую подушечку к завтраку 😊"
  },
  {
    id: 6,
    name: "Джинсовая куртка оверсайз",
    brand: "Vintage Denim",
    category: "Верхняя одежда",
    size: "L-XL",
    measurements: {
      chest: 110,
      waist: 108,
      length: 65
    },
    material: "Деним",
    color: "Классический синий",
    features: [
      "Оверсайз фасон",
      "Потертости в стиле 90-х",
      "Металлические пуговицы"
    ],
    condition: "Очень хорошее",
    price: 2800,
    status: "available",
    description: "🧥 *Vintage Denim* Классика! Оверсайз джинсовка с аутентичными потертостями эпохи 90-х"
  },
  {
    id: 7,
    name: "Шифоновая блузка нюд",
    brand: "Zara",
    category: "Блузки",
    size: "S",
    measurements: {
      chest: 88,
      waist: 86,
      length: 62
    },
    material: "Шифон",
    color: "Нюдовый беж",
    features: [
      "Полупрозрачная текстура",
      "Завязки на рукавах",
      "Идеальна под деловой стиль"
    ],
    condition: "Отличное",
    price: 1800,
    status: "available",
    description: "*Zara* Нежнейшая шифоновая блузка цвета нюд. Любит стальные украшения ✨"
  },
  {
    id: 8,
    name: "Макси юбка в цветочек",
    brand: "H&M",
    category: "Юбки",
    size: "M",
    measurements: {
      waist: 70,
      hips: 96,
      length: 95
    },
    material: "Вискоза",
    color: "Цветочный принт",
    features: [
      "Длина макси",
      "Летящая ткань",
      "Резинка на поясе"
    ],
    condition: "Отличное",
    price: 1400,
    status: "booked",
    description: "🌺 *H&M* Летящая юбка в пол с романтичным цветочным принтом. Любит морской воздух!"
  }
];

// Глобальные переменные состояния
let currentScreen = 'catalog';
let currentCategory = 'all';
let currentProduct = null;
let favorites = [];
let filters = {
  priceFrom: null,
  priceTo: null,
  sizes: [],
  statuses: ['available', 'booked']
};

// Функции для работы с экранами
function showScreen(screenName) {
  // Скрываем все экраны
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // Показываем нужный экран
  const targetScreen = document.getElementById(screenName + 'Screen');
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
    currentScreen = screenName;
  }
}

// Функции для работы с избранным
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index === -1) {
    favorites.push(productId);
    showToast('💝 Добавлено в избранное');
  } else {
    favorites.splice(index, 1);
    showToast('💔 Удалено из избранного');
  }
  
  // Сохраняем в переменной (localStorage недоступен в sandbox)
  
  // Обновляем UI
  updateFavoritesCounter();
  updateFavoriteButtons();
  
  // Если находимся на странице избранного, обновляем её
  if (currentScreen === 'favorites') {
    renderFavorites();
  }
}

function updateFavoritesCounter() {
  const counter = document.getElementById('favoritesCounter');
  counter.textContent = favorites.length;
  
  if (favorites.length > 0) {
    counter.classList.add('show');
  } else {
    counter.classList.remove('show');
  }
}

function updateFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const productId = parseInt(btn.dataset.productId);
    if (favorites.includes(productId)) {
      btn.classList.add('active');
      btn.innerHTML = '❤️';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '🤍';
    }
  });
}

// Функции для фильтрации товаров
function filterProducts() {
  let filteredProducts = products;
  
  // Фильтр по категории
  if (currentCategory !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
  }
  
  // Фильтр по цене
  if (filters.priceFrom !== null) {
    filteredProducts = filteredProducts.filter(product => product.price >= filters.priceFrom);
  }
  if (filters.priceTo !== null) {
    filteredProducts = filteredProducts.filter(product => product.price <= filters.priceTo);
  }
  
  // Фильтр по размерам
  if (filters.sizes.length > 0) {
    filteredProducts = filteredProducts.filter(product => {
      return filters.sizes.some(size => product.size.includes(size));
    });
  }
  
  // Фильтр по статусам
  filteredProducts = filteredProducts.filter(product => filters.statuses.includes(product.status));
  
  return filteredProducts;
}

// Функции для рендеринга товаров
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const filteredProducts = filterProducts();
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  grid.innerHTML = filteredProducts.map((product, index) => createProductCard(product, index)).join('');
  
  // Обновляем кнопки избранного
  setTimeout(updateFavoriteButtons, 100);
}

function createProductCard(product, index) {
  const gradientClass = `gradient-${(index % 5) + 1}`;
  const statusLabels = {
    available: 'В наличии',
    booked: 'Забронировано',
    sold: 'Продано'
  };
  
  return `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      <div class="product-image ${gradientClass}">
        👗
        <span class="product-status ${product.status}">${statusLabels[product.status]}</span>
        <button class="favorite-btn" data-product-id="${product.id}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
          ${favorites.includes(product.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-brand">${product.brand}</div>
        <div class="product-details">
          <div class="product-size">Размер ${product.size}</div>
          <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
    </div>
  `;
}

// Функции для детальной страницы товара
function showProductDetail(productId) {
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  
  renderProductDetail();
  showScreen('product');
}

function renderProductDetail() {
  if (!currentProduct) return;
  
  const gradientClass = `gradient-${(currentProduct.id % 5) + 1}`;
  const statusLabels = {
    available: 'В наличии',
    booked: 'Забронировано',
    sold: 'Продано'
  };
  
  const measurementsList = [];
  if (currentProduct.measurements.chest) measurementsList.push({ icon: '👕', label: 'ОГ', value: `${currentProduct.measurements.chest} см` });
  if (currentProduct.measurements.waist) measurementsList.push({ icon: '📏', label: 'ОТ', value: `${currentProduct.measurements.waist} см` });
  if (currentProduct.measurements.hips) measurementsList.push({ icon: '📐', label: 'ОБ', value: `${currentProduct.measurements.hips} см` });
  if (currentProduct.measurements.length) measurementsList.push({ icon: '📏', label: 'Длина', value: `${currentProduct.measurements.length} см` });
  if (currentProduct.measurements.sleeve) measurementsList.push({ icon: '👔', label: 'Рукав', value: `${currentProduct.measurements.sleeve} см` });
  
  const actionButton = getActionButton(currentProduct.status);
  const favoriteButton = `
    <button class="btn btn--outline" onclick="toggleFavorite(${currentProduct.id})">
      ${favorites.includes(currentProduct.id) ? '💔 Удалить из избранного' : '❤️ В избранное'}
    </button>
  `;
  
  document.getElementById('productDetail').innerHTML = `
    <div class="product-gallery ${gradientClass}">
      👗
      <button class="back-btn" onclick="showScreen('catalog')">
        🔙
      </button>
    </div>
    
    <div class="product-content">
      <div class="product-header">
        <h2 class="product-title">${currentProduct.name}</h2>
        <div class="product-subtitle">${currentProduct.brand}</div>
        <div class="product-price-large">${currentProduct.price.toLocaleString('ru-RU')} ₽</div>
        <span class="status status--${getStatusClass(currentProduct.status)}">${statusLabels[currentProduct.status]}</span>
      </div>
      
      <div class="section">
        <h3 class="section-title">📏 Размеры</h3>
        <div class="measurements">
          ${measurementsList.map(m => `
            <div class="measurement">
              <span class="measurement-icon">${m.icon}</span>
              <div>
                <div class="measurement-text">${m.label}</div>
                <div class="measurement-value">${m.value}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h3 class="section-title">📋 Характеристики</h3>
        <div class="characteristics">
          <div class="characteristic">
            <span class="characteristic-label">Материал</span>
            <span class="characteristic-value">${currentProduct.material}</span>
          </div>
          <div class="characteristic">
            <span class="characteristic-label">Цвет</span>
            <span class="characteristic-value">${currentProduct.color}</span>
          </div>
          <div class="characteristic">
            <span class="characteristic-label">Состояние</span>
            <span class="characteristic-value">${currentProduct.condition}</span>
          </div>
          <div class="characteristic">
            <span class="characteristic-label">Размер</span>
            <span class="characteristic-value">${currentProduct.size}</span>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h3 class="section-title">✨ Особенности</h3>
        <div class="features">
          ${currentProduct.features.map(feature => `
            <div class="feature">
              <span>•</span>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h3 class="section-title">📝 Описание</h3>
        <div class="description">${currentProduct.description}</div>
      </div>
    </div>
    
    <div class="product-actions">
      ${actionButton}
      ${favoriteButton}
      <button class="btn btn--secondary btn--full" onclick="window.open('https://t.me/EskaPR', '_blank')">
        📞 Связаться в Telegram
      </button>
    </div>
  `;
}

function getActionButton(status) {
  switch (status) {
    case 'available':
      return '<button class="btn btn--primary btn--full" onclick="openBookingModal()">💌 Забронировать</button>';
    case 'booked':
      return '<button class="btn btn--primary btn--full" disabled>🕐 Забронировано</button>';
    case 'sold':
      return '<button class="btn btn--primary btn--full" disabled>✅ Продано</button>';
    default:
      return '';
  }
}

function getStatusClass(status) {
  switch (status) {
    case 'available': return 'success';
    case 'booked': return 'warning';
    case 'sold': return 'info';
    default: return 'info';
  }
}

// Функции для избранного
function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const emptyState = document.getElementById('favoritesEmpty');
  const favoriteProducts = products.filter(p => favorites.includes(p.id));
  
  if (favoriteProducts.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  grid.innerHTML = favoriteProducts.map((product, index) => createProductCard(product, index)).join('');
  
  // Обновляем кнопки избранного
  setTimeout(updateFavoriteButtons, 100);
}

function clearFavorites() {
  if (favorites.length === 0) return;
  
  if (confirm('Удалить все товары из избранного?')) {
    favorites = [];
    // Сохраняем в переменной (localStorage недоступен в sandbox)
    updateFavoritesCounter();
    renderFavorites();
    showToast('🗑 Избранное очищено');
  }
}

// Функции для модальных окон
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function openBookingModal() {
  openModal('bookingModal');
}

// Функции для фильтров
function resetFilters() {
  filters = {
    priceFrom: null,
    priceTo: null,
    sizes: [],
    statuses: ['available', 'booked']
  };
  
  // Очищаем форму
  document.getElementById('priceFrom').value = '';
  document.getElementById('priceTo').value = '';
  document.querySelectorAll('.size-filter').forEach(cb => cb.checked = false);
  document.querySelectorAll('.status-filter').forEach(cb => {
    cb.checked = cb.value === 'available' || cb.value === 'booked';
  });
  
  applyFilters();
}

function applyFilters() {
  // Собираем данные из формы
  const priceFrom = document.getElementById('priceFrom').value;
  const priceTo = document.getElementById('priceTo').value;
  
  filters.priceFrom = priceFrom ? parseInt(priceFrom) : null;
  filters.priceTo = priceTo ? parseInt(priceTo) : null;
  
  filters.sizes = Array.from(document.querySelectorAll('.size-filter:checked')).map(cb => cb.value);
  filters.statuses = Array.from(document.querySelectorAll('.status-filter:checked')).map(cb => cb.value);
  
  // Применяем фильтры и закрываем модалку
  renderProducts();
  closeModal('filtersModal');
  showToast('🎯 Фильтры применены');
}

// Функция для бронирования
function submitBooking() {
  const form = document.getElementById('bookingForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const name = document.getElementById('bookingName').value;
  const phone = document.getElementById('bookingPhone').value;
  const comment = document.getElementById('bookingComment').value;
  const agree = document.getElementById('bookingAgree').checked;
  
  if (!agree) {
    alert('Необходимо согласиться с условиями обработки данных');
    return;
  }
  
  // Имитируем отправку заявки
  if (currentProduct) {
    currentProduct.status = 'booked';
  }
  
  closeModal('bookingModal');
  
  // Показываем успешное сообщение
  showToast('🎉 Спасибо! Мы свяжемся с вами через @EskaPR');
  
  // Обновляем отображение
  if (currentProduct) {
    renderProductDetail();
  }
  
  // Очищаем форму
  form.reset();
}

// Функция для уведомлений
function showToast(message) {
  const toast = document.getElementById('toast');
  const content = document.getElementById('toastContent');
  
  content.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 250);
  }, 3000);
}

// Функция инициализации
function initApp() {
  // Показываем загрузку
  document.getElementById('loadingSkeleton').classList.remove('hidden');
  
  // Имитируем загрузку
  setTimeout(() => {
    document.getElementById('loadingSkeleton').classList.add('hidden');
    renderProducts();
    updateFavoritesCounter();
  }, 1000);
  
  // Устанавливаем обработчики событий
  setupEventListeners();
}

function setupEventListeners() {
  // Фильтры категорий
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      // Обновляем активную кнопку
      document.querySelectorAll('.filter-btn[data-category]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Устанавливаем категорию и обновляем товары
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });
  
  // Кнопка поиска (заглушка)
  document.getElementById('searchBtn').addEventListener('click', () => {
    showToast('🔍 Функция поиска будет добавлена в следующем обновлении');
  });
  
  // Кнопка избранного
  document.getElementById('favoritesBtn').addEventListener('click', () => {
    renderFavorites();
    showScreen('favorites');
  });
  
  // Кнопка фильтров
  document.getElementById('filtersModalBtn').addEventListener('click', () => {
    openModal('filtersModal');
  });
  
  // Кнопка очистки избранного
  document.getElementById('clearFavoritesBtn').addEventListener('click', clearFavorites);
  
  // Закрытие модальных окон по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
        modal.classList.add('hidden');
      });
      document.body.style.overflow = '';
    }
  });
}

// Запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);

// Функции, доступные глобально для использования в HTML
window.showScreen = showScreen;
window.showProductDetail = showProductDetail;
window.toggleFavorite = toggleFavorite;
window.openBookingModal = openBookingModal;
window.closeModal = closeModal;
window.resetFilters = resetFilters;
window.applyFilters = applyFilters;
window.submitBooking = submitBooking;
window.clearFavorites = clearFavorites;