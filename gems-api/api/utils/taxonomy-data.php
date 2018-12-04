<?php
  function taxonomy_data($post) {
    $p = $post->ID;
    return array(
      'category' => return_taxonomy_array($p, 'category'),
      'brand' => return_taxonomy_array($p, 'brand'),
      'campaign' => return_taxonomy_array($p, 'campaign'),
      'agency' => return_taxonomy_array($p, 'agency'),
    );
  }
?>
