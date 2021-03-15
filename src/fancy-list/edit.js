/**
 * WordPress dependencies
 */
import { __, _x, isRTL } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import {
	RichText,
	BlockControls,
    InspectorControls,
	RichTextShortcut,
	useBlockProps,
} from '@wordpress/block-editor';
import { 
	PanelBody,
    PanelColorSettings,
    PanelRow,
    Fragment,
	RangeControl
} from '@wordpress/components';

export default function FancyListEdit( props ){

    const { attributes, setAttributes, className } = props
    return (
        <div>
        <BlockControls>

        </BlockControls>
        
            <InspectorControls>
                <PanelBody title={ __('Style') } >
                {/* <PanelColorSettings 
                        title={ __('Title Color', 'tar') }
                        colorSettings= { [ 
                            {
                            value: textColor,
                            onChange: (colorValue) => setAttributes ( { textColor: colorValue } ),
                            label: __('Color', 'tar'),
                            },
                         ] }
                    /> */}
                </PanelBody>
                
                
            </InspectorControls>
        
       
        <RichText 
            tagName="ol"
            multiline="li"
            className={ className }
            value={ attributes.content }
            onChange={ ( content ) => setAttributes( { content } ) }
            placeholder={ __( 'Enter text...', 'custom-block' ) }
            keepPlaceholderOnFocus={true}
        />
        </div>
    )
}