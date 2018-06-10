$(document).ready(function(){

	var regForm = (function(){

		// Переменные модуля
		var _form = $('#form');
		var _pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var _buttonLogin = $('#button-login');
		var _errorEnterEmail = $('#error-enter-email');
		var _errorFormatEmail = $('#error-format-email');
		var _errorEnterPass = $('#error-enter-password');
		var _errorBusy = $('#error-mail-busy, #error-mail-busy-text');
		_mail = $('[name="email"]');
		_password = $('[name="password"]');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}
		// Приватные методы
		var _formValidate = function (event) {
			var _mailReady = _mail.val().trim(); 
			var _passReady = _password.val();

    		if (_mailReady == '') {               // Если логин пустой
    			_errorEnterEmail.fadeIn(1000);    // показываем ошибку введите email
    			event.preventDefault();            //отменяем стандартное поведение
    		} else if (!(_pattern.test(_mailReady)))  {      // проверяем правильный формат email
    			_errorFormatEmail.fadeIn(1000);      // показываем ошибку неверный формат email
    			event.preventDefault();              //отменяем стандартное поведение
   		 }

   		 if (_passReady =='') {                 //Если пароль пустой
    			_errorEnterPass.fadeIn(1000);    // показываем блок с ошибкой пароля
    			event.preventDefault();          //отменяем стандартное поведение
    		}
		 
    		if (_mailReady == "mail@mail.com") {  // если логин mail@mail.com
    				_errorBusy.fadeIn(1000);    // показываем ошибку данный email уже занят
    				event.preventDefault();     //отменяем стандартное поведение
    		}

    		_mail.on("focus", function(){         // по фокусу убираем блоки с ошибками
    			_errorEnterEmail.fadeOut(1000);   // убираем ошибку введите email
    			_errorFormatEmail.fadeOut(1000);  // убираем ошибку неверный формат email
    			_errorBusy.fadeOut(1000);             // убираем ошибку данный email уже занят
    		});

    		_password.on("focus", function(){       // по фокусу убираем блоки с ошибками
    			_errorEnterPass.fadeOut(1000);      // убираем блок с ошибкой пароля
    		});
		}
		
		return {   // Возвращаем публичные медоты, которые будут доступны снаружи
			init
		}
	
	}());
  
	// Запускаем модуль
	regForm.init();
    		

});