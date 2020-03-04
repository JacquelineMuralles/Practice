"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// -----------------------------Getter for TEXT of LOGO color-----------------------------------------------
function getColorText() {
//    will return a string inside the colorText span
    return $('#colorText').html();
}
// console.log(getColorText());


// ----------------------------Setter for TEXT of LOGO color------------------------------------------------

function setColorText(color) {
//    will set txt to the passed in color, and also change its CSS color
   return $('#colorText').removeClass(getColorText()).html(color).addClass(color);
}
// console.log(setColorText('red'));


// -------------------------------Getter for SECTION color-------------------------------------------------
function getSectionColor(section) {
    return $(section).attr('class');
}
// console.log(getSectionColor('#path1'));



// ---------------------------------Setter for the SECTION color----------------------------------------------
function setSectionColor(color,section) {
    if(section === 'all'){ // change all sections if 'all' is passed in
    //    set all sections to the specified color
        resetColor(); //defined below
        setColorText(color);
        return $('.codeup-logo > path').addClass(color);

    }else{ //an individual section was passed in with a set section color
        $(section).removeClass(getSectionColor(section));
        return $(section).addClass(color);
    //    we don't have to change the #colorText element, because we're going to set that in the rainbow function
    }
// if individual section is passed in, change its color (used for Rainbow effect)
}
// console.log(setSectionColor('purple', 'all'));

// -------------------------reset all path elements to default, and change the 'color' text in the h2 to 'green'-----------------------------------

function resetColor() {
    // the > symbol allows you to call upon each path child from the class of .codeup-logo
    $('.codeup-logo > path').removeClass(function () {
        return $(this).attr('class');
    //    this makes a very specific call upon a particular class (useful when calling upon elements that have multiple classes)
    });
}



// ----------------------------write a function called rainbowLogo() that changes the logo to rainbow colors----------------------------------------
function rainbowLogo() {
    //1. Create some text 'r a i n b o w' with letters individually colored in rainbow colors
    //    a. set that txt, in the #colorText span (inside the header 'Codeup Logo in SVG Form'
    //2. Target each path individually, and color them rainbow colors (i.e. path1 = red, path2 = orange, path3 = yellow)
    var text='rainbow';
    var logoSections = ['#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var counter = 0;

    logoSections.forEach(function (sectionId) {
        setSectionColor(colors[counter], sectionId);
        counter++;
    });

//    ----------------------------------------split up the 'rainbow' text, and make it rainbow---------------------------------------------
    var colorfulText = []; //our bucket
    //['<span style="red">r</span>', '<span style="orange">a</span>', '<span style="yellow">i</span>'....]

    var i =0;
    var colorCounter = 0;

    text.split('').forEach(function (letter) {
        // ['r', 'a', 'i', 'n', 'b', 'o', 'w']
        //foreach ==> (1) letter = r, (2) letter = a, .....
        colorfulText[i] = '<span class="' + colors[colorCounter] + '">' + letter + '</span>';
        //'<span class="red">r</span> is what we're aiming for'
        if(colorCounter === 5){
            colorCounter = 0; //    reset, so we can start our colors over again (at red)
        }
        colorCounter++; i++;
    });
    text = colorfulText.join(' '); // text ==> 'r a i n b o w'
    console.log(text);

    return $('#colorText').removeClass(getColorText()).html(text);
}

console.log(rainbowLogo());

// ---------------Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked-----------------
var circleClickCount = 0;


// ----------------Add a click listener to each of the 'circle' elements at the bottom of the page, and make each color circle------------------

$('.circle').click(function () {
// --------------------------change the logo to the clicked color, or rainbow, if rainbow was clicked-------------------------
//    'red' was clicked -> change the logo (all paths) to red && change the text to say 'red' in red font
    var clickedColor = $(this).attr('id'); // 'red', 'yellow', etc

    circleClickCount++;

//    either 1. click a single color, or 2. click 'rainbow'

    if(clickedColor === 'rainbow'){
        console.log(('rainbow was clicked'));
        resetColor(); //removes all classes from path elements
        rainbowLogo(); // change all path elements to rainbow colors

    }else{ //they clicked on a single color
        console.log(clickedColor + " was clicked");
        setColorText(clickedColor);
        setSectionColor(clickedColor, 'all');
    }


// -------------------If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name----------------------
    if ($('.codeup-logo').attr('id') === clickedColor){ //if color is clicked a second time, toggle the caps class
        $('#colorText').toggleClass('caps');
        console.log(("clicked the same color"));

    }else { //user clicked a different color
        $('#colorText').removeClass('caps');
        circleClickCount = 0;
    }

    console.log(circleClickCount);
    //After we've checked for multiple clicks, we set .codeup-logo element id, to 'clickedColor'
    $('.codeup-logo').attr('id', clickedColor);
});



// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border
$('.circle').each(function (index) {
    $(this).css('border', '1px solid black');
    console.log(('added border to circle ' + index));

});


// TODO: Let's take the border away from the first circle
$('.circle').first().css('border', 'none');

// TODO: Let's make the last circle disappear
$('.circle').last().css('display', 'none');

// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle
$('.circles').children().css('border', 'none').last().css('display', 'inline-flex');

// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding
$('#path1').removeClass().addClass('black').parent().parent().css({
    'background' : 'lightgray',
    'margin': '20px'});

// TODO: change the second path element to blue, then change the 'next' element to yellow
$('#path2').removeClass().addClass('blue').next().removeClass().addClass('yellow');

// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?
