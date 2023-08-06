"use strict";

//     Servise_section
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