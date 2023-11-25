function showPopup(member) {
    var popup = document.getElementById('popup');
    var popupContent = document.getElementById('popup-content');
    
    // members disciption here for rn
    var descriptions = {
      'Script': 'bro thinks hes the bost',
      'Hellside': 'skidside',
      'Luci': 'the real boss',
      'Bond': 'random',
      'Drizzy': 'biggest btc larp ever',
      'Hunter': 'com slut',
      'Salmon': 'that one fish guy',
      'Warzone': 'warzone'
    };
    
    popupContent.innerHTML = '<h2>' + member + '</h2><p>' + descriptions[member] + '</p>';
    
    popup.classList.remove('hidden-popup');
  }
  
  document.addEventListener('click', function(event) {
    if (event.target.closest('.hidden-popup')) {
      var popup = document.getElementById('popup');
      popup.classList.add('hidden-popup');
    }
  });