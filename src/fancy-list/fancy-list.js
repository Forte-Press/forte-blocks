import './editor.scss';
/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
// import { list as icon } from '@wordpress/icons';
import {
	RichText,
	BlockControls,
	RichTextShortcut,
	useBlockProps,
} from '@wordpress/block-editor';
/**
 * Internal dependencies
 */
import edit from './edit';
// import save from './save';
// const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'forte-press/fancy-list', {
	title: __( "Fancy List  - Forte Press" ),
	icon: 'editor-ol', 
	category: 'common', 
	keywords: [
		__( 'numbered list' ),
		__( 'list' ),
	],
	attributes: {
	},
	


	/**
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	// edit: ( props ) => {

		
	// 	return (			
	// 		<div  className={ props.className } >
	// 			<h1>Hello List</h1>
			
	// 		</div>
	// 	);
	// },
    edit,

	/**
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {

		const { attributes } = props
	
		return (
			<RichText.Content tagName="ol" value={ attributes.content } />
		);
	},
} );


