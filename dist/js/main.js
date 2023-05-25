// import Typed from "typed.js";

$(function () {
    
    // Печатающийся текст
    const typed = new Typed('.about-ttl__typed', {
        strings: [
            "<text style='background:#A90F3D'>&nbsp;копаем котлованы&nbsp;</text>", 
            "<text style='background:#009944'>&nbsp;замораживаем стройку&nbsp;</text>", 
            "<text style='background:#2F2482'>&nbsp;выводим деньги в офшоры&nbsp;</text>",
            "<text style='background:#2F2482'>&nbsp;банкротимся&nbsp;</text>"],
        typeSpeed: 50,
        startDelay: 1000,
        backSpeed: 30,
        loop: true,
        showCursor: false,
      });

    // Анимации  
    new WOW().init();

    // Анимация формы в форме
    $('.feedback-form__input').on('focus', function(e) {
        e.preventDefault();
        $(this).siblings('.feedback-form__label').addClass('feedback-form__label_focused');
    })
    $('.feedback-form__input').on('blur', function(e) {
        e.preventDefault();
        if ($(this).val() == '')
            $(this).siblings('.feedback-form__label').removeClass('feedback-form__label_focused');
    })

    // Изменение размера текстового поля сообщения
    $('.feedback-form__textarea').on('keyup input', function () {
        $(this).css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
    });

    // Валидация и отправка формы, открытие модалки об успешной отправке
    $('.feedback-form').validate({
        rules: {
            inputName: {
                required: true,
                minlength: 2
            },
            inputEmail: {
                required: true
            }
        },
        messages: {
            inputName: {
                required: 'Это поле нужно заполнить',
                minlength: 'Не менее 2-х символов' 
            },
            inputEmail: {
                required: 'Это поле нужно заполнить',
                email: 'Неверный формат e-mail'
            }
          },
        submitHandler: function (form) {
            $.ajax({
                success: function () {
                    $('.feedback-form').trigger('reset');
                    $('.success-modal').fadeIn(300);
                }
            })
        }
    })

    // закрытие модалки об успешной отправке
    $('.success-modal__close').on('click', function (e) {
        e.stopPropagation();
        $('.success-modal').fadeOut(300);
    })

    // Закрыте меню шапки при клике на ссылку меню
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })
})