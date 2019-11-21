<?php
  // ALL PROJECTS CPT
  function return_videos($post) {
    return array (
      'post_id' => $post->ID,
      'title' => $post->post_title,
      'slug' => $post->post_name,
      'thumbnail' => return_thumb_url($post->ID),
      'thumbnail_arr' => return_thumb_arr($post->ID),
      'short_description' => get_field('short_description', $post->ID),
      'video_url' => get_field('video_url', $post->ID, false, false),
      'taxonomies' => taxonomy_data($post),
      'song_title' => get_field('song_title', $post->ID),
      'additional_information' => get_field('additional_information', $post->ID),
      'short_description' => get_field('short_description', $post->ID),
    );
  }

  function cpt_videos(){
    $args = array(
      'post_type' => 'video',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = return_videos($post);
      endwhile;
    endif;
    return $data;
  }
?>