// -------------------------
// Plate Accordion Trigger
jQuery(".plate_trigger").on("click", function (e) {
  // if( jQuery(this).hasClass('done') ){
  //   jQuery(this).removeClass('done');
  //   jQuery(this).next('.reg_details').removeClass('active');
  // }else{
  jQuery("html, body").animate(
    {
      scrollTop: jQuery(this).first().offset().top - 500,
    },
    500
  );

  jQuery(".reg_details").removeClass("active");
  jQuery(this).addClass("done");
  jQuery(this).next(".reg_details").addClass("active");
  // }
});

// -------------------------
// Onload get price

checkPlateText();

// var plate_style_first = document.getElementById('plate_style');
// var plate_style_elem_first = plate_style_first.options[plate_style_first.selectedIndex];
// var plate_style_class = plate_style_elem_first.dataset.class;
// console.log(plate_style_class);
// change_content_and_gallery(plate_style_class);
jQuery(document).ready(function () {
  jQuery(".product__content_wrap .content_full_description:first").addClass(
    "active"
  );
});

// -------------------------
// Check for options selected
jQuery(".single_add_to_cart_button").on("click", function () {
  jQuery("#submit_form").click();
});
jQuery("#no").on("click", function () {
  jQuery("input[value='No']").click();
});
jQuery("#yes").on("click", function () {
  jQuery("input[value='Yes']").click();
});
jQuery("#none").on("click", function () {
  jQuery("input[value='None']").click();
});
jQuery("#GB").on("click", function () {
  jQuery("input[value='GB']").click();
});
jQuery("#UK").on("click", function () {
  jQuery("input[value='UK']").click();
});
jQuery("#Wales").on("click", function () {
  jQuery("input[value='Wales']").click();
});
jQuery("#Scotland").on("click", function () {
  jQuery("input[value='Scotland']").click();
});

// -------------------------
// Fittings options
jQuery(".fittings_option_1").on("click", function (e) {
  jQuery(".fittings_option_1").removeClass("active");
  jQuery(this).addClass("active");

  var fittings_value = jQuery(this).data("value");
  reloadFittings();
});
jQuery(".fittings_option_2").on("click", function (e) {
  jQuery(".fittings_option_2").removeClass("active");
  jQuery(this).addClass("active");

  var fittings_value = jQuery(this).data("value");
  reloadFittings();
});
jQuery(".fittings_option_3").on("click", function (e) {
  jQuery(".fittings_option_3").removeClass("active");
  jQuery(this).addClass("active");

  var fittings_value = jQuery(this).data("value");
  reloadFittings();
});
jQuery(".fittings_option_4").on("click", function (e) {
  jQuery(".fittings_option_4").removeClass("active");
  jQuery(this).addClass("active");

  var fittings_value = jQuery(this).data("value");
  reloadFittings();
});

function reloadFittings() {
  var fittingsPrice = 0;

  jQuery(".question_option").each(function (i, obj) {
    if (jQuery(this).hasClass("active")) {
      fittingsPrice = fittingsPrice + jQuery(this).data("price");
    }
  });
  document.getElementById("fittings").value = fittingsPrice;
  
}

// -------------------------
// Check if input is empty
function checkPlateText() {
  var plateTextValue = document.getElementById("reg_name");
  var submitButton = document.querySelector(".single_add_to_cart_button");
  if (plateTextValue.value == "" || plateTextValue.value == "YOUR REG") {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
  }
}

// -------------------------
// On change of reg name
jQuery(".reg_name").on("keyup", function (e) {
  var textvalue = jQuery(this).val();
  checkPlateText();
  plate_textchange(textvalue);
});
jQuery(".reg_name").on("click", function (e) {
  var textvalue = jQuery(this).val();
  if (textvalue === "YOUR REG") {
    document.getElementById("reg_name").value = "";
  }
});

function plate_textchange(platevalue) {
  var front_plate = document.getElementById("front_plate_effect");
  var rear_plate = document.getElementById("rear_plate_effect");
  var registration = document.getElementById("registration-number")

  if (platevalue.length < 1) {
    platevalue = "YOUR REG";
  }

  front_plate.innerHTML = platevalue;
  rear_plate.innerHTML = platevalue;
  registration.value = platevalue;
}

function truncate_plate_text(text_field, character_size) {
  // Update character size
  text_field.setAttribute("maxlength", character_size);
  var newTruncatedText = text_field.value.substring(0, character_size);
  return newTruncatedText;
}

// -------------------------
// Plate options change
jQuery(".plate_option").on("click", function (e) {
  jQuery(".plate_option").removeClass("active");
  jQuery(this).addClass("active");

  var front_plate = document.getElementById("front_plate");
  var rear_plate = document.getElementById("rear_plate");

  var visibilityOption = jQuery(this).data("value");

  if (visibilityOption == "both") {
    front_plate.classList.remove("hidden");
    rear_plate.classList.remove("hidden");
  } else if (visibilityOption == "front") {
    rear_plate.classList.add("hidden");
    front_plate.classList.remove("hidden");
  } else if (visibilityOption == "rear") {
    front_plate.classList.add("hidden");
    rear_plate.classList.remove("hidden");
  }

  document.getElementById("plateoption").value = visibilityOption;

  recalculateWithOption();
  e.preventDefault();
});

// -------------------------
// Badge options change
jQuery(".badge_option").on("click", function (e) {
  jQuery(".badge_option").removeClass("active");
  jQuery(this).addClass("active");

  var front_plate_badge = document.getElementById("front_plate_badge");
  var front_plate_badge_image = document.getElementById(
    "front_plate_badge_image"
  );
  var front_plate = document.getElementById("front_plate_text");

  var rear_plate_badge = document.getElementById("rear_plate_badge");
  var rear_plate_badge_image = document.getElementById(
    "rear_plate_badge_image"
  );
  var rear_plate = document.getElementById("rear_plate_text");

  var front_plate_markings_wrapper = document.getElementById(
    "front_plate_markings_wrapper"
  );
  var rear_plate_markings_wrapper = document.getElementById(
    "rear_plate_markings_wrapper"
  );

  var badgeBackground = jQuery(this).data("colour");
  var badgeImage = jQuery(this).data("image");
  var badgeValue = jQuery(this).data("value");

  if (badgeValue != "none") {
    front_plate_badge.classList.add("active");
    front_plate_badge.style.background = badgeBackground;
    front_plate_badge_image.src = badgeImage;

    front_plate.classList.add("has_badge");
    rear_plate.classList.add("has_badge");

    front_plate_markings_wrapper.classList.add("has_badge");
    rear_plate_markings_wrapper.classList.add("has_badge");

    rear_plate_badge.classList.add("active");
    rear_plate_badge.style.background = badgeBackground;
    rear_plate_badge_image.src = badgeImage;
  } else {
    front_plate_badge.classList.remove("active");
    rear_plate_badge.classList.remove("active");

    front_plate_markings_wrapper.classList.remove("has_badge");
    rear_plate_markings_wrapper.classList.remove("has_badge");

    front_plate.classList.remove("has_badge");
    rear_plate.classList.remove("has_badge");
  }
  reloadFittings();
  e.preventDefault();
});

// -------------------------
// Border options change
jQuery(".border_option").on("click", function (e) {
  jQuery(".border_option").removeClass("active");
  jQuery(this).addClass("active");

  var front_plate = document.getElementById("front_plate_text");
  var rear_plate = document.getElementById("rear_plate_text");

  var front_plate_parent = document.getElementById("front_plate");
  var rear_plate_parent = document.getElementById("rear_plate");

  var borderValue = jQuery(this).data("value");

  if (borderValue != "no") {
    front_plate.classList.add("has_border");
    rear_plate.classList.add("has_border");

    front_plate_parent.classList.add("has_border");
    rear_plate_parent.classList.add("has_border");
  } else {
    front_plate.classList.remove("has_border");
    rear_plate.classList.remove("has_border");

    front_plate_parent.classList.remove("has_border");
    rear_plate_parent.classList.remove("has_border");
  }
  reloadFittings();
  e.preventDefault();
});

// -------------------------
// Marking options change
jQuery(".markings_option").on("click", function (e) {
  jQuery(".markings_option").removeClass("active");
  jQuery(this).addClass("active");

  var front_plate_markings = document.getElementById("front_plate_markings");
  var rear_plate_markings = document.getElementById("rear_plate_markings");
  var markingsField = document.getElementById("legal__markings_wrap");

  var markingsValue = jQuery(this).data("value");

  if (markingsValue != "no") {
    front_plate_markings.classList.add("has_markings");
    rear_plate_markings.classList.add("has_markings");
    markingsField.classList.add("active");
  } else {
    front_plate_markings.classList.remove("has_markings");
    rear_plate_markings.classList.remove("has_markings");
    markingsField.classList.remove("active");
  }
  reloadFittings();
  e.preventDefault();
});

jQuery(".legal_markings").on("keyup", function (e) {
  var markingsValueText = jQuery(this).val();
  markings_textchange(markingsValueText);
});

function markings_textchange(markingsValueText) {
  var front_plate_markings = document.getElementById("front_plate_markings");
  var rear_plate_markings = document.getElementById("rear_plate_markings");

  front_plate_markings.innerHTML = markingsValueText;
  front_plate_markings.setAttribute("title", markingsValueText);

  rear_plate_markings.innerHTML = markingsValueText;
  rear_plate_markings.setAttribute("title", markingsValueText);
}

// -------------------------
// Recalculate width of plate
function recalculateWithOption() {
  var obj = document.getElementById("plate_size");
  var plate_elem = obj.options[obj.selectedIndex];

  var front_price = plate_elem.dataset.pricefront;
  var rear_price = plate_elem.dataset.pricerear;
  var both_price = plate_elem.dataset.priceboth;

  console.log(front_price);

  checkSizePrice(front_price, rear_price, both_price);
}

// -------------------------
// Change content and gallery
function change_content_and_gallery(plate_style_class) {
  console.log(plate_style_class);
  jQuery(".content_full_description").removeClass("active");
  jQuery(".variation_" + plate_style_class).addClass("active");
  console.log("variation_" + plate_style_class);
  // var current_content_full_description = document.getElementById('variation_'+plate_style_class);
  // current_content_full_description.classList.add('active');
}

    // -------------------------
    // Final Price Calculation
    function checkSizePrice(front_price, rear_price, both_price){
      // console.log('Front'+front_price);
      // console.log('Rear'+rear_price);
      // console.log('Both'+both_price);
      
      var platePrice = 0;
      var optionPlate = document.getElementById('plateoption').value;

      if(optionPlate == 'front'){
        platePrice = front_price;
        // console.log('front');
      }else if(optionPlate == 'rear'){
        platePrice = rear_price;
        // console.log('rear');
      }else{
        platePrice = both_price;
        //console.log(both_price);
      }

    }

// -------------------------
// Plate Style Change
function plate_stylechange(obj) {
  var front_plate_effect = document.getElementById("front_plate_effect");
  var rear_plate_effect = document.getElementById("rear_plate_effect");

  var style_field = document.getElementById("styleprice");

  front_plate_effect.className = "";
  rear_plate_effect.className = "";

  var plate_elem_effect = obj.options[obj.selectedIndex];

  var plate_style_class = plate_elem_effect.dataset.class;

  if (
    plate_style_class === "standard_plate_eco" ||
    plate_style_class === "4d_electric_plate" ||
    plate_style_class === "3d_electric_plate"
  ) {
    var badge__selection = document.getElementById("badge__selection");

    badge__selection.style.display = "none";

    // ----- NEW ADDITION 17 JUNE 2021 For ECO bits, update badge to show ECO colour one
    var front_plate_badge_image = document.getElementById(
      "front_plate_badge_image"
    );
    var rear_plate_badge_image = document.getElementById(
      "rear_plate_badge_image"
    );

    var front_plate = document.getElementById("front_plate_text");
    var rear_plate = document.getElementById("rear_plate_text");

    var front_plate_badge = document.getElementById("front_plate_badge");
    front_plate_badge.classList.add("active");
    front_plate_badge.style.background = "#289f31";
    front_plate_badge_image.src = "";
    front_plate.classList.add("has_badge");

    var rear_plate_badge = document.getElementById("rear_plate_badge");
    rear_plate_badge.classList.add("active");
    rear_plate_badge.style.background = "#289f31";
    rear_plate_badge_image.src = "";
    rear_plate.classList.add("has_badge");

    // Set Badge Style to 'NONE'
    jQuery(".badge_option").each(function (i, obj) {
      if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
      }
    });
    var badge_option_none = document.getElementById("none");
    badge_option_none.classList.add("active");
    reloadFittings();
  } else {
    var badge__selection = document.getElementById("badge__selection");
    badge__selection.style.display = "block";

    // ----- NEW ADDITION 17 JUNE 2021 For ECO bits, update badge to show ECO colour one
    var front_plate_badge_image = document.getElementById(
      "front_plate_badge_image"
    );
    var rear_plate_badge_image = document.getElementById(
      "rear_plate_badge_image"
    );

    var front_plate = document.getElementById("front_plate_text");
    var rear_plate = document.getElementById("rear_plate_text");

    var front_plate_badge = document.getElementById("front_plate_badge");
    front_plate_badge.classList.remove("active");
    front_plate_badge.style.background = "";
    front_plate_badge_image.src = "";
    front_plate.classList.remove("has_badge");

    var rear_plate_badge = document.getElementById("rear_plate_badge");
    rear_plate_badge.classList.remove("active");
    rear_plate_badge.style.background = "";
    rear_plate_badge_image.src = "";
    rear_plate.classList.remove("has_badge");

    // Set Badge Style to 'NONE'
    jQuery(".badge_option").each(function (i, obj) {
      if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
      }
    });
    var badge_option_none = document.getElementById("none");
    badge_option_none.classList.add("active");
    reloadFittings();
  }
  change_content_and_gallery(plate_style_class);

  var front_price = plate_elem_effect.dataset.pricefront;
  var rear_price = plate_elem_effect.dataset.pricerear;
  var both_price = plate_elem_effect.dataset.priceboth;
  var style_image = plate_elem_effect.dataset.image;
  var style_image_full = plate_elem_effect.dataset.imagefull;

  // Update image preview
  document.getElementById("plate_style_img").src = style_image;
  document.getElementById("plate_style_img_url").href = style_image_full;

  // Update style effect
  front_plate_effect.classList.add("style_" + plate_style_class);
  rear_plate_effect.classList.add("style_" + plate_style_class);

  // Update price for style
  style_field.value = both_price;
  
}

// -------------------------
    // Plate Size Change
    function plate_sizechage(obj){

      var front_plate = document.getElementById('front_plate');
      var rear_plate = document.getElementById('rear_plate');
      var text_field = document.getElementById('reg_name');

      var bothPlatesOption = document.getElementById('both');
      var frontPlateOption = document.getElementById('front');
      var rearPlateOption = document.getElementById('rear');

      if (front_plate.classList.contains('has_border')) {
        front_plate.className = 'has_border';
      }else{
        front_plate.className = '';
      }

      if (rear_plate.classList.contains('has_border')) {
        rear_plate.className = 'has_border';
      }else{
        rear_plate.className = '';
      }
      

      var plate_elem = obj.options[obj.selectedIndex];
      var plate_size = plate_elem.value;
      var character_size = plate_elem.dataset.characters;

      var front_price = plate_elem.dataset.pricefront;
      var rear_price = plate_elem.dataset.pricerear;
      var both_price = plate_elem.dataset.priceboth;


      // on change let's remove the acitve from front or read and add to BOTH
      if(plate_size === 'motor'){
        rearPlateOption.classList.add('active');
        var plateOptionActive = 'rear';
      }else if(plate_size === 'lambo'){
        var plateOptionActive = 'both';
      }else if(plate_size === 'small_motor'){
        rearPlateOption.classList.add('active');
        var plateOptionActive = 'rear';
      }else{
        rearPlateOption.classList.remove('active');
        frontPlateOption.classList.remove('active');
        bothPlatesOption.classList.add('active');
        var plateOptionActive = 'both';
      }
      document.getElementById("plateoption").value=plateOptionActive;  


      // console.log(both_price);

      checkSizePrice(front_price, rear_price, both_price);

      if(plate_size === 'motor'){

        jQuery('.border_trigger').show();
        // console.log('Motor plate');
        // Hide the front plate and both plates option

        bothPlatesOption.style.display = 'none';
        frontPlateOption.style.display = 'none';
        rearPlateOption.classList.add('active');

        // var newTruncatedText = truncate_plate_text(text_field,character_size);
        // plate_textchangeMotor(newTruncatedText);
      
      }else if(plate_size === 'lambo'){

        jQuery('.border_trigger').hide();

      }else if(plate_size === 'small_motor'){

        jQuery('.border_trigger').show();

        console.log('Small Motor plate');
        // Hide the front plate and both plates option

        bothPlatesOption.style.display = 'none';
        frontPlateOption.style.display = 'none';
        rearPlateOption.classList.add('active');

        // var newTruncatedText = truncate_plate_text(text_field,character_size);
        // plate_textchangeMotor(newTruncatedText);

      }else{

        jQuery('.border_trigger').show();

        bothPlatesOption.style.display = 'inline-block';
        frontPlateOption.style.display = 'inline-block';

        rearPlateOption.classList.remove('active');
        frontPlateOption.classList.remove('active');
        bothPlatesOption.classList.add('active');

      }

      var newTruncatedText = truncate_plate_text(text_field,character_size);
      plate_textchange(newTruncatedText);

      // Update size
      front_plate.classList.add('size_'+plate_size);
      rear_plate.classList.add('size_'+plate_size);

    }


// --------–----------------
// Auto select drop down value on load by PHP $_GET value
function setSelectedIndex(s, v) {
  for (var i = 0; i < s.options.length; i++) {
    if (s.options[i].text == v) {
      s.options[i].selected = true;
      return;
    }
  }
}
