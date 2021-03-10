import './editor.scss';
import './style.scss';
import {
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	RangeControl
} from '@wordpress/components';
const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'forte-press/flow-columns', {
	title: __( "Flow Columns  - Forte Press" ),
	icon: 'columns', 
	category: 'common', 
	keywords: [
		__( 'newspaper-block' ),
		__( 'Newspaper Block' ),
	],
	supports: {
		align: ['wide', 'full', 'center']
	},
	attributes: {
		align: {
			type: 'string',
			default: 'wide'
		},
		columns: {
			type: 'int',
			default: 3
		},
		minWidth: {
			type: 'int',
			default: 200
		},
		
		
	},
	


	/**
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {

		const { attributes, setAttributes } = props
		return (
			<div>

			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns' ) }
						 value={ attributes.columns }
						// onChange={ ( value ) => updateColumns( count, value ) }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						 min={ 2 }
						 max={ 6 }
					/>
					<RangeControl
						label={ __( 'Minimum Column Width' ) }
						 value={ attributes.minWidth }
						 onChange={ ( value ) => setAttributes( { minWidth: value } ) }
						 min={ 100 }
						 max={ 600 }
					/>
				</PanelBody>
				
			</InspectorControls>
			<div  className={ props.className } 
				style={{
					columns: attributes.minWidth + 'px ' + attributes.columns,
				}}
			>
				<InnerBlocks />
			</div>
			
			</div>
		);
	},

	/**
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {

		const { attributes } = props
	
		return (
			<div className={ props.className }
			style={{
				columns: attributes.minWidth + 'px ' + attributes.columns,
			}}>

				<InnerBlocks.Content />
			</div>
		);
	},
} );
