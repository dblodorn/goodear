<?php

//-------------------------------------------------------------------
// CUSTOM TAXONOMIES
//-------------------------------------------------------------------

// brand taxonomy
add_action( 'init', 'cover_taxonomy', 30 );
  function cover_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Cover', 'taxonomy general name' ),
    'singular_name'         => _x( 'Cover', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Cover' ),
    'all_items'             => __( 'All Cover' ),
    'parent_item'           => __( 'Parent Cover' ),
    'parent_item_colon'     => __( 'Parent Capabilitie:' ),
    'edit_item'             => __( 'Edit Cover' ),
    'update_item'           => __( 'Update Cover' ),
    'add_new_item'          => __( 'Add New Cover' ),
    'new_item_name'         => __( 'New Cover Name' ),
    'menu_name'             => __( 'Cover' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'cover' ),
    'show_in_rest'          => true,
    'rest_base'             => 'cover-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'cover', array( 'video' ), $args );
}

// brand taxonomy
add_action( 'init', 'brand_taxonomy', 30 );
  function brand_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Brands', 'taxonomy general name' ),
    'singular_name'         => _x( 'Brand', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Brands' ),
    'all_items'             => __( 'All Brands' ),
    'parent_item'           => __( 'Parent Brands' ),
    'parent_item_colon'     => __( 'Parent Brand:' ),
    'edit_item'             => __( 'Edit Brand' ),
    'update_item'           => __( 'Update Brand' ),
    'add_new_item'          => __( 'Add New Brand' ),
    'new_item_name'         => __( 'New Brand Name' ),
    'menu_name'             => __( 'Brands' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'brand' ),
    'show_in_rest'          => true,
    'rest_base'             => 'brand-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'brand', array( 'video' ), $args );
}

// agency taxonomy
add_action( 'init', 'agency_taxonomy', 30 );
  function agency_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Agencies', 'taxonomy general name' ),
    'singular_name'         => _x( 'Agency', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Agencies' ),
    'all_items'             => __( 'All Agencies' ),
    'parent_item'           => __( 'Parent Agencies' ),
    'parent_item_colon'     => __( 'Parent agency:' ),
    'edit_item'             => __( 'Edit agency' ),
    'update_item'           => __( 'Update agency' ),
    'add_new_item'          => __( 'Add New agency' ),
    'new_item_name'         => __( 'New agency Name' ),
    'menu_name'             => __( 'Agencies' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'agency' ),
    'show_in_rest'          => true,
    'rest_base'             => 'agency-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'agency', array( 'video' ), $args );
}

// campaign taxonomy
add_action( 'init', 'campaign_taxonomy', 30 );
  function campaign_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Campaigns', 'taxonomy general name' ),
    'singular_name'         => _x( 'campaign', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Campaigns' ),
    'all_items'             => __( 'All Campaigns' ),
    'parent_item'           => __( 'Parent Campaigns' ),
    'parent_item_colon'     => __( 'Parent campaign:' ),
    'edit_item'             => __( 'Edit campaign' ),
    'update_item'           => __( 'Update campaign' ),
    'add_new_item'          => __( 'Add New campaign' ),
    'new_item_name'         => __( 'New campaign Name' ),
    'menu_name'             => __( 'Campaigns' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'campaign' ),
    'show_in_rest'          => true,
    'rest_base'             => 'campaign-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'campaign', array( 'video' ), $args );
}

//-------------------------------------------------------------------
// CUSTOM TAXONOMY FILTER DROPDOWNS IN ADMIN
//-------------------------------------------------------------------

function tsm_filter_post_type_by_taxonomy($post_type, $taxonomy) {
	global $typenow;
	if ($typenow == $post_type) {
		$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
		$info_taxonomy = get_taxonomy($taxonomy);
		wp_dropdown_categories(array(
			'show_option_all' => __("All {$info_taxonomy->label}"),
			'taxonomy'        => $taxonomy,
			'name'            => $taxonomy,
			'orderby'         => 'name',
			'selected'        => $selected,
			'show_count'      => true,
			'hide_empty'      => true,
		));
	};
}

function filter_project_brand() {
  tsm_filter_post_type_by_taxonomy('video', 'brand');
}

function filter_project_agency() {
  tsm_filter_post_type_by_taxonomy('video', 'agency');
}

function filter_project_cover() {
  tsm_filter_post_type_by_taxonomy('video', 'cover');
}

function filter_project_campaing() {
  tsm_filter_post_type_by_taxonomy('video', 'campaign');
}

add_action('restrict_manage_posts', 'filter_project_brand');
add_action('restrict_manage_posts', 'filter_project_agency');
add_action('restrict_manage_posts', 'filter_project_cover');
add_action('restrict_manage_posts', 'filter_project_campaign');

// NEXT
function tsm_convert_id_to_term_in_query_brand($query) {
	global $pagenow;
	$post_type = 'video';
	$taxonomy  = 'brand';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_agency($query) {
	global $pagenow;
	$post_type = 'video';
	$taxonomy  = 'agency';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_cover($query) {
	global $pagenow;
	$post_type = 'video';
	$taxonomy  = 'cover';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_campaign($query) {
	global $pagenow;
	$post_type = 'video';
	$taxonomy  = 'campaign';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

add_filter('parse_query', 'tsm_convert_id_to_term_in_query_brand');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_agency');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_cover');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_campaign');

?>