$(function() {
  $('.opskrifter').hide();
  $('.ingredienser').hide();
  $('.howto').hide();
  // Repeted recipes are treated differently: they do not unfold until explicitly clicked
  $('.insertedIngredienser').hide();
  $('.insertedHowto').hide();
  // The a link is shown and the about button is hidden if no javascript is present
  $('#fallBackLink').hide();
  $('#about').show();
  $('#about').on('click', function() {
    window.location = 'aboutTrinForTrin.html'
  });


  $('#foldOutFoldIn').on('click', function() {
    if ($(this)[0].value == 'unfold') {
      showIndex();
    } else if ($(this)[0].value == 'unfoldAll') {
      showAll();
    }
    else {
      hideAll();
    }

  });


  let direction = 1;
  let originalFontSize = parseInt($('body').css("font-size"));
  let fontSize = originalFontSize;
  let step = 5;
  $('#textSize').on('click', function() {  // Cycle between fontsizes normal-big-biggest-big-normal-big-...
    fontSize += direction * step;
    if (fontSize == originalFontSize + 2 * step) {
      direction = -1;
    } else if (fontSize == originalFontSize) {
      direction = 1;
    }
    $('body').css("font-size", fontSize);
    $('.controlButton').css("font-size", fontSize);
  })

  $('p').on('click', function() {
    if ($(this).children()[0]) {
      $(this).children()[0].checked = !$(this).children()[0].checked;
    }
  });


  function hideAll() {
    $('.opskrifter').hide(500);
    $('.ingredienser').hide(500);
    $('.howto').hide(500);
    $('.insertedIngredienser').hide(500);
    $('.insertedHowto').hide(500);

    $('#foldOutFoldIn')[0].value = 'unfold';
    $('#foldOutFoldIn')[0].textContent = 'Unfold index';
  }


  function showIndex() {
    $('.opskrifter').show();
    $('#foldOutFoldIn')[0].value = 'unfoldAll';
    $('#foldOutFoldIn')[0].textContent = 'Unfold everything (for searching)';
  }


  function showAll() {
    $('.opskrifter').show();
    $('.ingredienser').show();
    $('.howto').show();

    $('#foldOutFoldIn')[0].value = 'fold';
    $('#foldOutFoldIn')[0].textContent = 'Fold everything';
  }

  // Fold everything
  $('.slut').on('click', function() {
    if ( $('.slut')[0].value == 'sideDishShown') {
      $('.kategori').not('animated').slideToggle();
      $('.recipe').not('animated').slideToggle();
      $('.rice').not('animated').slideToggle();
      $('.slut')[0].value = 'noSideDish';
    }
    $('input').prop("checked", false);
    hideAll();
  });

// TODO: Kategori'es disapear if pressed during an insertedRecipe showing
  $('.oversigt').on('click', '.kategori', function(event) {
    if ( $('.slut')[0].value != 'sideDishShown') {
      event.preventDefault();
      $(this).next('.opskrifter').not('animated').slideToggle();
    }
  });

  $('.opskrifter').on('click', '.recipe', function(event) {
    if ( $('.slut')[0].value != 'sideDishShown') {
      event.preventDefault();
      $('.ingredienser').hide(500);
      $('.howto').hide(500);
      $(this).next('.ingredienser').not('animated').show();
      $(this).next('.ingredienser').next('.howto').not('animated').show();
    }
  });

  let sideDishes = {
                    showBakedPotatoes: '.bakedPotatoes',
                    showBakedSesamePotatoes: '.bakedSesamePotatoes',
                    showButterCabbage: '.butterCabbage',
                    showCarrotSalad: '.carrotSalad',
                    showChappaties: '.chappaties',
                    showGreenSalad: '.greenSalad',
                    showHasselbachs: '.hasselbachs',
                    showHomemadePasta: '.homemadePasta',
                    showMashedPotatoes: '.mashedPotatoes',
                    showPasta: '.pasta',
                    showPita: '.pita',
                    showRice: '.rice',
                    showRootVegs: '.rootVegs',
                    showSageRolls: '.sageRolls',
                    showTrimitri: '.trimitri',
                    showTortilla: '.tortilla'
                  };
  // TODO: Baharat as inserted recipe

// Sets an eventlistener for each sidedish when this javascript file runs at start
  for (let sDish in sideDishes) {
    $('.' + sDish).on('click', function(event) {
      $('.kategori').not('animated').slideToggle();
      $('.recipe').not('animated').slideToggle();
      $(sideDishes[sDish]).not('animated').slideToggle();
      if ($('.slut')[0].value != 'sideDishShown') {
        $('.slut')[0].value = 'sideDishShown';
      } else {
        $('.slut')[0].value = 'noSideDish';
      }
    });
  };

  // $('.showRice').on('click', function(event) {
  //   $('.kategori').not('animated').slideToggle();
  //   $('.recipe').not('animated').slideToggle();
  //   $('.rice').not('animated').slideToggle();
  //   if ($('.slut')[0].value != 'sideDishShown') {
  //     $('.slut')[0].value = 'sideDishShown';
  //   } else {
  //     $('.slut')[0].value = 'noSideDish';
  //   }
  // });
})
