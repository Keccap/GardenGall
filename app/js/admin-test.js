$(function() {



// DIRECT


function direct_scripts(){
  $(".direct-item").matchHeight();
}

$(".direct-item .button-direct-add").on("click", function() {

	$(this).parent().find('ul').append('<li> <i class="fa fa-circle" aria-hidden="true"></i> <input type="text" placeholder="Далеко-далеко за."> <!-- если есть подпункты дать button-icon-change класс active --> <div class="button-icon button-icon-change"><i class="fa fa-plus" aria-hidden="true"></i></div> <div class="button-icon button-icon-delete"><i class="fa fa-times" aria-hidden="true"></i></div> <textarea>стрижка_скарификация (вычесывание)_удаление сорняков_уборка листвы садовым пылесосом</textarea> </li>')

	direct_scripts()
})

// /DIRECT

//PORTFOLLIO

function portfolio_scripts(){
	$("img.lazy").lazyload({
		  effect : "fadeIn",
		  threshold : 300
			});

			$(window).resize();

		  $('.carousel-img-wrap').owlCarousel({
		  slideSpeed: 1000,
		  paginationSpeed: 1000,
		  rewindSpeed: 1000,
		  dots: true,
		  items: 1,
		  center: true
			})

			$(".item-project").each(function(e) {		  
			  $(this).attr("href", "#project-popup-" + e)
			    .find(".item-project-mfp-content").attr("id", "project-popup-" + e)
			})

			$(".item-works").each(function(e) {
  			$(this).attr("href", "#works-popup-" + e)
    			.find(".item-works-mfp-content").attr("id", "works-popup-" + e)
			})
}


	$(".s-project .more").on("click", function() {

	for(var i=0; i<8; i++){
      $(".project-wrap").append('<div class="col-md-3 col-sm-6 col-xs-12"> <a href="#project-popup-1" class="item-portfolio item-project"> <div class="cover-image-wrap-portf"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy cover-image" alt="Проект санатория"> </div> <div class="item-portfolio-content item-project-content"> <i class="fa fa-search" aria-hidden="true"></i> <h3>Проект санатория</h3> </div> <div class="hidden"> <div class="item-portfolio-mfp-content item-project-mfp-content clearfix"> <!-- + clearfix --> <div class="carousel-img-wrap owl-carousel"> <!-- Слайд --> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy" alt="Проект санатория"> <input type="text" value="Какая-то пробная подпись для этой замечательной фотографии."> <div class="admin-panel"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-change">Изменить слайд</div> <div class="button-admin-img button-admin-img-delete">Удалить слайд</div> </div> </div> <!-- Слайд --> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy" alt="Проект санатория"> <input type="text" value="Далеко-далеко за словесными горами в стране, гласных."> <div class="admin-panel"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-change">Изменить слайд</div> <div class="button-admin-img button-admin-img-delete">Удалить слайд</div> </div> </div> <!-- Добавление --> <div class="carousel-img-item add"> <div class="input-file-wrap"> <input type="file" title="Добавьте изображение"> </div> <input type="text" value="Далеко-далеко за словесными горами в стране, гласных."> <div class="admin-panel add"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-add">Добавить слайд</div> </div> </div> </div> <input class="input-head" type="text" value="Проект санатория"> <textarea> Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Текстами вершину единственное города предупреждал своего, рукописи бросил его текстов послушавшись. Переписывается, алфавит не коварный по всей то прямо напоивший реторический! Моей запятой ты, необходимыми дороге. Коварный ведущими, рыбного это, моей пояс, первую снова, журчит по всей не мир вопроса даль своего агенство лучше. Текста использовало своего семантика то. Они, злых снова. </textarea> <div class="button-admin button-admin-change">Изменить описание</div> <div class="button-admin button-admin-delete">Удалить проект</div> </div> </div> </a> </div>'); 
		}

		portfolio_scripts()
})	

	$(".s-works .more").on("click", function() {

	for(var i=0; i<8; i++){
      $(".works-wrap").append('<div class="col-md-3 col-sm-6 col-xs-12"> <a href="#works-popup-1" class="item-portfolio item-works"> <div class="cover-image-wrap-portf"> <img src="img/pixel.jpg" data-original="img/works/SAM_1256.JPG" class="lazy cover-image" alt="Оформление заднего двора"> </div> <div class="item-portfolio-content item-works-content"> <i class="fa fa-search" aria-hidden="true"></i> <h3>Оформление заднего двора</h3> </div> <div class="hidden"> <div class="item-portfolio-mfp-content item-works-mfp-content clearfix"> <div class="carousel-img-wrap owl-carousel"> <!-- Слайд --> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/works/SAM_1256.JPG" class="lazy" alt="Оформление заднего двора"> <input type="text" value="Какая-то пробная подпись для этой замечательной фотографии."> <div class="admin-panel"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-change">Изменить слайд</div> <div class="button-admin-img button-admin-img-delete">Удалить слайд</div> </div> </div> <!-- Слайд --> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/works/SAM_1256.JPG" class="lazy" alt="Оформление заднего двора"> <input type="text" value="Далеко-далеко за словесными горами в стране, гласных."> <div class="admin-panel"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-change">Изменить слайд</div> <div class="button-admin-img button-admin-img-delete">Удалить слайд</div> </div> </div> <!-- Добавление --> <div class="carousel-img-item add"> <div class="input-file-wrap"> <input type="file" title="Добавьте изображение"> </div> <input type="text" value="Далеко-далеко за словесными горами в стране, гласных."> <div class="admin-panel add"> <input type="number" min="1" placeholder="Порядок"> <div class="button-admin-img button-admin-img-add">Добавить слайд</div> </div> </div> </div> <input class="input-head" type="text" value="Оформление заднего двора"> <textarea> Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Текстами вершину единственное города предупреждал своего, рукописи бросил его текстов послушавшись. Переписывается, алфавит не коварный по всей то прямо напоивший реторический! Моей запятой ты, необходимыми дороге. Коварный ведущими, рыбного это, моей пояс, первую снова, журчит по всей не мир вопроса даль своего агенство лучше. Текста использовало своего семантика то. Они, злых снова. </textarea> <div class="button-admin button-admin-change">Изменить описание</div> <div class="button-admin button-admin-delete">Удалить работу</div> </div> </div> </a> </div>');
    }

		portfolio_scripts()
})	

// /PORTFOLLIO





});