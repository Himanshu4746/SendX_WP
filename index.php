<?php
/**
* Plugin Name: SendX
* Description: Basic WordPress Plugin for blog Customisation.
* Version:     1.0
* Author:      Himanshu Kumar
* Author URI:  https://himanshu4746.github.io/
* License:     GPL2
*/

/** Step 2 (from text above). */
add_action( 'admin_menu', 'my_plugin_menu' );

/** Step 1. */
function my_plugin_menu() {
	add_options_page( 'My Plugin Options', 'SendX', 'manage_options', 'my-unique-identifier', 'my_plugin_options' );
}

/** Step 3. */
function my_plugin_options() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	} ?>
	<div>
		<h1> Settings </h1>
		<a href="#" target="_blank">Take a Tour</a>
		<a href="#" target="_blank">Support</a>
		<div id="confirm"></div>
		<div>
			<h2>Popup Message<h2>
			<input type="text" id="msg" value=""><br>
			<button onclick="myFunction();">Save Changes</button>

			<div id="demo"></div>
			<script src="../wp-content/plugins/SendX/js.cookie.js"></script>
			<script>
				function myFunction(){
					var text = document.getElementById("msg").value;
					var display = "Your message is: " + text;
					document.getElementById("demo").innerHTML = display;
					//Cookies.set('my_id',text, { expires: 7 });
					if(text){
						Cookies.set('my_id', text , { expires: 7 });
						document.getElementById("confirm").innerHTML = "Settings Saved";
					}
				}
			</script>
		</div>
		
	</div>	
	<?php
}

function fxn_load_custom_script(){
	//wp_register_style('custom_plugin_css',plugin_dir_url(__FILE__).ACCID.'/main.css',false,'0.1');
	//wp_enqueue_style('custom_plugin_css');
	//wp_enqueue_script('custom_plugin_js','<URL>');
	wp_enqueue_script('custom_plugin_js',plugin_dir_url(__FILE__).'/script.js');
}
//add_action( 'admin_enqueue_scripts', 'fxn_load_custom_script');
add_action( 'wp_enqueue_scripts', 'fxn_load_custom_script');
?>