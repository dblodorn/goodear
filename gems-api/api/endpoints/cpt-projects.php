<?php
  // ALL PROJECTS CPT
  function return_videos($post) {
    $description = get_field('description', $post->ID);
    return array (
      'post_id' => $post->ID,
      'title' => $post->post_title,
      'slug' => $post->post_name,
      'thumbnail' => return_thumb_url($post->ID),
      'template' => 'single-video',
      'theme' => get_field('theme', $post->ID),
      'short_description' => get_field('short_description', $post->ID),
      'video_url' => get_field('video_url', $p->ID, false, false),
      'song_title' => get_field('song_title', $p->ID),
      'cover' => get_field('cover', $p->ID),
      'additional_information' => get_field('additional_information', $p->ID),
      'short_description' => get_field('short_description', $p->ID),
      'taxonomies' => taxonomy_data($post),
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