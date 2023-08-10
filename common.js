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

const workTabs = document.querySelectorAll('.work_tab_item');
const workGalleryItem = document.querySelectorAll('.work_gallery_item');
const loader = document.querySelector(".loader");
const loaderBtn = document.querySelector(".work_btn");

loader.style.display = "none";

let clickCount = 0;

function showLoader(isLoading) {
  loader.style.display = isLoading ? "block" : "none";
}

loaderBtn.addEventListener("click", function() {
  clickCount++;
  loaderBtn.style.display = "none";
  showLoader(true);

  setTimeout(function() {
    showLoader(false);
    if (clickCount < 2) {
      loaderBtn.style.display = "block";
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
    loaderBtn.style.display = "block";
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