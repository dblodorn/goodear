<?php
  function get_videos() {
    $posts = get_field();
    if($posts):
      $data = array('homepage_videos', 'option');
      foreach( $posts as $p ):
        $p_data = get_post($p->ID);
        $data[] = array(
          'post_id' => $p_data->ID,
          'slug' => $p_data->post_name,
          'title' => get_the_title($p_data),
          'thumbnail' => get_the_post_thumbnail_url($p->ID),
          'video_url' => get_field('video_url', $p->ID, false, false),
          'taxonomies' => taxonomy_data($post),
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
