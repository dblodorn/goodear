<?php
  function get_videos() {
    $posts = get_field('homepage_videos', 'option');
    if($posts):
      $data = array();
      foreach( $posts as $p ):
        $p_data = get_post($p->ID);
        $superstars = get_field('superstars', $p->ID);
        $cover = get_field('cover', $p->ID);
        $films = get_field('films', $p->ID);
        $hidden_gems = get_field('hidden_gems', $p->ID);
        $data[] = array(
          'post_id' => $p_data->ID,
          'slug' => $p_data->post_name,
          'title' => get_the_title($p_data),
          'thumbnail' => return_thumb_url($p->ID),
          'video_url' => get_field('video_url', $p->ID, false, false),
          'song_title' => get_field('song_title', $p->ID),
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
  
  function about_us_bios() {
    $data = array();
    if ( have_rows( 'profiles', 'option' ) ) :
      while ( have_rows( 'profiles', 'option' ) ) : the_row();
        $name = get_sub_field( 'name' );
        $data[] = array(
          'name' => $name,
          'slug' => seoUrl($name),
          'bio' => get_sub_field( 'bio' ),
          'photo' => get_sub_field( 'portrait_photo' ),
        );
      endwhile;
    else :
      $data = false;
    endif;
    return $data;
  }

  function about_us_images() {
    $data = array();
    if ( have_rows( 'profiles', 'option' ) ) :
      while ( have_rows( 'profiles', 'option' ) ) : the_row();
        $name = get_sub_field( 'name' );
        $data[] = array(
          'name' => $name,
          'slug' => seoUrl($name),
          'photo' => get_sub_field( 'portrait_photo' ),
        );
      endwhile;
    else :
      $data = false;
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
      'about_us' => array(
        'header' => get_field('about_us_header', 'option'),
        'statement' => get_field('about_us_statement', 'option'),
        'top_photo' => get_field('about_us_top_photo', 'option'),
        'team' => array(
          'photos' => about_us_images(),
          'bios' => about_us_bios(),
        )
      )
    );
  }
?>
