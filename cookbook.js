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

  $('.slut')[0].value = 'noSideDish'; // Initialise variable used for tracking if sidedishes are open

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
    if ( $('.slut')[0].value != 'noSideDish') { // If a sidedish is open it needs to be closed before toggling everything shut
      $('.kategori').not('animated').slideToggle();
      $('.recipe').not('animated').slideToggle();
      let sideDishClass = $('.slut')[0].value; // The current sidedish is stored in $('.slut')[0].value
      $(sideDishClass).not('animated').slideToggle(); // Toggles open sidedishes.
      $('.slut')[0].value = 'noSideDish';
    }
    $('input').prop("checked", false);
    hideAll();
  });

  $('.oversigt').on('click', '.kategori', function(event) {
    if ( $('.slut')[0].value == 'noSideDish') {
      event.preventDefault();
      $(this).next('.opskrifter').not('animated').slideToggle();
    }
  });

  $('.opskrifter').on('click', '.recipe', function(event) {
    if ( $('.slut')[0].value == 'noSideDish') {
      event.preventDefault();
      $('.ingredienser').hide(500);
      $('.howto').hide(500);
      $(this).next('.ingredienser').not('animated').show();
      $(this).next('.ingredienser').next('.howto').not('animated').show();
    }
  });

  // Sidedishes are shown by toggling classes. This means that the Kategori classes involved needs the same class as the sidedishes in the Kategori
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
      if ($('.slut')[0].value == sideDishes[sDish] || $('.slut')[0].value == 'noSideDish') {
        $('.kategori').not('animated').slideToggle();
        $('.recipe').not('animated').slideToggle();
        $(sideDishes[sDish]).not('animated').slideToggle();
        if ($('.slut')[0].value == 'noSideDish') {
          $('.slut')[0].value = sideDishes[sDish];
          $(this).css({'border-style': 'inset', 'background-color': 'rgb(179, 244, 255)'});
        } else {
          $('.slut')[0].value = 'noSideDish';
          $(this).css({'border-style': 'outset', 'background-color': 'rgb(205, 248, 255)'});
        }
      } else {
        alert('Please close sidedish before proceeding');
      }
    });
  };

})
