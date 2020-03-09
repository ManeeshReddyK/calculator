window.addEventListener('load', function () {

    var firstnumberElementAdd = document.getElementById('firstnumberadd');
    var secondnumberElementAdd = document.getElementById('secondnumberadd');
    var addButtonElement = document.getElementById('addButton');
    var outputElement = document.getElementById('output');

    var firstnumberElementSubstract = document.getElementById('firstnumbersubstract');
    var secondnumberElementSubstract = document.getElementById('secondnumbersubstract');
    var substractButtonElement = document.getElementById('substractButton');

    var firstnumberElementMultiply = document.getElementById('firstnumbermultiply');
    var secondnumberElementMultiply = document.getElementById('secondnumbermultiply');
    var multiplyButtonElement = document.getElementById('multiplyButton');

    var firstnumberElementDivide = document.getElementById('firstnumberdivide');
    var secondnumberElementDivide = document.getElementById('secondnumberdivide');
    var divideButtonElement = document.getElementById('divideButton');

    function callServer(url, key) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log('data:', data);
                outputElement.innerText = data[key];
            })
            .catch(function (error) {
                console.log('error', error);
            })
    }

    addButtonElement.addEventListener('click', function () {
        var firstnumber = firstnumberElementAdd.value;
        var secondnumber = secondnumberElementAdd.value;
        var url = 'http://localhost:3000/add?firstnumber=' + firstnumber + '&secondnumber=' + secondnumber;
        callServer(url, 'sum');
    });

    substractButtonElement.addEventListener('click', function () {
        var firstnumber = firstnumberElementSubstract.value;
        var secondnumber = secondnumberElementSubstract.value;
        var url = `/substract?firstnumber=${firstnumber}&secondnumber=${secondnumber}`;
        callServer(url, 'substract');
    });

    multiplyButtonElement.addEventListener('click', function () {
        var firstnumber = firstnumberElementMultiply.value;
        var secondnumber = secondnumberElementMultiply.value;
        var url = `/multiply?firstnumber=${firstnumber}&secondnumber=${secondnumber}`;
        callServer(url, 'multiply');
    });

    divideButtonElement.addEventListener('click', function () {
        var firstnumber = firstnumberElementDivide.value;
        var secondnumber = secondnumberElementDivide.value;
        var url = `/divide?firstnumber=${firstnumber}&secondnumber=${secondnumber}`;
        callServer(url, 'divide');
    });

})