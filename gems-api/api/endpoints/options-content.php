<?php
  function options_data(){
    return array(
      'manifesto' => get_field('manifesto', 'option'),
      'instagram' => get_field('instagram', 'option'),
      'facebook' => get_field('facebook', 'option'),
      'twitter' => get_field('twitter', 'option'),
    );
  }
?>
