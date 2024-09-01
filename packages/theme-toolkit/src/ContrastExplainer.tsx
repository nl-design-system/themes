/**
 * @license EUPL-1.2
 * Copyright (c) 2024 NL Design System Community
 */

import { Canvas, CanvasContainerType } from './Canvas';
import { ContrastRatio } from './ContrastRatio';
import { Guideline } from './Guideline';
import {
  Button,
  ButtonGroup,
  Code,
  Heading2,
  Icon,
  PageContent,
  Paragraph,
  FormFieldTextbox,
} from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import Color from 'color';
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './ContrastExplainer.css';

const ExampleIcon = () => (
  <Icon style={{ '--utrecht-icon-size': '128px' }}>
    <svg width="680" height="800" viewBox="0 0 680 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_518_68)">
        <path
          d="M411.159 37.6128L419.601 33.6487L424.268 32.5505H442.459L459.994 28.5976L452.886 24.8436L410.271 26.3732L407.624 25.289L404.728 27.7179L403.596 32.0994L406.707 36.4838L411.159 37.6128ZM328.12 60.2375L352.533 49.4743L358.755 47.9446L366.742 44.4232L374.03 44.2046L376.491 42.9132L376.05 41.7926L375.603 39.5794L375.173 38.4812L385.595 38.0498L390.479 36.2989L394.699 30.5502L368.521 35.6097L366.058 37.3999L363.162 39.7923L339.422 44.6277H335.442L332.314 47.5076L322.766 50.7993L320.787 55.842L322.987 60.2347L328.12 60.2375ZM490.419 27.9505V28.8189L491.534 30.5586L495.086 26.1603L525.506 16.7025H527.947V14.7414L523.043 13.2202L505.531 14.7414L500.864 15.8396L494.206 18.7083L489.755 22.65L491.534 26.6197L490.419 27.9505ZM572.559 5.93358L573.221 3.97255L574.567 3.5243L574.988 2.89117H570.998L569.208 4.41237L568.786 5.9364L571.442 7.2755L572.559 5.93358ZM549.481 4.19945L555.723 6.35383L556.147 5.25001L556.611 4.83262L557.261 4.39275H558.155L548.364 0.00564575L546.129 0.246569L546.356 2.188L549.481 4.19945ZM279.953 97.2087L283.944 91.4629L297.94 78.041L303.031 76.0799L305.243 74.7717H309.898V72.8106L301.057 71.4995L289.046 78.5032L277.504 89.0536L269.953 98.7495L275.493 101.17L279.953 97.2087ZM677.997 114.138L679.561 109.289L679.994 104.703L679.776 100.08L679.321 91.9139H677.358L664.445 88.611L659.113 85.549L658.698 80.694L657.818 78.2623V76.9624L658.477 76.0799L659.778 74.7717V72.8106H658.686L657.122 74.3318L655.123 74.9902L652.911 74.5699L651.375 72.8106L648.264 73.6791L641.146 69.7094L635.577 67.9472L634.282 66.6642L633.391 65.3279L632.475 64.6611L632.262 64.0055L628.02 60.9239L627.141 60.5037L621.139 36.3129L618.987 33.5899L615.452 31.8081L597.894 28.9674L556.167 35.3324L529.771 43.0364L525.345 46.5271L523.795 46.9613L521.993 46.3001L518.899 43.6696L517.109 43.0168L482.478 44.1374L465.39 45.0031L453.404 51.1523L449.41 51.3765L442.965 55.9961L414.771 67.2272L408.529 72.5025L400.098 73.8163L396.551 75.1274L393.44 78.436L390.762 82.4001L387.872 85.7142L381.452 88.555L377.665 91.8579L371.443 99.1249L367.907 107.894L363 127.703L359.451 134.953L355.916 137.396L347.691 139.357L344.348 142.013L341.704 145.064L306.137 176.499L299.247 179.581L292.14 180.472L288.364 181.805L280.838 188.167L276.833 190.369L269.933 190.789L262.622 188.607L258.606 183.332L261.261 174.527L259.941 172.347L258.181 174.087L247.287 172.347L245.307 174.745L243.984 180.676L243.322 187.487L243.104 192.77L241.518 202.225L233.992 221.575L232.199 230.593L231.769 234.977L228.658 249.293L221.095 304.888L217.537 312.371V314.551L215.973 322.7L205.308 353.954L187.324 386.05L165.781 417.5L140.48 447.831L134.501 451.815L127.612 452.905L119.41 451.165L118.279 453.106L117.147 455.32L119.156 460.166L122.476 471.392L123.169 475.784L122.716 476.656L121.814 477.776L120.934 479.306L120.49 481.508L120.934 483.27L121.814 484.391L122.931 485.279L127.357 491.425L128.715 494.081L126.478 495.821L124.71 496.7L123.386 496.938L122.691 496.7L117.809 494.081L111.819 492.736L108.479 492.986L106.938 494.947L95.8511 498.258L90.7603 501.751L92.3102 509.47H94.1033L95.4353 509.245L96.0971 508.125L99.6437 507.245H104.081L108.53 505.945L111.85 503.514L116.972 507.015L121.18 510.982L124.054 516.924L125.163 526.133L127.601 529.876L139.807 533.627L144.236 536.708L146.015 538.692L140.014 539.115L136.902 540.415L134.679 542.858L134.255 545.264V548.346L134.679 551.64L135.568 554.072L136.902 555.599L138.67 556.929L140.46 557.585L148.218 557.823L150.433 559.983L151.321 565.281L147.078 561.787L142.426 560.454L126.673 559.563L122.006 560.874L112.673 565.281L126.67 578.229L130.87 580.68L133.548 581.101L139.094 580.442L141.761 580.68L149.086 583.955L157.093 585.28L161.974 588.116L165.75 592.738L167.289 598.918L164.871 605.291L159.545 606.813L153.784 606.603L150.226 607.684L146.657 605.941L137.553 607.252L133.364 605.941L130.686 602.428L127.125 592.738L124.721 588.317L117.388 581.935L108.742 578.431L91.8718 576.68V574.918L92.9776 573.797L96.0887 571.836L97.8818 571.186L96.3177 567.004L93.877 563.502L90.9922 560.857L88.3337 559.297L84.3402 558.876L36.8265 563.919L18.6326 575.15L16.8424 577.568L17.5042 582.188L19.5094 585.269L25.293 590.329L27.4962 593.598L29.9369 598.002L32.604 601.966L35.715 603.756L45.707 605.93L49.7089 605.709L57.0339 603.056L59.6925 603.277L66.582 609.9L77.2471 615.167L82.1286 620.209L83.8991 621.081L85.8788 620.856L88.1414 619.319L94.5614 618.663L97.2312 617.343L99.2279 614.514L104.553 604.633L106.972 603.061L114.325 603.711L117.224 605.045L126.998 613.399L130.556 615.592L134.334 616.685L150.529 616.923L154.511 615.803L156.519 613.158L158.275 614.472L158.719 616.652V619.534L159.163 623.028L160.501 626.333L161.183 627.202L166.273 627.443L168.27 628.549L172.708 630.945L174.687 631.603L176.011 632.046L182.912 632.485H184.235L187.575 630.732L187.804 629.611L188.466 625.857L188.237 625.44L187.338 623.227L183.359 618.629L182.912 617.974L182.035 616.212V613.351L183.166 611.147L183.588 609.186L181.384 606.757L190.717 601.481L196.705 599.299L200.048 597.966L204.692 597.548H205.351L207.565 597.966L208.889 600.428L208.671 603.922V605.025L207.13 608.53L206.892 609.841L206.674 611.149L207.772 612.021L209.995 613.573L211.089 613.805H212.22L213.555 613.573L217.342 612.9L222.659 614.251H223.321L225.773 614.012L228.214 613.122L230.004 611.81L243.763 595.119L249.544 592.038L251.962 592.27L253.32 592.69L255.087 593.349L255.967 593.777L258.167 595.349L259.96 597.741L260.416 601.944L259.717 604.597L259.299 606.123L258.829 608.989L258.611 610.3L259.299 612.92L259.96 615.136L252.191 611.612L250.212 611.85L249.095 615.172L252.867 616.685L265.311 617.125L266.884 617.545L268.651 617.996L271.972 619.545L275.521 621.069L279.297 619.974L281.302 617.755L283.746 615.354L286.427 611.612L287.748 609.861L288.845 608.065L290.432 605.446L291.093 603.683L291.752 602.123L292.21 600.369L292.448 599.478L293.542 597.929L296.215 599.714L296.453 600.154L296.75 600.333L302.064 603.823L303.388 606.247L305.61 610.449L304.949 615.071L302.969 619.456L302.74 621.638L302.307 625.361L303.402 628.02L309.389 634.598L310.291 637.032L312.047 643.196L312.735 644.717V644.958H312.95L315.86 646.501L322.715 645.829H323.422L325.838 646.05L328.966 650.031V659.901L332.077 660.797L338.729 659.251L359.604 660.142L363.365 658.831L370.719 653.788L371.598 653.34L374.279 652.034L378.066 652.477L380.046 653.788L382.26 655.091L384.939 658.402L385.615 659.276L386.958 664.548L387.62 670.933L391.625 674.438L401.605 677.536L402.932 678.407L404.035 679.276L405.825 681.27L406.934 682.153L407.81 682.811H410.938L414.94 681.929L418.238 681.27H420.701L423.564 683.024L427.35 688.067L429.576 689.821L429.805 690.059L432.472 689.381L435.128 688.725H436.01L438.233 688.947L439.797 692.471L440.244 693.785L438.898 695.096L437.767 696.216L437.108 699.298L441.107 703.458L440.001 704.131L439.546 704.371L438.887 704.587L437.756 705.005L435.776 705.243L433.796 705.005L434.022 705.683L434.237 706.983L434.455 707.862L434.899 708.733V708.974L433.556 712.698L432.676 714.485V714.701L431.344 716.463L429.364 714.701L428.021 715.591L427.345 717.118L427.119 718.214L426.901 719.752L426.683 721.954L429.104 725.287L426.231 731.863L419.335 742.87L423.125 741.749H424.882L426.683 742.62L426.231 743.511L424.664 745.931L421.553 752.316L419.327 755.602L418.45 756.258L416.451 756.913L414.912 757.591L414.443 757.804L403.998 769.251L401.577 771.904L401.792 776.067V778.056L402.216 778.709L404.66 782.2L408.659 784.855L409.324 785.074L412.435 786.626H412.65L415.113 787.287L414.898 789.467V790.346L414.191 792.781L413.096 796.745H413.314L414.898 797.625L416.21 798.496L417.556 798.734H418.23L419.118 798.496L420.215 798.266L422.678 794.532L422.893 794.109L424.432 792.82L425.563 793.24L426.225 793.453L429.76 797.434L431.562 798.734L446.871 798.314L450.635 799.602H450.873L463.738 800.02L465.084 799.804L467.288 799.387L467.734 795.874L466.626 794.109L464.836 792.82L463.512 790.596L462.805 787.094L465.486 787.758L467.935 785.318L468.823 782.009L468.393 779.611L468.116 777.137L469.672 774.507L472.121 773.196L476.081 773.434L478.077 770.994L479.208 768.159V765.945L477.622 760.225L477.859 758.463L478.739 756.902L479.16 755.81L473.402 753.849L469.194 751.207L467.859 749.672L467.415 747.481V743.279L468.303 740.197L469.397 737.754L468.956 736.227L462.531 736.883L457.867 735.353L455.412 735.132L452.974 735.787L448.307 737.989L445.867 738.407L445.638 731.369L442.957 723.461L441.862 717.076L446.743 714.443L449.207 715.74L451.413 718.362L453.862 720.603L457.168 720.18L459.431 717.718L462.729 710.714L465.192 708.053L481.386 695.289L491.37 689.798L494.051 686.305L490.275 682.78L494.257 679.466L495.592 678.587L491.588 677.287L482.724 683.209L478.504 681.03L477.155 675.987L477.605 669.824L479.175 664.33L480.942 661.248L484.729 656.844L493.833 640.358L495.592 638.584L500.016 635.503L501.797 633.102L502.688 629.597L503.141 623.434L504.272 621.022L501.588 617.94L501.809 612.897L503.152 606.964L503.814 601.47L502.937 596.411L501.588 587.166L494.517 579.019L482.747 562.975L482.062 559.454L482.95 555.531L484.93 549.127L472.944 544.085L468.942 539.042L471.403 531.108L469.604 529.343L465.622 526.486L463.614 525.595L458.523 525.833L456.736 525.175L456.962 522.093L460.966 518.157L461.184 512.408L458.718 506.909L454.759 503.844L455.398 501.404L458.294 499.46L465.63 498.118L468.965 496.588L472.5 493.958L474.941 492.624L482.034 490.663L487.806 492.19L492.026 493.311L494.928 493.963L492.47 490.223L485.824 483.424L483.598 481.852L489.585 478.572L495.346 481.222L501.13 485.817L507.117 488.259L512.663 487.139L514.25 487.355L515.568 488.699L517.548 492.19L518.436 493.081L525.102 494.201L527.987 495.731L528.416 500.129L535.082 498.364L535.764 495.51L534.429 489.125L545.742 492.422H549.277L552.168 491.111L560.813 484.525L578.348 478.589L594.101 478.138L598.768 475.507L603.01 470.672L607.012 463.388L608.551 461.867L609.874 461.637L610.779 460.766L610.994 457.241L610.55 455.28L609.671 453.941L605.245 449.103L593.703 442.73L589.935 441.648L587.268 439.645L586.816 435.272L588.157 432.423L589.723 431.77H591.474L593.703 430.65L595.04 428.865L596.565 425.114L597.476 423.59L600.586 420.508L603.254 418.973L614.801 417.685L617.024 415.709L621.006 407.787L624.346 404.285L631.898 400.971L635.422 397.909L639.664 391.303L641.643 389.112L649.41 384.274L649.851 382.728L648.315 380.094L646.751 373.948V368.625L648.072 364.266L651.61 356.116L653.59 345.35L651.149 338.066L640.509 320.68L639.378 321.12L638.284 323.081L636.72 324.63L632.285 325.955L627.618 326.171L622.734 325.275L613.622 321.773L599.65 319.812L595.004 317.61L591.446 313.64L590.337 309.438L590.1 304.395L589.426 299.353L587.223 294.94L590.1 294.73L599.885 289.87L594.093 285.034L592.778 283.292V280.829L593.669 278.437L593.889 275.775L592.348 272.694L598.55 268.309L604.549 266.528L621.413 266.309L630.718 269.181L639.378 267.858L642.068 268.979L648.276 270.94L651.604 264.796L652.928 254.683L654.481 223.43L656.028 213.745L659.139 204.954L673.594 182.298L677.384 172.619L678.922 163.374L679.14 153.037L677.596 132.121L676.911 129.728L676.04 128.179L675.373 126.417L675.161 122.901L675.579 120.489L677.997 114.138ZM445.558 306.575L443.55 313.374L440.233 319.106L433.123 329.216L429.37 333.382L423.598 337.584L417.599 340.666L407.386 343.714L402.049 348.098L394.051 357.797L388.293 371.219L386.293 373.421L370.999 377.153L363.447 376.494L355.667 372.768L339.232 360.89L335.671 360.45L328.143 361.321L323.923 360.89L320.58 359.587L311.717 353.41L308.17 352.121L300.163 351.469L297.301 350.597L286.396 343.753L287.295 342.442L288.39 342.011L288.63 341.795V339.593L291.3 340.022L292.417 340.7L293.74 341.795V339.593L296.422 341.571L297.96 338.489L299.295 334.085L301.518 331.906L303.498 331.25L305.495 329.466L307.059 327.07L308.405 323.989L305.517 322.459L304.196 320.042L303.065 317.624L301.066 315.839L304.626 314.31L305.95 314.1L305.07 311.217L304.638 310.096L308.187 306.37L306.863 299.367L301.1 286.382L298.639 278.042L298.424 270.769L301.102 265.914L307.31 264.816L311.974 266.567L313.309 267.46L316.434 270.769L318.875 270.329L321.556 269.239L332.428 262.401L335.301 259.121L337.524 252.288L340.208 249.892L345.977 247.01L345.316 244.161L344.872 240.216L344.207 236.681L343.093 235.162L334 231.19L331.115 230.977L328.675 231.408L326.678 232.501L324.91 234.288L322.467 235.812L320.255 234.501L318.25 232.299L316.491 231.179L314.05 227.212L313.583 208.741L312.706 202.376L303.82 184.548L300.03 181.497L307.384 178.415L314.915 173.79L342.898 149.171L357.771 139.713L359.751 145.862L360.868 148.54L362.647 151.622L364.415 152.703L365.085 156.457L364.873 160.189L363.756 163.691L365.512 166.997L366.208 171.619L365.328 176.241L361.985 180.163L364.451 184.78L362.865 186.999L359.997 188.523L358.003 191.834L357.126 192.274L356.235 193.143V196.017L356.923 197.768L358.026 198.636L359.363 199.292L360.478 200.611L364.242 203.693L369.785 205.242L380.897 205.705L383.098 206.352L387.32 208.974L389.99 209.627L392.866 209.206L394.654 208.318L398.407 205.705L401.317 204.584H403.995L416.866 208.316L418.872 209.862L412.435 211.156L407.101 214.91L402.889 220.642L399.334 227.646L397.77 234.93L396.433 247.007L396.648 258.213L399.776 263.051L401.979 264.83L406.198 272.744L407.774 274.949L410.636 275.817L433.963 274.506L437.074 275.162L439.517 276.946L441.296 280L442.617 284.835L445.117 295.534L445.779 300.857L445.558 306.575ZM411.374 280.154L406.495 275.111L403.384 277.529L393.177 280.818L390.049 283.031L382.283 290.718L380.524 290.968L376.963 290.508L375.642 291.629L371.4 302.429L368.959 304.18L362.313 306.841L354.304 314.069L341.011 319.344L333.451 326.838L322.362 332.769L317.26 337.584L314.149 339.347L315.931 343.728L316.592 347.914L317.698 351.222L321.474 353.183L329.48 352.754L332.345 353.183L344.558 357.808L350.104 360.89L360.735 369.255L365.39 371.197L377.184 370.779L383.389 368.345L387.167 363.302L388.273 356.038L386.95 347.219L391.831 344.577L394.294 343.675L397.157 343.459L399.841 342.148L403.602 336.66L405.828 335.349L410.494 334.469L418.931 330.508L424.022 329.628L428.92 327.855L433.578 323.451L437.343 317.744L440.25 312.251L442.908 305.213V299.481L439.351 286.712L411.374 280.154ZM65.0633 540.757L73.0388 540.289L74.1559 539.417L78.6047 534.375L81.0454 534.588L82.5868 535.91L83.704 537.459L84.8211 538.552L91.688 541.415L94.584 543.606L95.6898 547.141L97.449 550.873L101.236 553.503L107.896 555.924L111.007 556.137L124.56 553.503L127.671 552.411L130.556 550.433L132.338 547.57L131.894 542.953L128.571 540.524L121.217 538.563L119.461 537.022L118.355 535.47L117.453 533.946L110.578 525.802L107.687 523.617L103.685 522.749L86.8149 522.281L84.3827 520.958L81.4867 520.737L80.8277 520.958L65.9513 523.177L59.5172 527.346L59.0731 536.361L61.5139 539.653L65.0633 540.757ZM146.077 625.193L144.971 626.277L141.86 630.681L135.862 630.241L134.756 629.813L132.997 628.479L128.754 627.827L126.735 627.157L125.197 625.406L123.2 621.011L122.094 619.26L119.653 617.71L115.648 616.161L111.873 615.948L110.105 618.369L109.226 623.882L106.762 626.717L89.4678 634.001L85.2481 634.659L78.5877 632.668H71.4804L67.6935 631.13L62.3651 625.627L45.0509 620.792L33.953 613.755L31.3058 613.976L28.6247 616.17L-0.0165405 625.415L0.882809 632.452L1.31837 636.183L0.656547 643.249L0.427481 649.821L1.99996 654.441L2.87955 656.861L7.119 661.472L9.98398 662.795L12.4473 663.89L15.9968 664.33L17.7757 664.546L24.883 663.447L26.215 663.235L26.4441 662.114L26.6619 660.568L26.215 657.049L26.4441 655.948L26.6619 653.763L28.6416 651.785H28.8594L31.3228 651.11L34.1849 650.894L41.3035 649.37H41.7475L45.7523 649.143L50.1784 649.799L71.7152 656.839L75.0553 659.041L75.932 662.781L75.7171 665.862L75.932 668.723L78.6047 671.804L80.6014 672.695L80.8191 672.908L101.68 672.695L104.361 671.804L105.685 671.376L106.779 670.482L113.68 665.201L135.638 654.219L144.31 647.398L151.199 637.94L151.861 635.959L152.073 635.307L153.411 628.933V627.818L149.635 625.611L146.077 625.193ZM249.276 164.705L255.274 162.954L259.279 155.247L267.5 148.448L272.385 140.946L274.826 136.334L275.931 132.62H272.405V130.835L275.439 128.176V123.557L273.672 118.279L271.231 114.337L272.13 113.004L272.348 111.69L271.893 110.168L271.231 108.381L265.685 108.165L261.259 115.449L257.042 124.249L248.585 131.269L244.366 138.329L240.842 146.896L239.71 154.592L243.028 162.046L249.276 164.705Z"
          fill="currentColor"
        />
      </g>
    </svg>
  </Icon>
);

export const parseColor = (colorString: string) => {
  let query = String(colorString || '')
    .trim()
    .toLowerCase();

  // Parse colors such as `fff` and `ffffff`
  const HEX = /^\s*([0-9a-f]{3,6})\s*$/i;
  if (HEX.test(query)) {
    query = query.replace(HEX, '#$1');
  }

  let color;

  // Parse colors such as `hsl(0deg 0% 20%)`
  try {
    color = Color(query);
  } catch (e) {
    color = null;
  }

  return color;
};

const Canvas = () => {};

const Guideline = () => {};

const ExampleRendering = ({
  children,
  label,
  ...props
}: PropsWithChildren<{ label: string } & HTMLAttributes<HTMLDivElement>>) => (
  <div role="img" aria-label={label} className="nlds-example-rendering" {...props}>
    {children}
  </div>
);

const ExampleNormalText = () => (
  <ExampleRendering
    label="voorbeeldtekst in verschillende font-sizes groter dan 18.5px, met vette tekst"
    style={{ '--utrecht-paragraph-font-size': '16px' }}
  >
    <Paragraph>
      16px: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </Paragraph>
  </ExampleRendering>
);

const BoldTextExample = (): ReactNode => (
  <ExampleRendering
    label="voorbeeldtekst in verschillende font-sizes groter dan 18.5px, met vette tekst"
    style={{ '--utrecht-paragraph-font-weight': '600' }}
  >
    <Paragraph style={{ '--utrecht-paragraph-font-size': '18.5px' }}>18.5px: Lorem ipsum</Paragraph>
    <Paragraph style={{ '--utrecht-paragraph-font-size': '24px' }}>24px: Lorem ipsum</Paragraph>
    <Paragraph style={{ '--utrecht-paragraph-font-size': '32px' }}>32px: Lorem ipsum</Paragraph>
    <Paragraph style={{ '--utrecht-paragraph-font-size': '48px' }}>48px: Lorem ipsum</Paragraph>
  </ExampleRendering>
);

const LargeTextExample = (): ReactNode => (
  <ExampleRendering label="voorbeeldtekst in verschillende font-sizes groter dan 24px">
    <Paragraph style={{ '--utrecht-paragraph-font-size': '24px' }}>24px: Lorem ipsum</Paragraph>
    <Paragraph style={{ '--utrecht-paragraph-font-size': '32px' }}>32px: Lorem ipsum</Paragraph>
    <Paragraph style={{ '--utrecht-paragraph-font-size': '48px' }}>48px: Lorem ipsum</Paragraph>
  </ExampleRendering>
);

const ContrastPage = () => {
  const backgroundColor = 'white';
  const color = 'black';

  const parsedBackgroundColor = parseColor(backgroundColor);
  const parsedColor = parseColor(color);
  const baseURL = 'https://nldesignsystem.nl/contrast/';
  const shareURL = `${baseURL}?${new URLSearchParams({
    ['background-color']: backgroundColor,
    ['color']: color,
  }).toString()}`;
  const contrastRatio = !!parsedBackgroundColor && !!parsedColor ? parsedBackgroundColor.contrast(parsedColor) : NaN;

  interface Recommendation {
    positive: boolean;
    result: boolean;
    content?: ReactNode;
    container?: CanvasContainerType;
    example?: () => ReactNode;
  }
  const recommendations: Recommendation[] = [
    {
      positive: true,
      result: contrastRatio >= 4.5,
      content: <>Je mag de kleuren gebruiken voor alle tekst, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
      container: 'document',
      example: ExampleNormalText,
    },
    {
      positive: true,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren voor iconen gebruiken, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
      container: 'document',
      example: ExampleIcon,
    },
    {
      positive: true,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren gebruiken voor tekst groter dan 24px, als je wilt voldoen aan WCAG 2.2 AA niveau.</>,
      container: 'document',
      example: LargeTextExample,
    },
    {
      positive: true,
      result: contrastRatio >= 3,
      content: (
        <>Je mag de kleuren gebruiken voor vette tekst groter dan 18.5px, als je wilt voldoen aan WCAG 2.2 AA niveau.</>
      ),
      container: 'document',
      example: BoldTextExample,
    },
    /*
    {
      positive: true,
      result: contrastRatio >= 7,
      content: <>Je mag de kleuren gebruiken voor tekst, als je wilt voldoen aan WCAG 2.2 AAA niveau.</>,
      container: 'document',
    },
    */
    {
      positive: false,
      result: contrastRatio >= 3,
      content: <>Je mag de kleuren niet voor iconen gebruiken, hiermee zou je niet voldoen aan WCAG 2.2 AA niveau.</>,
      container: 'document',
      example: ExampleIcon,
    },
    {
      positive: false,
      result: contrastRatio >= 4.5,
      content: <>Je mag de kleuren niet gebruiken voor tekst, hiermee zou je niet voldoen aan WCAG 2.2 AA niveau.</>,
      container: 'document',
      example: ExampleNormalText,
    },
    {
      positive: false,
      result: contrastRatio >= 7,
      content: <>Je mag de kleuren niet gebruiken voor tekst, als je wilt voldoen aan WCAG 2.2 AAA niveau.</>,
      container: 'document',
      example: ExampleNormalText,
    },
  ];

  const dos = recommendations.filter(({ result, positive }) => positive && result === positive);
  const donts = recommendations.filter(({ result, positive }) => !positive && result === positive);

  return (
    <div>
      <PageContent
        style={{
          '--utrecht-space-around': 1,
          maxInlineSize: '600px',
          marginInlineEnd: 'auto',
          marginInlineStart: 'auto',
        }}
      >
        <Heading1>Contrast van kleuren</Heading1>
        <Paragraph lead>
          Vul de CSS-kleurcodes in van twee kleuren. Controleer dan voor welke toepassingen je de combinatie kunt
          gebruiken.
        </Paragraph>
        <form method="get" action="./">
          <FormFieldTextbox
            name="background-color"
            label={<Code>background-color</Code>}
            defaultValue={backgroundColor}
            style={{
              '--utrecht-textbox-font-family': 'var(--utrecht-code-font-family)',
            }}
          />
          <FormFieldTextbox
            name="color"
            defaultValue={color}
            label={<Code>color</Code>}
            style={{
              '--utrecht-textbox-font-family': 'var(--utrecht-code-font-family)',
            }}
          />
          <Button type="submit" appearance="primary-action-button">
            Contrast berekenen
          </Button>
        </form>
        {typeof contrastRatio === 'number' && (
          <div>
            <Heading2 id="output">Resultaat</Heading2>
            <ContrastRatio {...{ backgroundColor, color, contrastRatio }} />
            <ButtonGroup style={{ display: 'none' }}>
              <Button appearance="secondary-action-button" onClick={() => navigator.clipboard.writeText(shareURL)}>
                Link kopiëren
              </Button>
            </ButtonGroup>
            {dos.length > 0 && (
              <>
                <Paragraph>Gebruik deze kleuren voor bijvoorbeeld:</Paragraph>
                <div>
                  {dos.map(({ container, content, example, positive }, index) => (
                    <Guideline
                      key={index}
                      appearance={positive ? 'do' : 'dont'}
                      title={content}
                      displayCode={false}
                      figure
                    >
                      <Canvas
                        language="html"
                        code={null}
                        displayCode={false}
                        container={container}
                        designTokens={{
                          backgroundColor,
                          color,
                          forcedColorAdjust: 'none',
                          '--utrecht-surface-background-color': backgroundColor,
                          '--utrecht-surface-color': color,
                          '--utrecht-document-background-color': backgroundColor,
                          '--utrecht-document-color': color,
                          '--utrecht-icon-color': 'currentColor',
                          '--utrecht-paragraph-color': 'currentColor',
                        }}
                      >
                        {example}
                      </Canvas>
                    </Guideline>
                  ))}
                </div>
              </>
            )}
            {donts.length > 0 && (
              <>
                <Heading2>Niet doen</Heading2>
                <Paragraph>
                  Deze kleuren moet je <strong>niet gebruiken</strong> voor:
                </Paragraph>{' '}
                <div>
                  {donts.map(({ container, content, example, positive }, index) => (
                    <Guideline key={index} appearance={positive ? 'do' : 'dont'} title={content} displayCode={false}>
                      <Canvas
                        language="html"
                        code={null}
                        displayCode={false}
                        container={container}
                        designTokens={{
                          backgroundColor,
                          color,
                          forcedColorAdjust: 'none',
                          '--utrecht-surface-background-color': backgroundColor,
                          '--utrecht-surface-color': color,
                          '--utrecht-document-background-color': backgroundColor,
                          '--utrecht-document-color': color,
                          '--utrecht-icon-color': 'currentColor',
                          '--utrecht-paragraph-color': 'currentColor',
                        }}
                      >
                        {example}
                      </Canvas>
                    </Guideline>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </PageContent>
    </div>
  );
};

export default ContrastPage;
