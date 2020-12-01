<?php
  // ALL PROJECTS CPT
  function return_agency($id) {
    $list = get_the_terms($id, 'agency');
    if ($list) {
      return array( $list[0]->name );
    } else {
      return false;
    }
  }
  
  
  function return_videos($post) {
    $p_data = get_post($post->ID);
    return array (
      'post_id' => $post->ID,
      'title' => $post->post_title,
      'slug' => $post->post_name,
      'thumbnail' => return_thumb_url($post->ID),
      'thumbnail_arr' => return_thumb_arr($post->ID),
      'short_description' => get_field('short_description', $post->ID),
      'video_url' => get_field('video_url', $post->ID, false, false),
      'taxonomies' => array (
        'category' => return_taxonomy_array($p_data, 'category'),
        'brand' => return_taxonomy_array($p_data, 'brand'),
        'campaign' => return_taxonomy_array($p_data, 'campaign'),
        'agency' => return_agency($p_data->ID),
      ),
      'song_title' => get_field('song_title', $post->ID),
      'additional_information' => get_field('additional_information', $post->ID),
      'short_description' => get_field('short_description', $post->ID)
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