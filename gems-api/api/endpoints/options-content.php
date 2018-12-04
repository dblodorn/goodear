<?php
  function get_videos() {
    $posts = get_field('homepage_videos', 'option');
    if($posts):
      $data = array();
      foreach( $posts as $p ):
        $p_data = get_post($p->ID);
        $data[] = array(
          'post_id' => $p_data->ID,
          'slug' => $p_data->post_name,
          'title' => get_the_title($p_data),
          'thumbnail' => return_thumb_url($p->ID),
          'video_url' => get_field('video_url', $p->ID, false, false),
          'song_title' => get_field('song_title', $p->ID),
          'cover' => get_field('cover', $p->ID),
          'additional_information' => get_field('additional_information', $p->ID),
          'short_description' => get_field('short_description', $p->ID),
          'taxonomies' => array (
            'category' => return_taxonomy_array($p_data, 'category'),
            'brand' => return_taxonomy_array($p_data, 'brand'),
            'campaign' => return_taxonomy_array($p_data, 'campaign'),
            'agency' => return_taxonomy_array($p_data, 'agency'),
          )
        );
      endforeach;
    endif;
    return $data;
  }
  
  function options_data(){
    return array(
      'manifesto' => get_field('manifesto', 'option'),
      'home_videos' => get_videos(),
      'instagram' => get_field('instagram', 'option'),
      'facebook' => get_field('facebook', 'option'),
      'twitter' => get_field('twitter', 'option'),
    );
  }
?>
