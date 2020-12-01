<?php

add_action( 'after_switch_theme', 'fs_flush_rewrite_rules' );

function fs_flush_rewrite_rules() {
	flush_rewrite_rules();
}

add_action( 'init', 'video_cpt' );

function video_cpt() {
  $labels = array(
    'name'               => _x( 'Videos', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Videos', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Videos', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Videos', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Video', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Video', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Videos', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Videos', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Videos', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Videos', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Videos', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Video:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Video found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Video found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'videos' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('brand', 'agency', 'campaign', 'category'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-format-video',
    'show_in_rest'       => true,
    'rest_base'          => 'videos-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'page-attributes', 'thumbnail' )
  );
  register_post_type( 'video', $args );
}

add_action( 'init', 'hidden_video_cpt' );

function hidden_video_cpt() {
  $labels = array(
    'name'               => _x( 'Hidden Videos', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Hidden Videos', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Hidden Videos', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Hidden Videos', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Hidden Video', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Hidden Video', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Hidden Videos', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Hidden Videos', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Hidden Videos', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Hidden Videos', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Hidden Videos', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Hidden Video:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Hidden Video found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Hidden Video found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'videos' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('brand', 'agency', 'campaign', 'category'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-hidden',
    'show_in_rest'       => true,
    'rest_base'          => 'hidden-videos-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'page-attributes', 'thumbnail' )
  );
  register_post_type( 'hiden_video', $args );
}

?>
