"use strict";

//---------- Servise_section ----------

$(document).ready(function(){
  $('.service_tab_item:first').addClass('active');
  $('.tabs_content li:first').css('display', 'block');

  $('.service_tab_item').on('click', function () {
    const selectedTab = $(this).data('name');

    $('.tabs_content li').each(function () {
        const contentName = $(this).data('name');
        $(this).css('display', contentName === selectedTab ? 'block' : 'none');
    });

    $('.service_tab_item').removeClass('active');
    $(this).addClass('active');
  });
});

//---------- Work_section ----------

const galleryList = document.querySelector('.work_gallery_list');

let galleryData = [
  { src: './img/work_section/graphic_design/graphic-design4.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/landing_page/landing-page4.jpg', type: 'landing_pages', category: 'Landing Pages' },
  { src: './img/work_section/wordpress/wordpress4.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/web_design/web-design4.jpg', type: 'web_design', category: 'Web Design' },
  { src: './img/work_section/graphic_design/graphic-design5.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/wordpress/wordpress5.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/landing_page/landing-page5.jpg', type: 'landing_pages', category: 'Landing Pages' },
  { src: './img/work_section/graphic_design/graphic-design6.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/web_design/web-design5.jpg', type: 'web_design', category: 'Web Design' },
  { src: './img/work_section/wordpress/wordpress6.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/landing_page/landing-page6.jpg', type: 'landing_pages', category: 'Landing Pages' },
  { src: './img/work_section/wordpress/wordpress7.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/landing_page/landing-page7.jpg', type: 'landing_pages', category: 'Landing Pages' },
  { src: './img/work_section/graphic_design/graphic-design7.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/web_design/web-design6.jpg', type: 'web_design', category: 'Web Design' },
  { src: './img/work_section/graphic_design/graphic-design8.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/wordpress/wordpress8.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/graphic_design/graphic-design9.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/graphic_design/graphic-design10.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/web_design/web-design7.jpg', type: 'web_design', category: 'Web Design' },
  { src: './img/work_section/wordpress/wordpress9.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/graphic_design/graphic-design11.jpg', type: 'graphic_design', category: 'Graphic Design' },
  { src: './img/work_section/wordpress/wordpress10.jpg', type: 'wordpress', category: 'Wordpress' },
  { src: './img/work_section/graphic_design/graphic-design12.jpg', type: 'graphic_design', category: 'Graphic Design' },
];

galleryData.forEach(itemData => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('work_gallery_item');
  galleryItem.setAttribute('data-type', itemData.type);

  const createImg = document.createElement('img');
  createImg.setAttribute('src', itemData.src);
  galleryItem.appendChild(createImg);

  const popUpElem = document.createElement('div');
  popUpElem.classList.add('popup');
  popUpElem.innerHTML = `
    <div class="popup_icons">
      <a href="#" class="icon_link icon_left_links"></a>
      <a href="#" class="icon_link"><span></span></a>
    </div>
    <p class="text_up">creative design</p>
    <p class="text_down">${itemData.category}</p>
  `;
  galleryItem.appendChild(popUpElem);

  galleryList.appendChild(galleryItem);
});

const workTabs = document.querySelectorAll('.work_tab_item');
const workGalleryItem = document.querySelectorAll('.work_gallery_item');
const loader = document.querySelector('.loader');
const loaderBtn = document.querySelector('.work_btn');

loader.style.display = 'none';

let clickCount = 0;

function showLoader(isLoading) {
  loader.style.display = isLoading ? 'block' : 'none';
}

loaderBtn.addEventListener('click', function() {
  clickCount++;
  loaderBtn.style.display = 'none';
  showLoader(true);

  setTimeout(function() {
    showLoader(false);
    if (clickCount < 2) {
      loaderBtn.style.display = 'block';
    }
  }, 2000);
});

function showHideContent(category) {
  workGalleryItem.forEach(e => {
    const itemCategory = e.getAttribute('data-type');
    e.style.display = category === 'all' || itemCategory === category ? 'block' : 'none';
  });

  loaderBtn.style.display = 'none';
  if (category === 'all') { 
    showImages(currentPage);
    loaderBtn.style.display = 'block';
 } else {
  loaderBtn.style.display = 'none'};
}

workTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    workTabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
    showHideContent(this.getAttribute('data-type'));
  });
});

let imagesPerPage = 12;
let currentPage = 1;

function showImages(page) {
  workGalleryItem.forEach((item, index) => {
    item.style.display = index < page * imagesPerPage ? 'block' : 'none';
  });
}

showImages(currentPage);

document.querySelector('.work_btn').addEventListener('click', function () {
  currentPage++;
  setTimeout(() => {
    showImages(currentPage)
  }, 2000)
});

//---------- Clients_section ----------

$(document).ready(function () {
  $(".slider_main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider",
    waitForAnimate: false,
  });
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: -1,
    focusOnSelect: true,
    asNavFor: ".slider_main",
    waitForAnimate: false,
  });
});