const C_H1 = ({children}) => {
  return (
    <h1 className='text-3xl font-bold'>{children}</h1>
  )
}

const C_H2 = ({children}) => {
  return (
    <h2 className='text-lg font-bold'>{children}</h2>
  )
}

export default function TailwindCSS() {
  return (
    <>
      <div className='px-8'>
      <h1 className='text-3xl'>Tailwind CSS Cheat-sheets</h1>
      <hr className="mb-5"/>
      <div className='flex'>
        <div className="w-1/3">
          <C_H1>LAYOUT</C_H1>
          <C_H2>Container</C_H2>
          <p>
            .container
          </p>
          <C_H2>Box Sizing</C_H2>
          <p>
            .box-[border|content]
          </p>
          <C_H2>Display</C_H2>
          <p>
            .block<br/>
            .inline-block<br/>
            .inline<br/>
            .flex<br/>
            .inline-flex<br/>
            .table<br/>
            .table-caption<br/>
            .table-cell<br/>
            .table-column<br/>
            .table-column-group<br/>
            .table-footer-group<br/>
            .table-header-group<br/>
            .table-row-group<br/>
            .table-row<br/>
            .flow-root<br/>
            .grid<br/>
            .inline-grid<br/>
            .contents<br/>
            .hidden
          </p>
          <C_H2>Floats</C_H2>
          <p>
            .float-[right|left|none]<br/>
            .clearfix
          </p>
          <C_H2>Clear</C_H2>
          <p>
            .clear-[left|right|both|none]
          </p>
          <C_H2>Object Fit</C_H2>
          <p>
            .object-[contain|cover|fill|none|scale-down]
          </p>
          <C_H2>Object Position</C_H2>
          <p>
            .object-bottom<br/>
            .object-center<br/>
            .object-left<br/>
            .object-left-bottom<br/>
            .object-left-top<br/>
            .object-right<br/>
            .object-right-bottom<br/>
            .object-right-top<br/>
            .object-top
          </p>
          <C_H2>Overflow</C_H2>
          <p>
            .overflow-[auto|hidden|visible|scroll]<br/>
            .overflow-x-[auto|hidden|visible|scroll]<br/>
            .overflow-y-[auto|hidden|visible|scroll]<br/>
            .scrolling-[touch|auto]
          </p>
          <C_H2>Overscroll Behavior</C_H2>
          <p>
            .overscroll-[auto|contain|none]<br/>
            .overscroll-x-[auto|contain|none]<br/>
            .overscroll-y-[auto|contain|none]
          </p>
          <C_H2>Position</C_H2>
          <p>
            .static<br/>
            .fixed<br/>
            .absolute<br/>
            .relative<br/>
            .sticky
          </p>
          <C_H2>Top / Right / Bottom / Left</C_H2>
          <p>
            .inset-[0|auto]<br/>
            .inset-y-[0|auto]<br/>
            .inset-x-[0|auto]<br/>
            .top-[0|auto]<br/>
            .right-[0|auto]<br/>
            .bottom-[0|auto]<br/>
            .left-[0|auto]
          </p>
          <C_H2>Visibility</C_H2>
          <p>
            .visible<br/>
            .invisible
          </p>
          <C_H2>Z-index</C_H2>
          <p>
            .z-[0|10|20|30|40|50|auto]
          </p>
          <br/>
          <C_H1>FLEXBOX</C_H1>
          <C_H2>Flex Direction</C_H2>
          <p>
            .flex-row<br/>
            .flex-row-reverse<br/>
            .flex-col<br/>
            .flex-col-reverse
          </p>
          <C_H2>Flex Wrap</C_H2>
          <p>
            .flex-wrap<br/>
            .flex-wrap-reverse<br/>
            .flex-no-wrap
          </p>
          <C_H2>Flex</C_H2>
          <p>
            .flex-1<br/>
            .flex-auto<br/>
            .flex-initial<br/>
            .flex-none
          </p>
          <C_H2>Flex Grow</C_H2>
          <p>
            .flex-grow-0<br/>
            .flex-grow
          </p>
          <C_H2>Flex Shrink</C_H2>
          <p>
            .flex-shrink-0<br/>
            .flex-shrink
          </p>
          <C_H2>Order</C_H2>
          <p>
            .order-[1|2|3|4|5|6|7|8|9|10|11|12]<br/>
            .order-[first|last|none]
          </p>
          <br/>
          <C_H1>GRID</C_H1>
          <C_H2>Grid Template Columns</C_H2>
          <p>
            .grid-cols-[1|2|3|4|5|6|7|8|9|10|11|12|none]
          </p>
          <C_H2>Grid Columns Start / End</C_H2>
          <p>
            .col-auto<br/>
            .col-span-[1|2|3|4|5|6|7|8|9|10|11|12|full]<br/>
            .col-start-[1|2|3|4|5|6|7|8|9|10|11|12|13|auto]<br/>
            .col-end-[1|2|3|4|5|6|7|8|9|10|11|12|13|auto]
          </p>
          <C_H2>Grid Template Rows</C_H2>
          <p>
            .grid-rows-[1|2|3|4|5|6|none]
          </p>
          <C_H2>Grid Rows Start / End</C_H2>
          <p>
            .row-auto<br/>
            .row-span-[1|2|3|4|5|6|full]<br/>
            .row-start-[1|2|3|4|5|6|7|auto]<br/>
            .row-end-[1|2|3|4|5|6|7|auto]
          </p>
          <C_H2>Grid Auto Flow</C_H2>
          <p>
            .grid-flow-row<br/>
            .grid-flow-col<br/>
            .grid-flow-row-dense<br/>
            .grid-flow-col-dense
          </p>
          <C_H2>Grid Auto Columns</C_H2>
          <p>
            .auto-cols-auto<br/>
            .auto-cols-min<br/>
            .auto-cols-max<br/>
            .auto-cols-fr
          </p>
          <C_H2>Grid Auto Rows</C_H2>
          <p>
            .auto-rows-auto<br/>
            .auto-rows-min<br/>
            .auto-rows-max<br/>
            .auto-rows-fr
          </p>
          <C_H2>Gap</C_H2>
          <p>
            .gap-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]<br/>
            .gap-x-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]<br/>
            .gap-y-[0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64|px]
          </p>
        </div>
        <div className="w-1/3">
          <C_H1>BOX ALIGNMENT</C_H1>
          <C_H2>Justify Content</C_H2>
          <p>
            .justify-[start|end|center|between|around|evenly]
          </p>
          <C_H2>Justify Items</C_H2>
          <p>
            .justify-items-[auto|start|end|center|stretch]
          </p>
          <C_H2>Justify Self</C_H2>
          <p>
            .justify-self-[auto|start|end|center|stretch]
          </p>
          <C_H2>Align Content</C_H2>
          <p>
            .content-[center|start|end|between|around|evenly]
          </p>
          <C_H2>Align Items</C_H2>
          <p>
            .items-[start|end|center|baseline|stretch]
          </p>
          <C_H2>Align Self</C_H2>
          <p>
            .self-[auto|start|end|center|stretch]
          </p>
          <C_H2>Place Content</C_H2>
          <p>
            .place-content-[center|start|end|between|around|evenly|stretch]
          </p>
          <C_H2>Place Items</C_H2>
          <p>
            .place-items-[auto|start|end|center|stretch]
          </p>
          <C_H2>Place Self</C_H2>
          <p>
            .place-self-[auto|start|end|center|stretch]
          </p>
          <br/>
          <C_H1>SPACING</C_H1>
          <C_H2>Padding</C_H2>
          <p>
            .[p|py|px|pt|pr|pb|pl]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px]
          </p>
          <C_H2>Margin</C_H2>
          <p>
            .[m|my|mx|mt|mr|mb|ml]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|auto|px]<br/>
            .-[m|my|mx|mt|mr|mb|ml]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px]
          </p>
          <C_H2>Space Between</C_H2>
          <p>
            .space-[x|y]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|auto|px|reverse]<br/>
            .-space-[x|y]-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|px]
          </p>
          <br/>
          <C_H1>SIZING</C_H1>
          <C_H2>Width</C_H2>
          <p>
            .w-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|auto|px]<br/>
            .w-[1/2|1/3|2/3|1/4|2/4|3/4]<br/>
            .w-[1/5|2/5|3/5|4/5]<br/>
            .w-[1/6|2/6|3/6|4/6|5/6]<br/>
            .w-[1/12|2/12|3/12|4/12|5/12|6/12|7/12|8/12|9/12|10/12|11/12]<br/>
            .w-[full|screen]
          </p>
          <C_H2>Min-Width</C_H2>
          <p>
            .min-w-[0|full]
          </p>
          <C_H2>Max-Width</C_H2>
          <p>
            .max-w-[none|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|full]<br/>
            .max-w-screen-[sm|md|lg|xl]
          </p>
          <C_H2>Height</C_H2>
          <p>
            .h-[0|1|2|3|4|5|6|10|12|16|20|24|32|40|48|56|64|auto|px|full|screen]
          </p>
          <C_H2>Min-Height</C_H2>
          <p>
            .min-h-[0,full,screen]
          </p>
          <C_H2>Max-Height</C_H2>
          <p>
            .max-h-[full,screen]
          </p>
          <br/>
          <C_H1>TYPOGRAPHY</C_H1>
          <C_H2>Font Family</C_H2>
          <p>
            .font-[sans|serif|mono]
          </p>
          <C_H2>Font Size</C_H2>
          <p>
            .text-[xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl]
          </p>
          <C_H2>Font Smoothing</C_H2>
          <p>
            .antialiased<br/>
            .subpixel-antialiased
          </p>
          <C_H2>Font Style</C_H2>
          <p>
            .italic<br/>
            .not-italic
          </p>
          <C_H2>Font Weight</C_H2>
          <p>
            .font-[hairline|thin|light|normal|medium|semibold|bold|extrabold|black]
          </p>
          <C_H2>Font Variant Numeric</C_H2>
          <p>
            .normal-nums<br/>
            .ordinal<br/>
            .slashed-zero<br/>
            .lining-nums<br/>
            .oldstyle-nums<br/>
            .proportional-nums<br/>
            .tabular-nums<br/>
            .diagonal-fractions<br/>
            .stacked-fractions
          </p>
          <C_H2>Letter Spacing</C_H2>
          <p>
            .tracking-[tighter|thigh|normal|wide|wider|widest]
          </p>
          <C_H2>Line Height</C_H2>
          <p>
            .leading-[3|4|5|6|7|8|9|10|none|tight|snug|normal|relaxed|loose]
          </p>
          <C_H2>Line Style Type</C_H2>
          <p>
            .list-[none|disc|decimal]
          </p>
          <C_H2>Line Style Position</C_H2>
          <p>
            .list-[inside|outside]
          </p>
          <C_H2>Placeholder Color</C_H2>
          <p>
            .placeholder-[transparent|current|black|white]<br/>
            .placeholder-[color]-[100|200|300|400|500|600|700|800|900]
          </p>
          <C_H2>Placeholder Opacity</C_H2>
          <p>
            .placeholder-opacity-[0|25|50|75|100]
          </p>
          <C_H2>Text Align</C_H2>
          <p>
            .text-[left|center|right|justify]
          </p>
          <C_H2>Text Color</C_H2>
          <p>
            .text-[transparent|current|black|white]<br/>
            .text-[color]-[100|200|300|400|500|600|700|800|900]
          </p>
          <C_H2>Text Opacity</C_H2>
          <p>
            .text-opacity-[0|25|50|75|100]
          </p>
          <C_H2>Text Decoration</C_H2>
          <p>
            .underline<br/>
            .line-through<br/>
            .no-underline
          </p>
          <C_H2>Text Transform</C_H2>
          <p>
            .uppercase<br/>
            .lowercase<br/>
            .capitalize<br/>
            .normal-case
          </p>
          <C_H2>Vertical Align</C_H2>
          <p>
            .align-[baseline|top|middle|bottom|text-top|text-bottom]
          </p>
          <C_H2>Whitespace</C_H2>
          <p>
            .whitespace-[normal|no-wrap|pre|pre-line|pre-wrap]
          </p>
          <C_H2>Word Break</C_H2>
          <p>
            .break-[normal|words|all]<br/>
            .truncate
          </p>
          <br/>
          <C_H1>TABLES</C_H1>
          <C_H2>Border Collapse</C_H2>
          <p>
            .border-[collapse|seperate]
          </p>
          <C_H2>Table Layout</C_H2>
          <p>
            .table-[auto|fixed]
          </p>
          <br/>
          <C_H1>EFFECTS</C_H1>
          <C_H2>Box Shadow</C_H2>
          <p>
            .shadow<br/>
            .shadow-[xs|sm|md|lg|xl|2xl|inner|outline|none]
          </p>
          <C_H2>Opacity</C_H2>
          <p>
            .opacity-[0|25|50|75|100]
          </p>
          <br/>
          <C_H2>BREAKPOINT: sm:640px | md:768px | lg:1024px | xl:1280px</C_H2>
          <br/>
          <C_H2>COLORS: transparent, current, black, white, grays, reds, oranges, yellows, greens, teals, blues, indigos, purples, pinks</C_H2>
          <br/>
          <C_H2>SUPPORTED VARIANTS: responsive|group-hover|focus-within|first|last|odd|even|hover|focus|active|visited|disabled|motion-safe|motion-reduce</C_H2>
        </div>
        <div className="w-1/3">
          <C_H1>Background</C_H1>
          <C_H2>Background Attachment</C_H2>
          <p>
            .bg-[fixed|local|scroll]
          </p>
          <C_H2>Background Clip</C_H2>
          <p>
            .bg-clip-[border|padding|content|text]
          </p>
          <C_H2>Background Color</C_H2>
          <p>
            .bg-[transparent|current|black|white]<br/>
            .bg-[color]-[100|200|300|400|500|600|700|800|900]
          </p>
          <C_H2>Background Opacity</C_H2>
          <p>
            .bg-opacity-[0|25|50|75|100]
          </p>
          <C_H2>Background Position</C_H2>
          <p>
            .bg-bottom<br/>
            .bg-center<br/>
            .bg-left<br/>
            .bg-left-bottom<br/>
            .bg-left-top<br/>
            .bg-right<br/>
            .bg-right-bottom<br/>
            .bg-right-top<br/>
            .bg-top
          </p>
          <C_H2>Background Repeat</C_H2>
          <p>
            .bg-repeat<br/>
            .bg-no-repeat<br/>
            .bg-repeat-x<br/>
            .bg-repeat-y<br/>
            .bg-repeat-round<br/>
            .bg-repeat-space
          </p>
          <C_H2>Background Size</C_H2>
          <p>
            .bg-[auto|cover|contain]
          </p>
          <C_H2>Background Image</C_H2>
          <p>
            .bg-none<br/>
            .bg-gradient-to[t|tr|r|br|b|bl|l|tl]
          </p>
          <C_H2>Gradient Color Stops</C_H2>
          <p>
            .from-[transparent|current|black|white]<br/>
            .from-[color]-[100|200|300|400|500|600|700|800|900]<br/>
            .via-[transparent|current|black|white]<br/>
            .via-[color]-[100|200|300|400|500|600|700|800|900]<br/>
            .to-[transparent|current|black|white]<br/>
            .to-[color]-[100|200|300|400|500|600|700|800|900]
          </p>
          <br/>
          <C_H1>BORDERS</C_H1>
          <C_H2>Border Radius</C_H2>
          <p>
            .rounded<br/>
            .rounded-[none|sm|md|lg|xl|2xl|3xl|full]<br/>
            .rounded-[t|r|b|l|tl|tr|bl|br]-[none|sm|md|lg|xl|2xl|3xl|full]
          </p>
          <C_H2>Border Width</C_H2>
          <p>
            .border<br/>
            .border-[0|2|4|8]<br/>
            .border-[t|r|b|l]<br/>
            .border-[t|r|b|l]-[0|2|4|8]
          </p>
          <C_H2>Border Color</C_H2>
          <p>
            .border-[transparent|current|black|white]<br/>
            .border-[color]-[100|200|300|400|500|600|700|800|900]<br/>
          </p>
          <C_H2>Border Opacity</C_H2>
          <p>
            .border-opacity-[0|25|50|75|100]
          </p>
          <C_H2>Border Style</C_H2>
          <p>
            .border-[solid|dashed|dotted|double|none]
          </p>
          <C_H2>Divide Width</C_H2>
          <p>
            .divide-[x|y]<br/>
            .divide-x-[0|2|4|8|reverse]<br/>
            .divide-y-[0|2|4|8|reverse]
          </p>
          <C_H2>Divide Color</C_H2>
          <p>
            .divide-[transparent|current|black|white]<br/>
            .divide-[color]-[100|200|300|400|500|600|700|800|900]<br/>
          </p>
          <C_H2>Divide Opacity</C_H2>
          <p>
            .divide-opacity-[0|25|50|75|100]
          </p>
          <C_H2>Divide Style</C_H2>
          <p>
            .divide-[solid|dashed|dotted|double|none]
          </p>
          <br/>
          <C_H1>TRANSITIONS AND ANIMATION</C_H1>
          <C_H2>Transition Property</C_H2>
          <p>
            .transition<br/>
            .transition-[none|all|colors|opacity|shadow|transform]
          </p>
          <C_H2>Transition Duration</C_H2>
          <p>
            .duration-[75|100|150|200|300|500|700|1000]
          </p>
          <C_H2>Transition Timing Function</C_H2>
          <p>
            .ease-[linear|in|out|in-out]
          </p>
          <C_H2>Transition Delay</C_H2>
          <p>
            .delay-[75|100|150|200|300|500|700|1000]
          </p>
          <C_H2>Animation</C_H2>
          <p>
            .animate-[none|spin|ping|pulse|bounce]
          </p>
          <br/>
          <C_H1>TRANSFORMS</C_H1>
          <C_H2>Scale</C_H2>
          <p>
            .scale-[0|50|75|90|95|100|105|110|125|150]<br/>
            .scale-[x|y]-[0|50|75|90|95|100|105|110|125|150]
          </p>
          <C_H2>Rotate</C_H2>
          <p>
            .rotate-[0|1|2|3|6|12|45|90|180]<br/>
            .-rotate-[1|2|3|6|12|45|90|180]
          </p>
          <C_H2>Translate</C_H2>
          <p>
            .translate-[x|y]-[0|1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]<br/>
            .-translate-[x|y]-[0|1|2|3|4|5|6|7|8|10|12|16|20|24|32|40|48|56|64|px|full|1/2]
          </p>
          <C_H2>Skew</C_H2>
          <p>
            .skew-[x|y]-[0|1|2|3|6|12]<br/>
            .-skew-[x|y]-[1|2|3|6|12]
          </p>
          <C_H2>Transform Origin</C_H2>
          <p>
            .origin-center<br/>
            .origin-top<br/>
            .origin-top-right<br/>
            .origin-right<br/>            
            .origin-bottom-right<br/>            
            .origin-bottom<br/>
            .origin-bottom-left<br/>
            .origin-left<br/>
            .origin-top-left
          </p>
          <br/>
          <C_H1>INTERACTIVITY</C_H1>
          <C_H2>Apperance</C_H2>
          <p>
            .apperance-none
          </p>
          <C_H2>Cursor</C_H2>
          <p>
            .cursor-[auto|default|pointer|wait|text|move|not-allowed]
          </p>
          <C_H2>Outline</C_H2>
          <p>
            .outline-[none|white|black]
          </p>
          <C_H2>Pointer Events</C_H2>
          <p>
            .pointer-events-[none|auto]
          </p>
          <C_H2>Transform Origin</C_H2>
          <p>
            .resize<br/>
            .resize-[none|y|x]
          </p>
          <C_H2>User Select</C_H2>
          <p>
            .select-[none|text|all|auto]
          </p>
          <br/>
          <C_H1>SVG</C_H1>
          <C_H2>Fill</C_H2>
          <p>
            .fill-current
          </p>
          <C_H2>Stroke</C_H2>
          <p>
            .stroke-current
          </p>
          <C_H2>Stroke Width</C_H2>
          <p>
            .stroke-[0|1|2]
          </p>
          <br/>
          <C_H1>A11Y</C_H1>
          <C_H2>Screen Readers</C_H2>
          <p>
            .sr-only<br/>
            .not-sr-only
          </p>
        </div>
      </div>
    </div>
    </>
  )
}