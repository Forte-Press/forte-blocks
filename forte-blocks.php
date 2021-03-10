<?php
/**
 * Plugin Name: Forte Blocks
 * Plugin URI: https://forte-press.com/blocks
 * Description: A collection of unique blocks for the WordPress block editor.
 * Author: phil_webs
 * Author URI: https://forte-press.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
