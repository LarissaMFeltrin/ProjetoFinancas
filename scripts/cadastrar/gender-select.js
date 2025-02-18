var feminino_label = document.getElementById('feminino-label');
var feminino_radio = document.getElementById('feminino-radio');

var masculino_label = document.getElementById('masculino-label');
var masculino_radio = document.getElementById('masculino-radio');

var outros_label = document.getElementById('outros-label');
var outros_radio = document.getElementById('outros-radio');

feminino_label.addEventListener('click', function() {
    feminino_label.style.color = 'palevioletred';
    feminino_label.style.background = '#ffe9f0af';

    masculino_label.style.color = '#777';
    masculino_label.style.background = 'none';

    outros_label.style.color = '#777';
    outros_label.style.background = 'none';

});

masculino_label.addEventListener('click', function() {
    feminino_label.style.color = '#777';
    feminino_label.style.background = 'none';

    masculino_label.style.color = 'cornflowerblue';
    masculino_label.style.background = '#cedfffa2';

    outros_label.style.color = '#777';
    outros_label.style.background = 'none';

});

outros_label.addEventListener('click', function() {
    feminino_label.style.color = '#777';
    feminino_label.style.background = 'none';

    masculino_label.style.color = '#777';
    masculino_label.style.background = 'none';

    outros_label.style.color = '#575757';
    outros_label.style.background = '#d8d8d8af';

});