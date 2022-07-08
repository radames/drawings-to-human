import type { Color } from './types';

export const COLOR_LIST: Color[] = [
	{ color: [0, 0, 0], label: 'background' },
	{ color: [255, 140, 0], label: 'bag' },
	{ color: [255, 255, 0], label: 'belt' },
	{ color: [255, 250, 205], label: 'dress' },
	{ color: [130, 165, 180], label: 'earrings' },
	{ color: [0, 100, 0], label: 'eyeglass' },
	{ color: [16, 78, 139], label: 'face' },
	{ color: [245, 222, 179], label: 'footwear' },
	{ color: [213, 140, 88], label: 'gloves' },
	{ color: [255, 0, 0], label: 'hair' },
	{ color: [127, 255, 212], label: 'headwear' },
	{ color: [70, 130, 180], label: 'leggings' },
	{ color: [90, 140, 90], label: 'necklace' },
	{ color: [50, 205, 50], label: 'neckwear' },
	{ color: [220, 220, 220], label: 'outer' },
	{ color: [211, 211, 211], label: 'pants' },
	{ color: [50, 205, 174], label: 'ring' },
	{ color: [185, 210, 205], label: 'rompers' },
	{ color: [144, 238, 144], label: 'skin' },
	{ color: [250, 235, 215], label: 'skirt' },
	{ color: [160, 140, 88], label: 'socks' },
	{ color: [225, 141, 151], label: 'tie' },
	{ color: [255, 250, 250], label: 'top' },
	{ color: [50, 155, 250], label: 'wrist wearing' }
];

export const API = 'https://hf.space/embed/radames/Text2Human-API';
// export const API = 'https://hf.space/embed/CVPR/Text2Human';
// 
export const IMAGES_LIST = [
	'/samples/MEN-Pants-id_00002565-02_1_front_segm.png',
	'/samples/MEN-Pants-id_00005213-02_4_full_segm.png',
	'/samples/WOMEN-Blouses_Shirts-id_00002356-02_4_full_segm.png',
	'/samples/WOMEN-Blouses_Shirts-id_00004090-03_7_additional_segm.png',
	'/samples/WOMEN-Cardigans-id_00000853-01_2_side_segm.png',
	'/samples/WOMEN-Cardigans-id_00000899-02_1_front_segm.png',
	'/samples/WOMEN-Cardigans-id_00006462-02_7_additional_segm.png',
	'/samples/WOMEN-Dresses-id_00000021-05_1_front_segm.png',
	'/samples/WOMEN-Dresses-id_00002430-04_1_front_segm.png',
	'/samples/WOMEN-Dresses-id_00002966-01_7_additional_segm.png',
	'/samples/WOMEN-Dresses-id_00007332-01_3_back_segm.png',
	'/samples/WOMEN-Graphic_Tees-id_00007242-01_4_full_segm.png',
	'/samples/WOMEN-Jackets_Coats-id_00005263-06_1_front_segm.png',
	'/samples/WOMEN-Jackets_Coats-id_00006296-05_7_additional_segm.png',
	'/samples/WOMEN-Rompers_Jumpsuits-id_00004575-02_1_front_segm.png',
	'/samples/WOMEN-Skirts-id_00006761-01_1_front_segm.png',
	'/samples/WOMEN-Sweaters-id_00004667-01_4_full_segm.png',
	'/samples/WOMEN-Tees_Tanks-id_00001620-02_4_full_segm.png',
	'/samples/WOMEN-Tees_Tanks-id_00005288-01_2_side_segm.png',
	'/samples/WOMEN-Tees_Tanks-id_00006566-04_4_full_segm.png'
];


export const SECTIONS = [
    "lower clothing texture",
    "upper clothing texture",
    "outer clothing texture"
  ];

export const TEXTURES = [
    "pure color",
    "stripe/spline",
    "plaid/lattice",
    "floral",
    "denim"
  ];